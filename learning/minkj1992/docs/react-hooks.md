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


```js
const onChange = (event) => {
  const {
    target: { value },
  } = event;

...


```
위의 코드에서 가장 이해가 되지 않았던 부분으로, 아무리 찾아도 이해를 할 수 없었지만, 이해가 되어 정리를 하게 되었습니다. 해당 코드는 키워드로 정리되어있는 tag에서 onChange를 사용함으로써 Event()타입을 사용하게 됩니다. 

해당 코드는 그런 event에서 사용되는 target을 키값으로 value를 value변수로 destructuring해주는 구조입니다.

이런 방식이 가능한 이유는 target이 object reference이기 때문이며, react는 DOM이벤트를 `SyntheticEvent`로 추상화 시켜주어 변화를 감지하기 위해 polling을 돌리기 때문입니다. 

**즉 정리하자면 다음코드에서 value는 변경될때마다, event를 트리거 시켜주고, 트리거된 event.target.value값은 전달되어 value로 destructuring해주어 value의 값을 사용할 수 있게됩니다.**


https://stackoverflow.com/questions/64380809/can-i-destructure-an-event-handler-object-react






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

## useState

## useEffect

- `componentDidMount`
  - deps 유무 상관 없이 작동
- `componentWillUpdate` (props 또는 state가 변경되었을 때, 재랜더링을 여부를 return 값으로 결정한다.)
  - 1. `useEffect(sayHello);`
    - deps 가 존재하지 않는다면, run the effect every time.
  - 2. `useEffect(sayHello, []);`
    - deps에 empty list이면, 초기화 때만 동작 (componentDidMount때 단 1번만 동작)
    - **eventListener를 추가하는 예시를 보면, 일반적으로 event는 초기화 시점에 해주고 이후에는 안해주는 것이 일반적**
  - 3. `useEffect(sayHello, [num1, num2]);`
    - `num1`, `num2`가 변경될 때만 동작
- `componentWillUnmount`

## useRef
> document.getElementByID()와 유사

- react에 있는 모든 componentsms ref element를 가지고 있다. (`reference prop`)

## Hooks

- useClick()

```js
import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    // 1. 변수를 안에서 copy하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
    const element = ref.current;
    if (element) {
      // 'click' is keyword
      element.addEventListener('click', onClick);
    }
    // ComponentWillUnmount()
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return ref.current;
};

const App = () => {
  const sayHello = () => console.log('Hi minwook');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>useClick😄</h1>
    </div>
  );
};

export default App;
```

> 1. 에 대한 로그 
>> The ref value 'element.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'element.current' to a variable inside the effect, and use that variable in the cleanup function

- useConfirm()

```js
import React from 'react';

const useConfirm = (msg = '', onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== 'function') {
    return;
  }

  // not mandatory
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log('Deleteing the World...');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are u sure?', deleteWorld, abort);
  return (
    <div className="App">
      <h1>useConfirm😄</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
```

- usePreventLeave()
```js
import React from 'react';

const usePreventLeave = (msg = '') => {
  const listener = (e) => {
    console.log(msg);
    // 표준에 따라 기본 동작 방지
    e.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    e.returnValue = '';
  };

  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const msg = '정말 떠나시고 싶으세요? 😇'; // Chrome removed support for custom message in ver 51
  const { enablePrevent, disablePrevent } = usePreventLeave(msg);

  return (
    <div className="App">
      <h1>usePreventLeave😄</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
};

export default App;

```

- useBeforeLeave()
```js
import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const handle = ({ clientY }) => {
      if (clientY <= 0) {
        console.log(clientY);
        onBefore();
      }
    };

    if (typeof onBefore === 'function') {
      document.addEventListener('mouseleave', handle);
    }

    return () => document.removeEventListener('mouseleave', handle);
  }, [onBefore]);
};

const App = () => {
  const begForLife = () => alert("Don't Leave😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇!");

  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>useBeforeLeave😄</h1>
    </div>
  );
};

export default App;

```

- useFadeIn()
```js
import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;

      if (typeof duration !== 'number' || typeof delay !== 'number') {
        duration = 1;
        delay = 0;
      }
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);

  return (
    <div className="App">
      <h1 {...fadeInH1}>useFadeIn😄</h1>
    </div>
  );
};

export default App;
```
- useNetwork()