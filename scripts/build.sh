echo "Build and push to gh-pages"

echo "Build step:"
echo "$ npm run build"
npm run build

echo "Check out GitHub Pages branch:"
echo "$ git checkout gh-pages"
git checkout gh-pages

echo "Copy build folder to root:"
echo "$ cp -R build/ ."
