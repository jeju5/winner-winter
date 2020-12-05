---
layout: post
title: "README"
categories: [""] # suggestion: books, dev, post, timeline, daily
date: 2020-12-05 14:53:08 +0900
tags: 
draft: false
toc: true
images: [https://source.unsplash.com/collection/1245/1200x628]
---

- graphQL
- nodejs
- react-native

# GraphQL

- 환경 설정

```bash
$ yarn init
yarn init v1.22.10
question name (movieql):
question version (1.0.0):
question description: Movie API with GraphQL
question entry point (index.js):
question repository url: https://github.com/minkj1992/winner-winter.git
question author: minkj1992
question license (MIT):
question private:
success Saved package.json

$ yarn add graphql-yoga
$ yarn global add nodemon # 스크립트 변경시 노드 서버(graphql-yoga) refresh 
$ yarn add babel-node --dev
$ yarn global add babel-cli --ignore-engines
# 실행 전에 .babelrc 생성
$ yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
$ yarn start
```

