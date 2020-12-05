---
layout: post
title: 'react-hooks'
categories: ['dev'] # suggestion: books, dev, post, timeline, daily
date: 2020-12-06 00:06:48 +0900
tags: 'react'
draft: false
toc: true
images: [https://source.unsplash.com/collection/1245/1200x628]
---

# react-hooks

## destructuring

[const {name,value}= event.target](https://stackoverflow.com/questions/55188257/const-name-value-event-target-what-does-this-mean)

```js
const [value, setValue] = useState(initialValue);

const onChange = (e) => {
  const {
    target: { value },
  } = e;
};
```

- `const {k1, k2 ...} = value`는 객체구조분해로 ES6 문법입니다.
- onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있습니다.
- 참고로 React에서는 onChange의 event를 `React.ChangeEvent<HTMLInputElement>` 타입으로 정의내리고 있습니다.
  - `const { name, value } = e.target;`
- 즉 위의 코드는, event(e)는 target을 key값으로 가지는데, 이를 object 타입으로 생성해준 상황입니다. (오버라이딩). **생성된 함수는 target을 생성해준 value를 가리키도록 지정합니다.**
