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
