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
  2. 'camel case' the hyphen in the property name.
  3. 'single quote' the property value.
  4. 'comma or remove' the semicolon
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
      * Double quote the jsx property. (I think it is better to double quote everything because some js syntax requires double quote anyway)
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
  * create src/ComponentDetail.js and export it(component file is ususally capitalized)
    ```js
    import React from 'react';

    const CommentDetail = props => {
     return (
      <div className="comment">
       <a href="/" className="avatar">
        {/*
         src={faker.image.avatar()} 
         if faker doesn't work use src="https://source.unsplash.com/random"
        */}
        <img alt="avatar" src={props.img} />
       </a>
       <div className="content">
        <a href="/" className="author">
         {props.author}
        </a>
        <div className="metadata">
         <span className="date">
          {props.timeAgo}
         </span>
        </div>
        <div className="text">
         {props.text}
        </div>
       </div>
      </div>
     )
    }

    export default CommentDetail; // you need export statement so that you can import this component somewhere else
    ```
    ```js
    /* index.js */
    import ApprovalCard from './ApprovalCard';
    ```
  * Alternatively you could have defined this component in index.js as well.
  * You can export more than 1 components within a js file.
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
* Passing component using Props. Just nest it.
  ```js
  /* index.js*/
  <ApprovalCard>
   <ComponentDetail />
  </ApprovalCard>
  ```
  ```js
  /* ApprovalCard.js*/
  ...
   {props.children}  /* just like value properties, component properties are passed into 'props' object. specifically 'props.children' */
  ```
# Section 4: Structuring Apps with Class-Based Components
* How React used to be
  ```
  Funtionial Components: produces jsx (no access to LifeCycle and State System)
  Class Components: produces jsx with access to LifeCycle and State System.
  ```
* How React is now
  ```
  Function Components
   - produces jsx
   - use Hooks Systems to run code at specific point of time
   - use Hooks Systems to get access to State System.
  Class Components: produces jsx with access to LifeCycle and State System.
  ```
* Now that React Function Components are similar to Class Components, which one should we learn and use?
  * need to learn both because of legacy codes.
  * many companies have project that uses both.
* Geolocation
  * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    ```
    window.navigator.geolocation.getCurrentPosition()
    ```
* Implementation with Functional Component
  ```js
  /* index.js */
  ...
  
  const App = () => {

   window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), /* successful call back */
    (err) => console.log(err) /* failed call back */
   )

   return (
    <div>
     Latitude:
    </div>
   );
   
   ...
  ```
  * Now you want to put latitude in the jsx that App returns. However, it is tricky to wait for geolocation call before you render the UI.
* Implementation with Class Component
  * Must be javascript class
  * Must Extend React.Component
  * Must define a 'render' method that returns some JSX.
  ```js
  /* index.js */
  ...
  
  class App extends React.Component {
   render () {
    return (
      <div>
      Latitude:
     </div>
    );
   }
  }
  
  ...
  ```
# Section 5: State in React Components
* How React State system work?
  ```
  1. Only usable with React Class Component (or React Functional Component with Hook)
  2. State is a js object
  3. updtaing state triggers Class Component to rerender itself.
  4. State must be initialized when Class Component is created
  5. State must be updated with 'setState'
  ```
* State initialization
  * initialize in React class component constructor
  * don't forget to call 'super(prop)'
* State & setState
  * always use this.setState({key: value})
  * never do 'this.state = value' when updating the state
    * only exception to 'this.state = value' is when initializing the state
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';

  class App extends React.Component {

    // constructor is automatically called with props
    constructor(prop) {
      console.log("const")
      super(prop);
      this.state = {
        latitude : null,
        errorMsg : null
      };

      window.navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({
              latitude: position.coords.latitude
            })
        },
        err => {
          this.setState({
            errorMsg: err.message
          })
        }
      )
    }

    render () {
      console.log("render")

      const errorBar = this.state.errorMsg ? "Error: " + this.state.errorMsg : null;

      return (
        <div>
          Latitude: {this.state.latitude}
          <br />
          {errorBar}
        </div>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
  ```
# Section 6: Understanding Lifecycle Methods
* What is LifeCycle Methods?
  * This is a method that calls at certain point of time with respect to life cycle of a component
  ```
  "constructed -> redered -> mounted -> updated -> unmounted"
  ```
  ```
                           <use case>
  constructor()           'good for onetime setup'
  ↓
  reder()                 'return jsx. don't do anything else'
  ↓
  componentDidMount()     'good for data loading'
  ↓
  componentDidUpdate()    'good for additional data loading upon state/props change'
  ↓
  componentWillUnmount()  'good for clean up; especially non-react stuff'
  
  * There are other lifecycle methods as well, but they are rarely used for specific cases. Ignore them for now.
  ```
* Use ComponentDidMount for data loading
  ```js
    componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
          this.setState({
            latitude: position.coords.latitude
          })
      },
      err => {
        this.setState({
          errorMsg: err.message
        })
      }
    )
  }
  ```
* There are two ways of initializing state
  * Inside the constructor
    ```js
    class App extends React.Component {
      // constructor
      constructor(prop) {
        super(prop);
        // state init
        this.state = {
          latitude : null,
          errorMsg : null
        };
      }
    }
    ```
  * Outside the constructor
    ```js
    class App extends React.Component {
      // constructor
      constructor(prop) {
        super(prop);
      }

      // state initalization
      state = {
        latitude : null,
        errorMsg : null
      };
    }
    ```
    * In this case constructor is not needed if there is no special logic in it because babel takes care of it.
* Do I need a constructor?
  * If you try in babel, you will notice that 'state initalization outside of a constructor lets babel to create a constructor for you like this
    ```js
    /* babel try out with state-init outside the constructor */
    
    class App extends React.Component {
      constructor(...args) {
        super(...args);

        _defineProperty(this, "state", {
          latitude: null,
          errorMsg: null
        });
      }

    }
    ```
* What is default props?
  * you can define a 'defaultProps' at component level. This is used when props is not passed from parent component.
  ```js
  import React from 'react';

  const Spinner = (props) => {
      return (
        <div className="ui active dimmer">
          <div className="ui big text loader">{props.message}</div>
        </div>
      ) 
  }

  // default props
  Spinner.defaultProps = {
    message: "Default Props: Loading..."
  };

  export default Spinner;
  ```
* index.js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import SeasonDisplay from './SeasonDisplay';
  import Spinner from './Spinner';

  import "semantic-ui-css/semantic.min.css";

  class App extends React.Component {
    // state initalization
    state = {
      latitude : null,
      errorMsg : null
    };

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({
              latitude: position.coords.latitude
            })
        },
        err => {
          this.setState({
            errorMsg: err.message
          })
        }
      )
    }

    /*
    inside the React Class, defining a function is a little different
    you don't define like a vanila javascript. you follow React rules. 

    methodName(param1, param2) {
      ///
    }
    */
    renderContent() {
      if (this.state.latitude) {
        return <SeasonDisplay latitude = {this.state.latitude} />

      } else if (this.state.errorMsg) {
        return <div>Error: {this.state.errorMsg}</div>

      } else {
        return <Spinner message="Please Accept the location request" />

      }
    }

    render() {
      console.log("render");

      return (
        <div className="index">
          {this.renderContent()}
        </div>
      )

    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
  ```
* ScreenDisplay.js
  ```js
  import './SeasonDisplay.css';
  import React from 'react';


  const seasonConfig = {
   summer : {
    seasonMsg: "Let's hit the beach",
    iconName: "sun"
   },
   winter : {
    seasonMsg: "Let's build a snowman",
    iconName: "snowflake"
   },
  }

  const getSeason = (lat, month) => {
   //  Northern hemisphere == positive latitude
   const isNorthernHemisPhere = 0 < lat;

   if (2 < month && month < 9) {
    // Mar ~ Aug: Northern hemisphere is summer
    return isNorthernHemisPhere ? 'summer' : 'winter';
   } else {
    // Sep ~ Feb: Norther hemisphere is winter
    return isNorthernHemisPhere ? 'winter' : 'summer';
   }
  }

  const SeasonDisplay = (props) => {
   const season = getSeason(props.latitude, new Date().getMonth());
   console.log(props.latitude);
   console.log(season);

   const {seasonMsg, iconName} = seasonConfig[season];               /* js: how to assign many variable from object */

   return (
    <div className={`season-display ${season}`}>              {/* good practice: highest container's className and component's name match */}
     <i className={`massive ${iconName} icon icon-left`} />  {/* backtick and dollar allows you to inject string variable inside the string */}
     <h1>{seasonMsg}</h1>
     <i className={`massive ${iconName} icon icon-right`} />
    </div>
   );
  }

  export default SeasonDisplay;
  ```
# Section 7: Handling User Input with Forms and Events
* initial components are not necessarily have to be defined in index.js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';

  import App from './components/App';

  ReactDOM.render(
    <App />,
    Document.querySelector('#root')
  );
  ```
  * what's essential in index.js is 'ReactDOM.render()'
  * index.js is for 'initial rendering'
* Functional Component vs Class Component (Syntax)
  * Functional Component: Define a javascript function that returns jsx.
  ```js
  import React from 'react';

  const App = () => {
    return (
      <div>App</div>
    )
  }

  export default SearchBar;
  ```
* Class Component: Define a javascript class that
  * 1) extends React.Component
  * 2) implements render() that returns jsx.
  * 3) initalizes State. (state init is optional)
  ```js
  class App extends React.Component {
    // state initalization
    state = {
      key1 : val1,
      key2 : val2
    };

    componentDidMount() {
     //
    }
    
    render() {
     // 
    }
  }
  ```
* How to use Event callback method
  * don't put () on event callback method. you are just passing the reference. If you put (). Then you are passing the method return of onInputChange method.
  ```js
  class A extends React.Component {
    onInputChange(event) {
     //
    }

    render() {
      ...
      <input type="text" onChange={this.onInputChange}/>
      ...
    }
  }
  ```
  * Alternatively you can use arrow function for onEvent method
  ```js
  ...
  <input type="text" onChange={(e)=>{console.log(e);}/>
  ...
  ```
* Controlled vs Uncontrolled?
  * Controlled Element: Store data in the react (preferable because you want to manage data with React)
    ```js
    <input value={this.state.term} onChange{ (event) => {this.setState{term: event.target.value}} } />
    ```
  * Uncontrolled Element: Store data in the DOM
    ```js
    <input value="my value" />
    ```
  
* what is 'this' in javascript?
  * 'this' references the 'leftside of period'
    ```js
    class Car {
      setDriveSound(sound) {
        this.sound = sound;
      }

      drive() {
       return this.sound;
      }
    }

    const car = new Car();
    car.setDriveSound("vroom");

    // this returns "vroom" becase what is leftside of .drive()?  It is car.
    car.drive();    

    // javascript class is simply a javascript object in certain form
    // You don't have to go through new keyword.
    const truck = {
      sound : "put!put!"
      driveMyTruck: car.drive // driveMyTruck is simply a reference to drive method. (context of car is gone)

    // this returns "put!put!"
    // truck.driveMyTruck() = truck.'reference to drive method in car' = truck.drive()
    // truck is borrowing car.drive method. 
    truck.driveMyTruck()
    ```
  * Problem with this.state
    * When you submit a form, the onFormSubmit is called as onFormSubmit(). Then the context of 'this' is lost at this point.
    ```js
    class SearchBar extends React.Component  {
      onFormSubmit(event) {
        event.preventDefault(); 
        console.log(this.state.term);
      }
      
      render() {
       ...
        <form className="ui form" onSubmit={this.onFormSubmit}>
       ...
      }
    }
    ```
* solution with 'this'
  * bind the method in constructor
    ```js
    class Car {
      constructor() {
        /*
        How bind method works.
        f.bind(B)
        returns B.f where B is binded to f.
        */
        this.drive = this.drive.bind(this);
      }
    
      setDriveSound(sound) {
        this.sound = sound;
      }

      drive() {
       return this.sound;
      }
    ```
  * use arrow function (feature of arrow function doesn't have `this` by nature and finds `this` from where it is defined)
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    * why define arrow function in constructor? Arrow function doesn't have `this` by nature. You can put arrow function in constructor to give this scope.
    * In short: since arrow function doesn't have `this` it takes `this` as where it is defined. When you created inside of constructor, it is referencing to class.
    ```js
    class Car {
      constructor() {
        this.drive = () => {
          return this.sound;
        }
      }
      setDriveSound(sound) {
        this.sound = sound;
      }
    }
    ```
  * in context of our React project (two ways)
    ```js
    class SearchBar extends React.Component  {
      onFormSubmit = (event) => {
        console.log(this.state.term);
      }
      
      render() {
       ...
        <form className="ui form" onSubmit={() => {this.onFormSubmit}}>
       ...
      }
    }
    ```
    ```js
    class SearchBar extends React.Component  {
      onFormSubmit(event) {
        event.preventDefault(); 
        console.log(this.state.term);
      }
      
      render() {
       ...
        <form className="ui form" onSubmit={() => {this.onFormSubmit()}}>
       ...
      }
    }
    ```
* Invoking callbacks from child to parent
  ```js
  class App extends React.Component {

    onSearchBarSubmit(term) {
      console.log(term);
    }


    render() {
      return (
        <div className="ui container" style={{ marginTop: '20px'}}>
          <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        </div>
      )
    }
  }
  ```
  ```js
  class SearchBar extends React.Component  {
    ...
    onFormSubmit = (event) => {
      event.preventDefault(); 
      this.props.onSearchBarSubmit(this.state.term);
    }
  }
  ```
* So current flow is
  * Change Input
  * 'OnChange()' does setState
  * state update triggers render()
  * input is created with a value from a state `value={this.state.term}` (and of course input is newly created thus doesn't call onChange, creating infinite loops)
  
# Section 8: Making API Requests with React
* you can create APIs in `unsplash.com` for development purposes.
* Two common ways of using APIs in React is by axios(3rd package) or fetch(built into modern browser).
  * fetch is very low-level. axios is preferred.
  ```
  npm install --save axios
  ```
* making api request without `async` keyword
  ```js
  onSearchBarSubmit(term) {
    const response = axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: term},
        headers: {
          Authorization: 'Client-ID 29438u02398u4032'
        }
      }
    ).then((response) => {
      console.log(response.data.results);
      ...
    })
  }
  ```
* method with `async` and `await` keyword 
  ```js
    async onSearchBarSubmit(term) {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: term},
        headers: {
          Authorization: 'Client-ID 29438u02398u4032'
        }
      }
    );
    console.log(response.data.results);
  }
  ```
* problem with naive approach to call back.
  * The code below throws an error because the caller of `this` in `setState` is `props` from `this.props.onSearchBarSubmit(this.state.term);` 
  ```js
  onFormSubmit = (event) => {
    event.preventDefault(); 
    this.props.onSearchBarSubmit(this.state.term);
  }
  ```
  ```js
  async onSearchBarSubmit(term) {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: term},
        headers: {
          Authorization: 'Client-ID Lj6c2xq0LVwuufH0l0yLy8o63Kop_IUBSY9mQf7boXY'
        }
      }
    );

    this.setState({
      images: response.data.results
    });
  }
  ...
  <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
  ```
* solution: binding!
  * since arrow function doesn't have `this`. It finds `this` from where the arrow function is defined.
  * note how you put async on arrow function.
  ```js
  async onSearchBarSubmit = async (term) => {
    ...
    this.setState({
      images: response.data.results
    });
  }
  ```

# Section 9: Building Lists of Records
* `key` in react.
  * Consider a list of 30 divs and showing 3divs in UI. now you have to include 1div to UI, showing 4divs. React has to have a identifier for each div to properly and efficiently manage divs. `key` acts as an identifier for each DOM element (<div> in this case)
  ```js
  import React from 'react';

  const ImageList = (props) => {

    const images = props.images.map( (i) => {
      return <img key={i.id} src={i.urls.regular} alt={`alt ${i.id}`}/>
    });

    return (
    <div>
      <div>Image List</div>
      {images}
    </div>);
  };

  export default ImageList;
  ```
* destructure in js: you can destructure any js object with property names. (note how `i` is destructured)
  ```js
  const images = props.images.map( (i) => {
    return <img key={i.id} src={i.urls.regular} alt={`alt ${i.desciption}`}/>
  });
  ```
  ```js
  const images = props.images.map( ({id, urls, desciption}) => {
    return <img key={id} src={urls.regular} alt={`alt ${desciption}`}/>
  });
  ```
  
# Section 10: Using Ref's for DOM Access
* Importing css file
  * look at import statement `import './ImageList.css';`. unlike importing a component, you are importing a file.
  * look at how you name the className of highest container (However, naming is just recommendation)
  ```js
  // src/components/ImageList.js
  import React from 'react';
  import './ImageList.css';

  const ImageList = (props) => {
    ...
    return (
    <div>
      <div className="image-list">Image List</div>
      {images}
    </div>);
  };
  ```
  ```css
  // src/components/ImageList.css
  .image-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  ...
  ```
* The challenge now is to organize pictures with proper size. Your plan is to crunch some large photos so it behaves like flickr.
  ```
  .image-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: 150px;
  }

  .image-list img {
    width: 250px;
    grid-row-end: span 3;
  }
  ```
  * `display: grid` divides the screen into grids(cells).
  * `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));` places child `<div>s` into a repeated manner where each column's min-width is 250px and max-width is 1ft. height is adjusted proportionally to the width.
  * `grid-auto-rows: 150px;` defines the height of each row
  * `grid-row-end` defines how many rows each item can span to when it exceeds the size of each container.

* Props System works similar way to Class Component as it was to Functional Component. You don't have to do explicitly pass it on to function paramater as you did in Functional Component.
  ```js
  const images = props.images.map( ({id, urls, desciption}) => {
    return <ImageCard key={id} src={urls.regular} alt={desciption}/>
  });
  ```
  ```js
  import React from 'react';

  class ImageCard extends React.Component {

    render() {
      return (
        <div>
          <img
            key={this.props.image.id}
            alt={this.props.image.description}
            src={this.props.image.urls.regular}
          />
        </div>
      )
    }
  }

  export default ImageCard;
  ```
* Let's define `grid-row-end` dynamically with React
  * How do I get access to DOM elements from React?
    * You can do `document.querySelector(...)`
    * but better approach is using React Ref
      ```js
      import React from 'react';

      class ImageCard extends React.Component {

        constructor(props) {
          super(props);
          this.imageRef = React.createRef();
        }

        render() {
          const { description, urls} = this.props.image;

          return (
            <div>
              <img
                ref={this.ImageCard}
                alt={description}
                src={urls.regular}
              />
            </div>
          );
        }
      }

      export default ImageCard;
      ```
      
