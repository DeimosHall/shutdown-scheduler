#!/bin/bash

echo "Building NVIDIA version..."
NO_STRIP=true yarn tauri build --features nvidia

echo "Renaming NVIDIA packages..."
NVIDIA_TARGET_DIR="src-tauri/target/release/bundle"

# Iterate through package types (deb, rpm, AppImage)
for pkg_type in "deb" "rpm" "AppImage"; do
    find "${NVIDIA_TARGET_DIR}" -type f -name "*.${pkg_type}" ! -name "*nvidia*" -print0 | while IFS= read -r -d $'\0' file; do
        filename=$(basename "$file")
        dirname=$(dirname "$file")
        # Insert "-nvidia" before the version number, or before the extension
        if [[ "$filename" =~ (.*)-([0-9]+\.[0-9]+\.[0-9]+.*) ]]; then
            new_filename="${BASH_REMATCH[1]}-nvidia-${BASH_REMATCH[2]}"
        else
            # Fallback if version pattern is not matched, append before extension
            new_filename="${filename%.*}-nvidia.${filename##*.}"
        fi
        mv "$file" "${dirname}/${new_filename}"
        echo "Renamed: $filename to $new_filename"
    done
done

echo "Building standard version..."
NO_STRIP=true yarn tauri build
