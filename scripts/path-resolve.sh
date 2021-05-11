#!/bin/bash

PATH_PROJECT="$PWD"
PATH_FILES="/usr/src/app/dist"

find "$PATH_PROJECT"/dist -name "*.js" -type f \
    -exec sed -i -e 's|@configs|'$PATH_FILES'/configs|g' {} \; \
    -exec sed -i -e 's|@modules|'$PATH_FILES'/modules|g' {} \; \
    -exec sed -i -e 's|@shared|'$PATH_FILES'/shared|g' {} \;

echo 'ok'

exit 0