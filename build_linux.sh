#!/bin/bash

echo "Building standard version..."
NO_STRIP=true yarn tauri build

echo "Building NVIDIA version..."
NO_STRIP=true yarn tauri build --config src-tauri/tauri.conf.nvidia.json --features nvidia
