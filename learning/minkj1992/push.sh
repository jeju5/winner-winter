#!/bin/sh
CURRENT_CATEGORY='[NodeJs Http]'

# If a command fails then the deploy stops
set -e


printf "\033[0;32mPush to forked repo and origin repo to GitHub...\033[0m\n"

# go to repo dir
cd ../..
echo "Change dir to root-repo dir"
printf "\033[0;32mCurrent Dir: $(pwd) \033[0m\n"

# fetch Upstream 
git pull upstream main

# Add changes to git.

git add .

# Commit changes.
msg="Update: study $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$CURRENT_CATEGORY $msg"


# push to forked my repo
git push origin main
# push to origin repo
git push upstream main