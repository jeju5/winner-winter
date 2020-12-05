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
  
  console.log(value); // value was used before it was defined

  console.log(e.target.value) // "input값"

  const {
    target: { value },
  } = e;

  console.log(value); // "input값"
};
```

> tl;dr 🤖🧠...
>> `const { target: { value }, } = e;`는 useState로 생성해준 value에 e.target.value를 대입한 값이다. 즉 `value = event.target.value`

- `const {k1, k2 ...} = value`는 객체구조분해로 ES6 문법입니다.
- onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있습니다.
- 참고로 React에서는 onChange의 event를 `React.ChangeEvent<HTMLInputElement>` 타입으로 정의내리고 있습니다.
  - `const { name, value } = e.target;`
- 즉 위의 코드는, event(e)는 target을 key값으로 가지는데, 이를 object 타입으로 생성해준 상황입니다. (오버라이딩). **생성된 함수는 target을 생성해준 value를 가리키도록 지정합니다.**

## react-hooks/rules-of-hooks

- Rules of hooks:
  - Only Call Hooks at the Top Level
  - Only Call Hooks from React Functions

```js
export const useTabs = (initialTab, allTabs) => {
  // fail fast
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  // >>>>>>>>>>>>>  문제 상황
  const [curIdx, setCurIdx] = useState(initialTab);
  // <<<<<<<<<<<<<
  return {
    currentItem: allTabs[curIdx],
    changeItem: setCurIdx,
  };
};
```

- 에러 메시지

```
Failed to compile.

src/hook.js
  Line 8:31:  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?  react-hooks/rules-of-hooks

Search for the keywords to learn more about each error.

```

확인 결과 조건에 따라 `useState(initialTab)`코드가 동작하는 것을 경고한다. 이를 해결하기 위해서는 가장 상위에 useState를 두면 되지만, useState의 초깃값이 `undefined`이기 때문에 아래의 에러가 발생한다.

```
TypeError: Cannot read property 'content' of undefined
App
src/App.js:24
  21 |       {content.map((section, idx) => (
  22 |         <button onClick={() => changeItem(idx)}>{section.tab}</button>
  23 |       ))}
> 24 |       <div>{curItem.content}</div>
  25 |     </div>
  26 |   );
  27 | };
```

- 찾은 원인: hooks.js
```js
export const useTabs = (initialTab, allTabs) => {
  const [curIdx, setCurIdx] = useState(initialTab);
  // fail fast
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[curIdx], -------> here!!!!
    changeItem: setCurIdx,
  };
};
```
return 부분에서 `currentItem`으로 해주면서, 정작 이를 destructuring 해주는 코드 부분에서는 

```js
const { curItem, changeItem } = useTabs(0, content);
```
다음과 같이 해주어서 curItem이 계속 undefined으로 처리되었다...🔥🔥🔥🔥


