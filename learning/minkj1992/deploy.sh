#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Add changes to git.

git add .

# Commit changes.
msg="Update Study $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin main

# Come Back up to the Project Root
cd ..

# blog 저장소 Commit & Push
git add .

msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

git push origin master

git push 
git checkout leoo
git fetch upstream
git merge upstream/leoo
