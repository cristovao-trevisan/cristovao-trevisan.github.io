rm -rf docs
npm run export
cp -r __sapper__/export/webpage docs

git add .
git commit -m "Publish to github pages"
git push
