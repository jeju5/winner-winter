#!/bin/sh

# If a command fails then the deploy stops
set -e

BASEDIR='./learning/minkj1992'
printf "\033[0;32mPush to forked repo and origin repo to GitHub...\033[0m\n"

cd ../..
pwd

# Add changes to git.

git add .

# Commit changes.
msg="Update: study $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# push to forked my repo
git push origin main


# push to origin repo
git fetch upstream
git push upstream main


# # back to proj dir
# cd $BASEDIR