echo Folder?
read FOLDER



echo "Generating blur"
mkdir $FOLDER/blur
mogrify -path $FOLDER/blur -strip -resize 20x20 -format jpg -quality 30% $FOLDER/high-resolution/*
echo "Generating 400px"
mkdir $FOLDER/400px
mogrify -path $FOLDER/400px -strip -resize 400x400 -format jpg -quality 90% $FOLDER/high-resolution/*
echo "Generating 2048px"
mkdir $FOLDER/2048px
mogrify -path $FOLDER/2048px -strip -resize 2048x2048 -format jpg -quality 90% $FOLDER/high-resolution/*
