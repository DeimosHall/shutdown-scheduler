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

    fn to_format(&self, mode: &str) -> String {
        match mode {
            "COUNTDOWN" => format!("+{}", self.to_minutes()),
            "CLOCK" => format!("{}:{}", self.hours, self.minutes),
            &_ => String::from(""),
        }
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
fn shutdown(time: Time, mode: &str) -> bool {
    execute_command("shutdown", vec![time.to_format(mode).as_str()])
}

#[tauri::command]
fn reboot(time: Time, mode: &str) -> bool {
    execute_command("shutdown", vec![time.to_format(mode).as_str(), "-r"])
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[cfg(feature = "nvidia")]
    {
        std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");
        eprintln!("NVIDIA feature enabled: WEBKIT_DISABLE_DMABUF_RENDERER set to 1");
    }
    #[cfg(not(feature = "nvidia"))]
    {
        eprintln!("No NVIDIA feature set");
    }

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![cancel, shutdown, reboot])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
