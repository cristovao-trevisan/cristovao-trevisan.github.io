# Webpage

This is my personal webpage source and hosting.

Built with svelte's sapper.

## Image Compression

```sh
  mogrify -path output-folder -strip -resize "Width"x"Height" -format jpg -quality 90% input-folder/*.jpg
```
