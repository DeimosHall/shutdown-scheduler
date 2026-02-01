use std::{process::Command};

use serde::Deserialize;

#[derive(Deserialize)]
struct Time {
    hours: u32,
    minutes: u32,
}

impl Time {
    fn to_minutes(&self) -> u32 {
        self.hours * 60 + self.minutes
    }
}

fn execute_command(command: &str, args: Vec<&str>) -> bool {
    Command::new(command)
        .args(args)
        .status()
        .map(|status| status.success())
        .unwrap_or(false)
}

#[tauri::command]
fn cancel() -> bool {
    println!("Canceling shutdown command");
    execute_command("shutdown", vec!["-c"])
}

#[tauri::command]
fn shutdown(time: Time) -> bool {
    println!("Shutting down in {} hours and {} minutes or {} minutes", time.hours, time.minutes, time.hours * 60 + time.minutes);
    execute_command("shutdown", vec![format!("+{}", time.to_minutes()).as_str()])
}

#[tauri::command]
fn reboot(time: Time) -> bool {
    execute_command("shutdown", vec![format!("+{}", time.to_minutes()).as_str(), "-r"])
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![cancel, shutdown, reboot])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
