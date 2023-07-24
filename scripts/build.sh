echo "Build and push to gh-pages"

echo "Build step:"
echo "$ npm run build"
npm run build

echo "Check out GitHub Pages branch:"
echo "$ git checkout gh-pages"
git checkout gh-pages

echo "Copy build folder to root:"
echo "$ cp -R build/ ."
cp -R build/ .

echo "Create Git commit:"
echo "$ git commit -am 'updating gh-pages content . . .'"
git commit -am "updating gh-pages content . . ."

echo "Push:"
echo "$ git push -u origin gh-pages"
git push -u origin gh-pages

echo "Return to main branch:"
echo "$ git checkout main"
git checkout main

echo "All done!"
