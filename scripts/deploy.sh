pm2 delete ~/apps/payload-cms/ecosystem.config.js

rm -rf ~/apps/payload-cms/app

mkdir ~/apps/payload-cms/app

cp ~/apps/payload-cms/artifacts/build.tgz ~/apps/payload-cms/app

tar -xzf ~/apps/payload-cms/app/build.tgz

rm ~/apps/payload-cms/app/build.tgz

~/.nvm/versions/node/v16.13.2/bin/pm2 start ~/apps/payload-cms/ecosystem.config.js
