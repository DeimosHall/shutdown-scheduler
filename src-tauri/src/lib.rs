use std::{process::Command};

use serde::Deserialize;

#[derive(Deserialize)]
struct Time {
    hours: u32,
    minutes: u32,
}

#[tauri::command]
fn cancel() -> bool {
    println!("Canceling shutdown command");

    let status = Command::new("shutdown")
        .arg("-c")
        .status();

    if let Ok(status) = status {
        status.success()
    } else {
        false
    }
}

#[tauri::command]
fn shutdown(time: Time) -> bool {
    println!("Shutting down in {} hours and {} minutes or {} minutes", time.hours, time.minutes, time.hours * 60 + time.minutes);

    let status = Command::new("shutdown")
        .arg(format!("+{}", time.hours * 60 + time.minutes))
        .status();

    if let Ok(status) = status {
        status.success()
    } else {
        false
    }
}

#[tauri::command]
fn reboot(time: Time) -> bool {
    let status = Command::new("shutdown")
        .arg(format!("+{}", time.hours * 60 + time.minutes))
        .arg("-r")
        .status();

    if let Ok(status) = status {
        status.success()
    } else {
        false
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![cancel, shutdown, reboot])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
