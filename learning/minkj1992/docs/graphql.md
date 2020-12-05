---
layout: post
title: "graphql"
categories: [""] # suggestion: books, dev, post, timeline, daily
date: 2020-12-05 14:21:39 +0900
tags: graphql
draft: false
toc: true
images: [https://source.unsplash.com/collection/1245/1200x628]
---


# GraphQl

## core
- 하나의 엔드포인트와 거기로 query를 보내서 데이터를 받아옴 (api가 여러 url을 가지는 부분과 다름)

## fetching
- over-fetching
  - 불필요한 필드 값 없이, 원하는 데이터만 가져온다.
  - 리소스 낭비 방지
  - ex: User에서 원하는 name만 가져옴
- under-fetching
  - 한번의 네트워크 요청으로 여러 endpoint들에 요청을 보낸다.
  - GraphQL를 이용하면 이러한 많은 정보를 한번의 요청으로 해결 할 수 있다.
  - 내부적으로 dfs/bfs와 같은 완탐을 사용해 recursive하게 추가로 요청을 보내는 방식 일듯하다.
  - ex: 구매 서비스에 필요한, 유저데이터, 상품 데이터를 한번에 가져옴

## Query & Mutation

- 느낌
  - Query는 fetch(GET)
  - Mutation은 상태 변경 (PUT/PATCH)