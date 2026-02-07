#!/bin/bash

# TODO: the script is currently not working as expected

# echo "Building NVIDIA version..."
# NO_STRIP=true yarn tauri build --features nvidia

# echo "Renaming NVIDIA packages..."
# NVIDIA_TARGET_DIR="src-tauri/target/release/bundle"

# # Iterate through package types (deb, rpm, AppImage)
# for pkg_type in "deb" "rpm" "AppImage"; do
#     find "${NVIDIA_TARGET_DIR}" -type f -name "*.${pkg_type}" ! -name "*nvidia*" -print0 | while IFS= read -r -d $'\0' file; do
#         filename=$(basename "$file")
#         dirname=$(dirname "$file")
#         # Insert "-nvidia" before the file extension
#         new_filename="${filename%.*}-nvidia.${filename##*.}"
#         mv "$file" "${dirname}/${new_filename}"
#         echo "Renamed: $filename to $new_filename"
#     done
# done

echo "Building standard version..."
NO_STRIP=true yarn tauri build
