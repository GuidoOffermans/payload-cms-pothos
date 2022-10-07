rm -rf ~/apps/payload-cms/app

mkdir ~/apps/payload-cms/app

cp ~/apps/payload-cms/artifacts/build.tgz ~/apps/payload-cms/app

tar -xzf ~/apps/payload-cms/app/build.tgz

rm ~/apps/payload-cms/app/build.tgz

npx pm2
