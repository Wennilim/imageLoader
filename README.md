## How to install ffmpeg on MacOS (Sonoma)?
Before installing, you must make sure that `brew` has been installed in your computer.
Then, you may run this code below:
```bash
brew install ffmpeg
```
If you met this error, please don't be panic:
```bash
Error: gcc: the bottle needs the Apple Command Line Tools to be installed.
  You can install them, if desired, with:
    xcode-select --install

If you're feeling brave, you can try to install from source with:
  brew install --build-from-source gcc

It is expected behaviour that most formulae will fail to build from source.
It is expected behaviour that Homebrew will be buggy and slow when building from source.
Do not create any issues about failures building from source on Homebrew's GitHub repositories.
Do not create any issues building from source even if you think this message is unrelated.
Any opened issues will be immediately closed without response.
Do not ask for help from Homebrew or its maintainers on social media.
You may ask for help building from source in Homebrew's discussions but are unlikely to receive a response.
If building from source fails, try to figure out the problem yourself and submit a fix as a pull request.
We will review it but may or may not accept it.
```

Step 1:
```bash
  xcode-select --install
```
Step 2: run the install ffmpeg code again
```bash
brew install ffmpeg
```

## How to Compress image using ffmpeg?
### Single Image Compression
If you only want to compress a single of image, you may run the code below in your desired file directory path. For my case,I will...
Step 1: Go to my deisired path drectory
```bash
cd /Desktop/react/imgLaoder/public/images
```
Step 2: Compress target image
```bash
ffmpeg -i img1.jpg -vf scale=20:-1 img1-small.jpg 
```
### Batch Images Compression
Step 1: Write a simple bash script using `nano` or `vim` (For my case: I use nano)
```bash
nano batch_compress.sh
```
Step 2: copy the script below into yours and remember to replace the path with yours  
```shell
#!/bin/bash


input_folder="/Users/wenni/Downloads/Wallpapers"


output_folder="/Users/wenni/Desktop/imgCompress"


mkdir -p "$output_folder"


for file in "$input_folder"/*
do
    if [ -f "$file" ]; then  
        filename=$(basename "$file")  
        output_file="$output_folder/${filename%.*}-small.${filename##*.}"  

        ffmpeg -i "$file" -vf scale=20:-1 "$output_file"

        echo "压缩完成: $output_file"
    fi
done

echo "所有图像压缩完成！"
```
Step 3: Save your script (press Enter)

Step 4: Run the script 
```bash
cd Downloads/Wallpapers
```
```bash
chmod +x batch_compress.sh
```
```bash
./batch_compress.sh
```
If you want to edit the info from the script, you can run this code below in your terminal:
```bash
open -e batch_compress.sh
```
