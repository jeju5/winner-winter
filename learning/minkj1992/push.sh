#!/bin/sh

# If a command fails then the deploy stops
set -e


printf "\033[0;32mPush to forked repo and origin repo to GitHub...\033[0m\n"

# go to repo dir
cd ../..
echo "Change dir to root-repo dir"
printf "\033[0;32mCurrent Dir: $(pwd) \033[0m\n"


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


# BASEDIR='./learning/minkj1992'
# # back to proj dir
# cd $BASEDIR