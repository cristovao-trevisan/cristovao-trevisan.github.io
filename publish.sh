rm -rf docs
npm run export

cp -r __sapper__/export/webpage docs

# add .nojekyll to every docs subfolder
for D in `find docs -type d`
do
  touch $D/.nojekyll
done

git add .
git commit -m "Publish to github pages"
git push
