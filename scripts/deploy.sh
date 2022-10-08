#!/bin/bash

set -ex

rm -rf ~/apps/payload-cms/app

mkdir ~/apps/payload-cms/app

cp ~/apps/payload-cms/artifacts/build.tgz ~/apps/payload-cms/app

tar -xzf ~/apps/payload-cms/app/build.tgz . && echo "DONE"

sleep 10
