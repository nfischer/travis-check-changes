#!/bin/bash

if [ "$1" ]; then
  msg="$@"
else
  msg="Some files have changed"
fi

git diff --quiet 2>/dev/null || ( code=$?; echo "${msg}" ; exit ${code} )
