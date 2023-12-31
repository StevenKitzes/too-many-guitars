echo ""
echo "Build and push to gh-pages"

echo ""
echo "Build step:"
echo "$ npm run build"
npm run build

echo ""
echo "Check out GitHub Pages branch:"
echo "$ git checkout gh-pages"
git checkout gh-pages

echo ""
echo "Clean old build content:"
echo "$ rm -rf img"
echo "$ rm -rf static"
rm -rf img
rm -rf static

echo ""
echo "Copy build folder to root:"
echo "$ cp -R build/ ."
cp -R build/ .

echo ""
echo "Make sure all files staged for Git commit:"
echo "$ git add -A"
git add -A

echo ""
echo "Create Git commit:"
echo "$ git commit -am 'updating gh-pages content . . .'"
git commit -am "updating gh-pages content . . ."

echo ""
echo "Push:"
echo "$ git push -u origin gh-pages"
git push -u origin gh-pages

echo ""
echo "Return to main branch:"
echo "$ git checkout main"
git checkout main

echo ""
echo "All done!"

echo ""
