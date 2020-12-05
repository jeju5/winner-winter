https://www.udemy.com/course/react-redux/

# Section 1: Let's Dive In!
* What is App Function?
  * App function is a react component that returns jsx.
  * JSX is javascript xml. It directs reacts to show dom elements or react components. react components are in /component directory.
    ```js
    /* app.js */
    export default function App() {
      const [language, setLanguage] = useState("ru");
      const [text, setText] = useState("");

      return (
        <div>                                                               /* <-- DOM Element */
          <Field label="Enter English" onChange={setText} value={text} />   /* <-- React Component */
          <Languages language={language} onLanguageChange={setLanguage} />
          <hr />
          <Translate text={text} language={language} />
        </div>
      );
    }
    ```
  * What is State in React? (useState)
    * State is a data system that react keeps track of.
* How does it render on the browser?
  * Browser first loads public/index.html

  * Browser then makes another requests to bundle.js.
  * bundle.js bundles index.js, app.js and react.js, which gets loaded on the browser.
  * among three index.js is loaded first.
    ```js
    /* index.js */
    
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";

    ReactDOM.render(<App />, document.getElementById("root"));
    /* Call 'App' Component from app.js and render it into 'root' DOM element */
    ```
  * What is React & ReactDOM?
    * React libraray is 'reconciler' that takes care of how component works.
    * ReactDOM library is 'renderer' that renders into HTML DOM elements.
    ```
    import React from "react";
    import ReactDOM from "react-dom";
    ```
* Creating a React Project
  * Install node.js and Start a react project 'myapp'
    ```
    https://nodejs.org/en/download/
    node -v
    
    npm install -g create-react-app
    create-react-app {project-name}
    ```
  * what is babel?
    * this resolves conflicts that can come from different java script version.
    * create-react-app by default includes babel.
  * how does 'create-react-app' looks like
    ```
    {project}
        /nodemodules      <-- project dependencies file
        /public           <-- stores static file (html, images and music files)
        /src              <-- source codes
        package.json      <-- project package dependencies
        package-lock.json <-- project package dependencies (tree of full & exact version)
    ```
* Starting a React Project
  ```
  npm start    <-- this launches react application (npm = node package manager for node.js apps)
  ```
* Import in index.js
  ```js
  // Import Syntax of ES2015
  import React from 'react'          /* import what's inside of nodemodules/react */
  import ReactDOM from 'react-dom';  /* import what's inside of nodemodules/react-dom */

  // Import Syntax of CommonJS
  const React = require('react');
  ```
* App function in index.js
  * 'funtion()' is same as '() => '. This is arrow function in ES2015 arrow function.
  ```js
  // Create react components
  const App = () => {
   return <div>Hi There!</div>
  }

  ReactDOM.render(
   <App />,                         /* App component that returns jsx */
   document.querySelector('#root')  /* get a DOM element with id 'root' */
  )
  ```
 
# Section 2: Building Content with JSX
* Babel
  * babel website offers online sandbox: babeljs.io
  * if you put App component in the sandbox babel sandbox shows how it internally changes it into javascript call
    ```
    const App = () => {
     return <div>Hi There!</div>
    }
    ```
  * This is how App component in jsx is translated into javascript
    ```
    const App = () => {
      return React.createElement("div", null, "Hi There!");
    };
    ```
  * In short, we write into 'jsx' for simplicity. This gets rendered into javascript by babel, which eventually creates DOM element.
  * Then why use 'jsx' instead of making 'React.creaateElement(..)' call by my self
    * => It is not mandatory, but it simplifies our code.
* JSX Syntax: Inline Styling
  ```
  <4 RULES>
  1. 'double curly' the double quote.
  2. 'camel case' the hyphen
  3. 'comma or remove' the semicolon
  4. 'single quote' the property
  ```
  * HTML
    ```html
    <div style="background-color: blue; color: white;"></div>
    ```
  * JSX
    ```jsx
    <div style={{backgroundColor: 'blue', color: 'white'}}></div>
    ```
  * single quote or double quote?
    * javascript doesn't differentiate ' and ".
    * By convention in the community
      * Single quote the non-jsx property.
      * Double quote the jsx property.
        ```js
        const App = () => {
         return (
          <div>
           <label id="label" for="name">
            Enter Name:
           </label>
           <input id="name" type="text" />
           <button style={{backgroundColor: 'blue', color: 'white'}}>
            Submit
           </button>
          </div>
         )
        }
        ```
* JSX Syntax: Class naming
  ```
  <1 RULE>
  put 'className' instead of 'class'. (we don't want to confuse javascript. javascript class vs html class?)
  ```
  * HTML
    ```html
    <div class="big-reminder"></div>
    ```
  * JSX
    ```jsx
    <div className="big-reminder"></div>
    ```
  * Likewise JSX wants to avoid confusing keywords. For example 'for' can be placed in <label> element while it also means javascript 'for' loop. In this case   'HtmlFor' is advised.
    * Use dev tools to monitor these errors.
    ```
    <label for="big-reminder"></div>
    <label htmlFor="big-reminder"></div>
    ```
    
* JSX Syntax: JSX can reference the javascript variables with {} (single curly braces)
  ```js
  // Create react components
  const App = () => {
   const buttonText = 'Click me';  /* <== js variable defined */

   return (
    <div>
     <label className="label" for="name">
      Enter Name:
     </label>
     <input id="name" type="text" />
     <button style={{backgroundColor: 'blue', color: 'white'}}>
      {buttonText}  /* <== js variable referenced */
     </button>
    </div>
   )
  }
  ```
  * JSX can refer to 
    * javascript string, integer, integer and array
      ```js
      const someVal = 'Click'
      const someVal = 123123
      const someVal = true
      const someVal = [123,123] /* this gets concatenated to 123123 */

      return (
       <button style={{backgroundColor: 'blue', color: 'white'}}>
        {someVal}
       </button>   
      )
      ```
    * javascript function
      ```js
      const someFunc = () = > { return 'Click'}

      return (
       <button style={{backgroundColor: 'blue', color: 'white'}}>
        {someFunc()}
       </button>   
      )
      ```
  * JSX can not refer to 
    * javascript object itself. (it can refer to a compatiable property in javascript object)
      ```js
      /* errors out */
      const someVal = { text: 'Click Me', number: 3123 }
      
      return (
       <button style={{backgroundColor: 'blue', color: 'white'}}>
        {someVal}
       </button>   
      )
      ```
      ```js
      /* works */
      const someVal = { text: 'Click Me', number: 3123 }
      
      return (
       <button style={{backgroundColor: 'blue', color: 'white'}}>
        {someVal.text}
       </button>   
      )
      ```
# Section 3: Communicating with Props
  * Let's use semantic-ui (get url from https://cdnjs.com/libraries/semantic-ui) and include it in index.html
    ```html
    /* index.html */
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    ```
  * Let's install faker js for easy image import. When you do npm command you have to be in project level. npm install adds the package to your project. (not entire mac). After you do npm install, you will see that package in package.json and package-lock.json.
    ```
    npm install --save faker
    ```
  * When you find a jsx code that is duplicated or complicated, it is a good sign for creating a seperate component.
    * create src/ComponentDetail.js (component file is ususally capitalized)
  * Props: React system for passing property(=data) from Parent Component to Child Component
    ```js
    /* index.js */
    App = () => {
      ...
      <CommentDetail author="SAM" date="Dec.1" />  /* you are passing author, date to ComponentDetail using Props system. */
      <CommentDetail author="PAM" date="Dec.4" />
      ...
    }
    ```
    ```js
    /* ComponentDetail.js */
    const CommentDetail = props => {  /* you have to pass props to use Props system. */
      ...
      {props.author}
      {props.date}
      ...
    }
    ```
