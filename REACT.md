### React Knowledge Base

- After the war to acquire CSS and JS skills. Kimono's journey will continue on to get a job. Now it's time to become a master at React.

## Angela Course

-

# What is React?

- A JavaScript library for building user interfaces.
- Works component based (composition of your app your app has x).

# Component Tree

- App
  - Nav Bar
  - ToDoList
  - ListItem
  - Checkbox
  - ItemText

# Google Keep Clone in React

-

# React Concepts

- JSX
- Props
- Styling
- Components
- Babel
- Virtual DOM
- Container
- State
- Declarative Programming
- Hooks
- useState
- ES6
- Destructuring
- Map & Filter
- Import Export

# Babel

- Is a JS compiler which compiles to older versions.

# .render() method

import React from "react";
import ReactDOM from "react-dom";

// what to show, where to show it.
// multiple html tags = wrap el inside <div> el
ReactDOM.render(

  <div>
    <h1>Hello Karina!</h1>
    <p>Black Mamba</p>
  </div>,
  document.getElementById("root")
);

# JSX Code Practice

import React from "react";
import ReactDOM from "react-dom";

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.render(

  <div>
    <h1>aespa</h1>
    <ul>
      <li>Karina</li>
      <li>Winter</li>
      <li>Giselle</li>
      <li>Ningning</li>
    </ul>
  </div>,
  document.getElementById("root")
);

# Template Literals (String Interpolation)

import React from "react";
import ReactDOM from "react-dom";

const fName = "지민";
const lName = "유";
const num = 22;

// {variable} = to render variables in the render method
ReactDOM.render(

  <div>
    <h1>Hello {`${lName}${fName}`}</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);

# JavaScript Date Object - Get Year

import React from "react";
import ReactDOM from "react-dom";

const name = "Karina";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(

  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

# JSX Attributes & Styling React Elements

in html file: <script src="../src/index.js" type="text/JSX"></script>
import React from "react";
import ReactDOM from "react-dom";

/_ className = html class _/
/_ contentEditaable = You can type in the element _/
/_ spellCheck = disables spellcheck in contenteditable _/
/_ CSS is the same just JSX attributes in html needed _/
ReactDOM.render(

  <div>
    <h1 className="heading">aespa</h1>
    <div>
      <img
        class="aespa-members__image"
        src="https://www.pinkvilla.com/imageresize/aespa_karina_style_.jpg?width=752&format=webp&t=pvorg"
      />
      <img
        class="aespa-members__image"
        src="https://pbs.twimg.com/media/E1MbGmiUYAQjFSI?format=jpg&name=4096x4096"
      />
      <img
        class="aespa-members__image"
        src="https://data.whicdn.com/images/360276286/original.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

const img =
"https://keepinguptodate.com/pages/2020/05/03-bem-element-examples.svg";

ReactDOM.render(

  <div>
    <h1 className="heading">BEM NOTATION</h1>
    <img src={img} alt="1" />
    <img src={img} alt="2" />
    <img src={img} alt="3" />
    <img src={img} alt="4" />
  </div>,
  document.getElementById("root")
);

# Inline Styling for React Elements

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
color: "red",
fontSize: "20px",
border: "1px solid black"
};

customStyle.color = "blue";

/_ Inline styles in JSX _/
ReactDOM.render(

  <h1 style={customStyle}>Hello Karina!</h1>,
  document.getElementById("root")
);

# React Styling Practice

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
color: ""
};

if (currentTime < 12) {
greeting = "Good Morning";
customStyle.color = "red";
} else if (currentTime < 18) {
greeting = "Good Afternoon";
customStyle.color = "green";
} else {
greeting = "Good Night";
customStyle.color = "blue";
}

ReactDOM.render(

  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

# React Components

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; /_ The main thing _/

/_ app.jsx holds <x> components in children real component func _/
ReactDOM.render(<App />, document.getElementById("root"));

- app.jsx
  import React from "react";
  import Heading from "./Heading"; /_ import TagName _/
  import List from "./List";

function App() {
return (

<div>
<Heading />
<List />
<List />
</div>
);
}

export default App;

- heading.jsx
  import React from "react";

function Heading() {
return <h1>My Favourite Foods</h1>;
}

export default Heading;

- list.jsx
  import React from "react";

function List() {
return (

<ul>
<li>Bacon</li>
<li>Jamon</li>
<li>Noodles</li>
</ul>
);
}

export default List;

# React Components Practice

- All your logic and return should be inside a function of a component.

# JavaScript ES6 - Import, Export and Modules

import { add, multiply, subtract, divide } from "./calculator.js";
/_ Export a collection of functions _/
export { add, multiply, subtract, divide };

# Windows Local Environment Setup for React Development

-

# Create a React Project

npx create-react-app x-app
cd x-app
npm start

# Clean Starting Template

-index.html

<!DOCTYPE html>
<html lang="en">
<head>
<title>React App</title>
</head>
<body>
<script src="./src/index.js" type="text/jsx"></script>
<div id="root"></div>
</body>
</html>

-index.js
import React from "react";
import ReactDOM from "react-dom";

    ReactDOM.render(<h1>Hello, Karina!</h1>, document.getElementById("root"));

- the rest of the files you can delete.

# Keeper App Part 1 Solution

- App.jsx is always a div with the other components nested inside to it.
- Components can be either .js or .jsx
- In the component you should give CSS classes or ids.

# React Props

- Props: Is an object which contains the HTML attributes in the function.
- Makes the component reusable thus different data with same template.

import React from "react";
import ReactDOM from "react-dom";

function Card(props) {

return (

<div className="my-style">
<h2>{props.name}</h2>
<img src={props.img} alt="avatar_img" width="200" height="200" />
<p>{props.tel}</p>
<p>{props.email}</p>
</div>
);
}

ReactDOM.render(

  <div>
    <h1>My Contacts</h1>
    <Card
      name="유지민"
      img="https://pbs.twimg.com/media/FF0qoHbXsAktLDB.jpg"
      tel="123 456 789"
      email="karina@naver.kr"
    />
    <Card
      name="지젤"
      img="https://pbs.twimg.com/media/FHmc_hiVUAAKIqu.jpg"
      tel="987 654 321"
      email="giselle@naver.kr"
    />
    <input id="fName" />
  </div>,
  document.getElementById("root")
);

# React Props Practice

import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
return (

<div>
<h1 className="heading">My Contacts</h1>
<Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>

);
}

export default App;

const contacts = [
{
name: "유지민",
imgURL: "https://pbs.twimg.com/media/FF0qoHbXsAktLDB.jpg",
phone: "+123 456 789",
email: "karina@naver.kr"
},
{
name: "Jack Bauer",
imgURL:
"https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
phone: "+987 654 321",
email: "jack@nowhere.com"
},
{
name: "Chuck Norris",
imgURL:
"https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
phone: "+918 372 574",
email: "gmail@chucknorris.com"
}
];

export default contacts;

# React DevTools

- App.jsx is the place where you configure props with custom components.
- A card has a avatar, so the avatar is nested in the card component but still has the same data passed from App.jsx.
- Props komen overeen met de naam van het HTML attribuut, dus die moet je ook in laten lezen door React.
- A card can have an avatar and details.
- The avatar component can be used just once right where you need it in the App.jsxs

import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
return (

<div className="card">
<div className="top">
<h2 className="name">{props.name}</h2>
<Avatar img={props.img} />
</div>
<div className="bottom">
<Detail detailInfo={props.tel} />
<Detail detailInfo={props.email} />
</div>
</div>
);
}

export default Card;

# Mapping Data to Components

import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
return (
--> 2. render loop through all the props
<Card
key={contact.id} /_ Primary key mandatory, a special property _/
id={contact.id}
name={contact.name}
img={contact.imgURL}
tel={contact.phone}
email={contact.email}
/>
);
}

function App() {
return (

<div>
<h1 className="heading">My Contacts</h1>
{contacts.map(createCard)} --> 1. contacts array loop put data in card component.
</div>
);
}

export default App;

# Mapping Data to Components Practice

import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function createEntry(emojiTerm) {
return (
<Entry
      key={emojiTerm.id}
      id={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
);
}

function App() {
return (

<div>
<h1>
<span>emojipedia</span>
</h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>

);
}

export default App;

---

import React from "react";

function Entry(props) {
return (

<div className="term">
<dt>
<p>{props.id}</p>
<span className="emoji" role="img" aria-label="Tense Biceps">
{props.emoji}
</span>
<span>{props.name}</span>
</dt>
<dd>{props.description}</dd>
</div>
);
}

export default Entry;

# JavaScript ES6 Map/Filter/Reduce

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
// return x \* 2;
// }

// // Let each item in the array execute this function (new array)
// const newNumbers = numbers.map(double);

// For each method - map

// let newNumbers = [];
// numbers.forEach(function (x) {
// newNumbers.push(x \* 2);
// });

// const newNumbers = numbers.map(function (x) {
// return x \* 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter((num) => {
// return num < 10;
// });

// let newNumbers = [];
// numbers.forEach(function (num) {
// if (num < 10) {
// newNumbers.push(num);
// }
// });

//Reduce - Accumulate a value by doing something to each item in an array.

// let newNumber = numbers.reduce(function (accumulator, currentNumber) {
// console.log("accumulator = " + accumulator);
// console.log("currentNumber = " + currentNumber);
// return accumulator + currentNumber;
// });

// let newNumber = 0;
// numbers.forEach(function (currentNumber) {
// newNumber += currentNumber;
// });

//Find - find the first item that matches from an array.
// let numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find(function (num) {
// return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// let numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.findIndex(function (num) {
// return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);

# Keeper App Project - Part 2

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(props) {
return (

<div>
<Header />
{notes.map((noteItem) => <Note
              key={noteItem.key}
              title={noteItem.title}
              content={noteItem.content}
            />
)}
<Footer />
</div>
);
}

export default App;

# React Conditional Rendering with the Ternary Operator & AND Operator

-

# Conditional Rendering Practice

import React from "react";

function Form(props) {
return (

<form className="form">
<input type="text" placeholder="Username" />
<input type="password" placeholder="Password" />
{props.isRegistered === false ? (
<input type="password" placeholder="Confirm Password" />
) : null}
<button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
</form>
);
}

export default Form;

# State in React - Declarative vs. Imperative Programming

- UI = f(State)
  - f(-10) = Ice
  - f(60) = Water

# React Hooks - useState

- Hook (use state)
  - count [count, setCount] = useState(0);
  - Initial counter and a setter
  - Renders the DOM again via React when a function is called on it.
  - Params: array with number function.

import React, { useState } from "react";

function App() {
/_ React use state hook -> number and setter _/
const [count, setCount] = useState(0); /_ param initial state _/

function increase() {
setCount(count + 1);
}

function decrease() {
setCount(count - 1);
}

return (

<div className="container">
<h1>{count}</h1>
<button onClick={decrease}>-</button>
<button onClick={increase}>+</button>
</div>
);
}

export default App;

# useState Hook Practice

import React, { useState } from "react";

function App() {
setInterval(
updateTime,
1000
); /_ Roep de functie 1 sec aan daarom lopende klok _/

const now = new Date().toLocaleTimeString();

const [time, setTime] = useState(now);

function updateTime() {
const newTime = new Date().toLocaleTimeString();
setTime(newTime);
}

return (

<div className="container">
<h1>{time}</h1>
<button onClick={updateTime}>Get Time</button>
</div>
);
}

export default App;

# JavaScript ES6 Object & Array Destructuring

import React, { useState } from "react";

function App() {
const [headingText, setHeadingText] = useState("Hello Kimono");
const [isMousedOver, setMouseOver] = useState(false);

function handleClick() {
setHeadingText("Your gf is Karina");
}

function handleMouseOver() {
setMouseOver(true);
}

function handleMouseOut() {
setMouseOver(false);
}

return (

<div className="container">
<h1>{headingText}</h1>
<input type="text" placeholder="What's your name?" />
<button
style={{ background: isMousedOver ? "black" : "white" }}
onClick={handleClick}
onMouseOver={handleMouseOver}
onMouseOut={handleMouseOut} >
Submit
</button>
</div>
);
}

export default App;

# React Forms

import React, { useState } from "react";

function App() {
const [name, setName] = useState("");
const [headingText, setHeading] = useState("");

function handleChange(event) {
console.log(event.target.value);
setName(event.target.value);
}

function handleClick(e) {
setHeading(name);
e.preventDefault();
}

return (

<div className="container">
<h1>Hello, {headingText}</h1>
<form onSubmit={handleClick}>
<input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
<button type="submit">Submit</button>
</form>
</div>
);
}

export default App;

# Hooks vs. Classes

---

# Changing Complex State

-

# JavaScript ES6 Spread Operator Practice

import React, { useState } from "react";

function App() {
const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function handleChange(event) {
const newValue = event.target.value;
setInputText(newValue);
}

function addItem() {
setItems((prevItems) => {
return [...prevItems, inputText];
});
setInputText("");
}

return (

<div className="container">
<div className="heading">
<h1>To-Do List</h1>
</div>
<div className="form">
<input onChange={handleChange} type="text" value={inputText} />
<button onClick={addItem}>
<span>Add</span>
</button>
</div>
<div>
<ul>
{/_ map works like a foreach loop _/}
{items.map((todoItem) => {
return <li>{todoItem}</li>;
})}
</ul>
</div>
</div>
);
}

export default App;

# Managing a Component Tree

- -- REACT SCHWARZ --

# Welcome To The Course

-

# What Is React And Why Would We Use It?

- React = A JavaScript library for building user interfaces.
- Netflix is built in React.
- Reactive = Things happen instantly, you don't wait for new pages to load or actions to start.
- Normally you do HTTP request/response traditionally.

# JavaScript To The Rescue!

-> request
<- HTML page

- JavaScript runs in the browser - on the loaded page.
- You can manipulate the HTML structuure (DOM) of the page.
- No visible request to the server is required, no need to wait for a new HTML page as a response.

# What is React.js?

- A client-side JavaScript library.
- All about building modern reactive user interfaces for the web.
- Declarative, component-focused approach.

# Why React instead of Just JavaScript?

- Custom HTML Elements = Components.

# Building Single-Page-Applications (SPAs)

- React can be used to control parts of HTML pages or entire pages.
- Widget approach on a multi-page-application.
- Some pages are still rendered and served by a back-end server.

- React can also be used to control the entire front-end of a web application.

- Single-Page-Application (SPA):
  - Server only sends one HTML page, thereafter, React takes over and controls the UI.

# React.js Alternatives

- React.js

  - Lean and focused component-based UI library.
  - Certain features (e.g.) are added via community packages.

- Angular

  - Complete component-based UI framework, packed with features.
  - Uses TypeScript
  - Can be overkill for smaller projects.

- Vue.js
  - Complete component-based UI framework, includes most core features.
  - A bit less popular than React & Angular.

# About This Course & Course Outline

- Basics & Foundation (Introducing Key Features)

  - Components & Building UIs
  - Working with Events & Data: "props" and "state"
  - Styling React Apps & Components
  - Introduction into "React Hooks"

- Advanced Concepts (Building for Productions)

  - Side Effects, "Refs" & More React Hooks.
  - React's Context API & Redux.
  - Forms, HTTP requests & Custom Hooks.
  - Routing, Deployment, NextJS & More.

- Summaries & Refreshers (Optimizing Your Time)
  - JavaScript Refresher.
  - ReactJS Summary.

# Taking This Course: Two Options

- Standard Approach (Recommended)

  - Chronological order.
  - Skip JS refresher module if you don't need it.
  - Use React summary module at the end to summarize what you learned or to refresh knowledge in the future.

- Summary Approach (If you're in a hurry)
  - Skip the entire course.
  - Skip forward to React summary module.
  - Optionally JS refresher module if you need it.
  - Go through the entire course after going through the summary module /or if you got more time in the future.

# Getting The Most Out of This Course

- Watch the videos (choose your pace).
- Coding Along & Practice (also without me telling you).
- Debug Errors & Explore Solutions (also use code attachments).
- Help Each Other & Learn Together (Discord, Q&A Board).

# Setting Up The Course Dev Environment (Code Editor)

-

# Next-Gen JavaScript - A Refresher

-

# let & const

- var
- let\*
  - variable values
- const\*
  - constant values

# Arrow Functions

- function myFnc() {
  ...
  }
- const myFnc = () => {

}

- No more issues with the this keyword!

// When you return just one thiing
const printMyName = (name) => console.log(name);
printMyName("유지민");

# Exports & Imports (Modules)

- Imports default and ONLY export of the file Name in the receiving file is up to you.

--person.js

- const person = {
  name: "karina"
  }

export default person;

--utility.js
export const clean = () => {...}
export const baseData = 10;

--app.js is where you import all your components
import person from "./person.js";
import prs from "./person.js";

import { baseData } from "./utility.js";
import { clean } from "./utility.js";

# Exports & Imports (Modules)

- Default export

  - import person ...

- Named export
  - You choose aliases
  - import { wow, bow }
  - import \* as bundled from "./utility.js"

# Classes

- Classes: blueprints for js objects.
- Properties and methods.
- Instantiation: const karina = new Person();
- karina.call();
- console.log(karina.name);

- class Person extends Humans

// Base-class
class Human {
constructor() {
this.gender = "female";
}

printGender() {
console.log(this.gender);
}
}

// Inheritance
class Person extends Human {
constructor() {
super(); // required
this.name = "Karina";
}

printMyName() {
console.log(this.name);
}
}

const person = new Person();
person.printMyName();
person.printGender();

# Classes, Properties & Methods

- Properties are like "variables" attached to classes / objects.
  - ES6:
    - constructor() {
      this.myProperty = "value";
      }
  - ES7:
    - myProperty = "value";
- Methods are like "functions attached to classes / objects".
  - ES6
    - myMethod() {...}
  - ES7
    - myMethod = () => { ... }

// Base-class
class Human {
gender = "female";

printGender = () => {
console.log(this.gender);
}
}

// Inheritance
class Person extends Human {
name = "Karina";
gender = "female";

printMyName () => {
console.log(this.name);
}
}

const person = new Person();
person.printMyName();
person.printGender();

# Spread & Rest Operators

- Spread Operator:

  - Used to split up array elements OR object properties.
  - [ ... ]
  - const newArray = [...oldArray, 2, 3];
  - { ... }
  - const newObject = {...oldObject, newProp: 5};

- Rest Operator
  - Used to merge a list of function arguments into an array.
  - function sortArgs(...args) {
    return args.sort()
    }

// As many args as you want
const filter = (...args) => {
// search for value 1
return args.filter(el => el === 1);
};

console.log(filter((1, 2, 3)));

# Destructuring

- Easily extract array elements or object properties and store then in variables.

- Array Destructuring

  - [a, b] = ["Hello", "Karina"]
  - console.log(a); // Hello
  - console.log(b); // Karina

- Object Destructuring
  - {name} = {name: "Karina", age: 25}
  - console.log(name); // Karina
  - console.log(age); // undefined

# Reference Types and Primitive Types

// Reference Types
const person = {
name: "Karina"
}

const secondPerson = {
...person
};

person.name = "Winter";

console.log(secondPerson);

# Refreshing Array Functions

-

# Map Function

- map();
  - Makes you iterate over an array.
  - custom array param name.
  - Is a brand new array itself.
  - It is like an for-each loop.
  - const xarray = [1, 2, 3];
  - const mappedArray = xarray.map((customArray) => {
    return num \* 2;
    })
    console.log(mappedArray);

// Refreshing Array Functions
const numbers = [1, 2, 3];

// Map function
// REAL NEW ARRAY, 1 _ 2, foreach loop array.
// param also array but custom new array
const doubleNumArray = numbers.map((num) => {
return num _ 2;
});

console.log(numbers);
console.log(doubleNumArray);

# Next-Gen JavaScript - A Refresher

-

# Module Introduction

- Component-Driven User Interfaces - Building Interactive & Scalable UIs
- React Core Syntax & JSX
- Working with Components
- Working with Data

# What Are Components? And Why Is React All About Them?

- React is a JavaScript library for building user interfaces.
- HTML, CSS & JavaScript are about building user interfaces as well.
- React makes building complex, interactive and reactive user interfaces simpler.
- React is all about "Components".
  - Because all user interfaces in the end are made up of components.
- What is a "Component"?

# Why Components?

- Reusability:

  - Don't repeat yourself.

- Separation of Concerns:

  - Don't do too many things in one and the same place (function).

- Split big chunks of code into multiple smaller functions.

# How Is A Component Built?

- HTML:

- CSS:

- JavaScript:

- React
  - HTML, CSS, JS combined in components.

# React & Components

- React allows you to create re-usable and reactive components consisting of HTML and JavaScript (and CSS).
- Declarative Approach
- Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.
- Build your own, custom HTML Elements.

# Create A New React Project

https://github.com/facebook/create-react-app
create-react-app.dev
install react project:
npx create-react-app react-complete-guide

# Stuff I Hate About React

- Deleting projects just take forever.

-- CODECADEMY REACT --

# Why React?

- React.js is a JavaScript library. It was developed by engineers at Facebook.
- Apps made in React can handle complex updates and still feel quick and responsive.
- Instead of writing large, dense files of code, you can write smaller, reusable files. React's modularity can be a beautiful solution to JavaScript's maintainability problems.
- Large programs that display a lot of changing data are where React performs best.
- You can use React for interesting projects that nothing to do with making a web app. People are still figuring out React's potential.
- Makes you more employable.

# Intro To JSX - Hello World

const h1 = <h1>Hello World</h1>;

# The Mystery, Revealed

- JSX:
  - HTML in your JavaScript.

# What is JSX?

- A syntax extension for JavaScript.
- JSX Compiler will translate JSX to JavaScript in the end so the browser can read it.

# JSX Element

- Looks like HTML but found in JS files.
<h1>Hello Karina</h1>

# JSX Elements And Their Surroundings

- JSX elements are treated as JavaScript expressions.
- Can be saved in a variable, passed to a function, stored in an object/array.
- const navBar = <nav>I am a nav bar</nav>

const aespa {
member1: <li>Karina</li>
member2: <li>Winter</li>
member3: <li>Ningning</li>
member4: <li>Giselle</li>
};

const myArticle = <article></article>

# Attributes in JSX

- Just like HTML but written in an expression.
  const p1 = <p>foo</p>

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

# Nested JSX

- If a JSX expression is more than one line add ()
- Can be saved as variables, passed to functions.
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

# JSX Outer Elements

- A JSX expression must have exactly one outermost element.
- There should be least one parent if you want to use more jsx elements a <div>.

const blog = (

  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Karina's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);

# Rendering JSX

- To render a JSX elements mean to make it appear onscreen.

import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>,
document.getElementById("app"));

# ReactDOM.render() I

- ReactDOM is the name of a JavaScript library.
- Takes a JSX expression, creates DOM nodes, and add it to the DOM tree.
- first args = jsx expression

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(

  <h1>Render me!</h1>,
  document.getElementById("app")
);

# ReactDOM.render() II

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

# Passing a Variable to ReactDOM.render()

- first arg can be a variable as well.

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (

  <ul>
    <li>Karina</li>
    <li>Winter</li>
    <li>Ningning</li>
    <li>Giselle</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById("app"));

# The Virtual DOM

- ReactDOM.render() updates DOM elements that have changed.
- If you render the same thing twice the second render will do nothing.

# JSX Recap

-

# class vs className

- Instead of class in HTML we use className in JSX.
- <h1 className="big">Hey</h1>

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = <div className="big">I AM A BIG DIV

</div>;

ReactDOM.render(
myDiv,
document.getElementById("app")
);

# Self-Closing Tags

- Self closing tags are required to look like this <tag />
- img, br are self-closing tags.
- <br />
- <Component />

const profile = (

  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

# JavaScript In Your JSX In Your JavaScript

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(

  <h1>2 + 3</h1>,
  document.getElementById("app")
);

# Curly Braces in JSX

- In order to execute JavaScript in JSX it needs {} like Blade in Laravel.
  import React from 'react';
  import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(

  <h1>{2 + 3}</h1>,
  document.getElementById("app")
);

# 20 Digits of Pi in JSX

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(
math,
document.getElementById("app")
);

# Variables in JSX

import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

# Variable Attributes in JSX

- Put in variables inside JSX attributes.

import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;

ReactDOM.render(
gooseImg,
document.getElementById("app")
);

# Event Listeners in JSX

- function pointers
- onClick={functionx}
- onCamelCase

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
// Call this extremely useful function on an <img>.
// The <img> will become a picture of a doggy.
e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
e.target.setAttribute('alt', 'doggy');
}

const kitty = (
<img 
    onClick={makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById("app"));

# JSX Conditionals: If Statements That Don't Work

- You cannot inject an if-statement into a JSX expression.

# JSX Conditionals: If Statements That Do Work

- You can use if statements outside the JSX expressions.

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
// This function will randomly return either 'heads' or 'tails'.
return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === "heads") {
img = <img src={pics.kitty} />;
} else {
img = <img src={pics.doggy} />;
}

ReactDOM.render(img, document.getElementById("app"));

# JSX Conditionals: The Ternary Operator

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
// Randomly return either 'heads' or 'tails'.
return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

// if return heads then function comparison
const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

ReactDOM.render(
img,
document.getElementById('app')
);

# JSX Conditionals: &&

- && = Just an if statement if x is true then execute y.
- Works best in conditionals that will sometimes do an action, but other times do nothing at all.
- If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered.
- If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.
- 50% chance true/false
- {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}

# .map in JSX

- Like a foreach loop
- Loop through an array.

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
// expression goes here:

  <li>{person}</li> // iterate through list items
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"));

# Keys

- key attribute.
- should be unique like in id
- Required for React to keep track of lists.
- React will give the wrong order of lists if you don't use it.

- Conditions for keys:
  - in to-do lists: each item must remember whether it was checked off.
  - memory from one render to the next.
  - A list's order might be shuffled -> a list of search results might be shuffled from one render to the next.
  - if the conditions aren't true you don't have to use them.
  - use it for safety.

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
// expression goes here:

  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

# React.createElement - BUG

- The majority of programmers use JSX but you can do it without.
- JSX translates into React.createElement() method.

const greatestDivEver = React.createElement(
"div",
null,
"i am div",
);

# Hello, World Part II... THE COMPONENT

- Component:
  - A small, reusable chunk of code that is responsivble for one job. That job is often to render some HTML.

# Import React

import React from "react";

# Import ReactDOM

import ReactDOM from "react-dom";

# Create a Component Class

import React from "react";
import ReactDOM from "react-dom";

class x extends React.Component {

}

# Name a Component Class

- Component class variable names are PascalCase.
  import React from "react";
  import ReactDOM from "react-dom";

class MyComponentClass extends React.Component {

}

# Component Class Instructions

import React from "react";
import ReactDOM from "react-dom";

class MyComponentClass extends React.Component {
render() {
return <h1>Hello world</h1>;
}
}

# Create a Component Instance

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
render() {
return <h1>Hello world</h1>;
}
}

// component goes here:
<MyComponentClass />

# Render A Component

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
render() {
return <h1>Hello world</h1>;
}
}

// component goes here:
ReactDOM.render( <MyComponentClass />,
document.getElementById("app")
);

# Use Multiline JSX in a Component

- Don't forget to return in the render method!

import React from "react";
import ReactDOM from "react-dom";

class QuoteMaker extends React.Component {
render() {
return (

<blockquote>
<p>
The world is full of objects, more or less interesting; I do not wish to add any more.
</p>
<cite>
<a target="_blank"
              href="https://en.wikipedia.org/wiki/Douglas_Huebler">
Douglas Huebler
</a>
</cite>
</blockquote>
);
}
}

ReactDOM.render(<QuoteMaker />, document.getElementById("app"));

# Use a Variable Attribute in a Component

import React from "react";
import ReactDOM from "react-dom";

const owl = {
title: 'Excellent Owl',
src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
render() {
return (

<div>
<h1>{owl.title}</h1>
<img src={owl.src} alt={owl.title} />
</div>
);
}
}

ReactDOM.render(<Owl />, document.getElementById("app"));

# Put Logic In A Render Function

- Render function
  - must have return statements.
  - suitable for simple calculations.
  - calculation should be in the render function.

import React from "react";
import ReactDOM from "react-dom";

const friends = [
{
title: "Yummmmmmm",
src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
},
{
title: "Hey Guys! Wait Up!",
src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
},
{
title: "Yikes",
src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
}
];

// New component class starts here:
class Friend extends React.Component {
render() {
const friend = friends[0];
return (

<div>
<h1>{friend.title}</h1>
<img src={friend.src} />
</div>
);
}
};

ReactDOM.render(<Friend />, document.getElementById("app"));

# Use a Conditional in a Render Function

- if statements are in the render function but outside the return statement.
  import React from 'react';
  import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
render() {
let tonight;
if (fiftyFifty) {
tonight = "Tonight I'm going out WOOO";
} else {
tonight = "Tonight I'm going to bed WOOO";
}
return <h1>{tonight}</h1>;
}
}

ReactDOM.render(<TonightsPlan />, document.getElementById("app"));

# Use this in a Component

- this refers to the object.
- this.name can refer to a get method with that name.

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
// name property goes here:
get name() {
return "Karina";
}

render() {
return <h1>My name is {this.name}.</h1>;
}
}

ReactDOM.render(<MyName />, document.getElementById('app'));

# Use an Event Listener in a Component

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
scream() {
alert('AAAAAAAAHHH!!!!!');
}

render() {
return <button onClick={this.scream}>AAAAAH!<button>;
}
}

ReactDOM.render(<Button />, document.getElementById("app"));

# A Component in a Render Function

-

# Apply a Component In A Render Function

- A Component can have multiple components.

import React from 'react';
import ReactDOM from 'react-dom';

class ProfilePage extends React.Component {
render() {
return (

<div>
<NavBar />
<h1>All About Me!</h1>
<p>I like movies and blah blah blah blah blah</p>
<img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
</div>
);
}
}

# Require A File

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from "./NavBar";

class ProfilePage extends React.Component {
render() {
return (

<div>
<NavBar />
<h1>All About Me!</h1>
<p>I like movies and blah blah blah blah blah</p>
<img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
</div>
);
}
}

# Export

import React from 'react';

export class NavBar extends React.Component {
render() {
const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
const navLinks = pages.map(page => {
return (
<a href={'/' + page}>
{page}
</a>
)
});

    return <nav>{navLinks}</nav>;

}
}

# Component Rendering In Action

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from "./NavBar";

class ProfilePage extends React.Component {
render() {
return (

<div>
<NavBar />
<h1>All About Me!</h1>
<p>I like movies and blah blah blah blah blah</p>
<img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
</div>
);
}
}

ReactDOM.render(<ProfilePage />, document.getElementById("app"));

# this.props

- To pass information from one component to another.
- Object that holds all the props.

# Access a Component's props

- Props
  - An object that holds information about that component.

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
render() {
const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );

}
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer />, document.getElementById("app"));

# Pass `props` to a Component

- By giving components an attribute.

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
render() {
const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );

}
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById("app"));

# Render a Component's props

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
render() {
return <h1>Hi there, {this.props.firstName}</h1>;
}
}

ReactDOM.render(
<Greeting firstName='유지민' />,
document.getElementById('app')
);

# Pass props From Component To Component

- In App.js you make another Component <Greeting /> there you give in the value for the specified props in Greeting.js.
- The greeting component is just a parameter when you instantiate such a component.
- app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from "./Greeting";

class App extends React.Component {
render() {
return (

<div>
<h1>
Hullo and, "Welcome to The Newzz," "On Line!"
</h1>

        <Greeting name="Karina" />

        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );

}
}

ReactDOM.render(
<App />,
document.getElementById('app')
);

- greeting.js

import React from 'react';

export class Greeting extends React.Component {
render() {
return <h1>Hi there, {this.props.name}!</h1>;
}
}

# Render Different UI Based on Props

-

# Put an Event Handler in a Component Class

- methods should be in the class definition not functions.

# Pass an Event Handler as a Prop

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
talk() {
let speech = '';
for (let i = 0; i < 10000; i++) {
speech += 'blah ';
}
alert(speech);
}

render() {
return <Button talk={this.talk} />;
}
}

ReactDOM.render(
<Talker />,
document.getElementById('app')
);

# Receive an Event Handler as a prop

-

# handleEvent, onEvent, and this.props.onEvent

- handleClick naming convention for callback functions.

# this.props.children

- Will return everything in BETWEEN a component's opening and closing JSX child tags.
  import React from 'react';

export class List extends React.Component {
render() {
let titleText = `Favorite ${this.props.type}`;
if (this.props.children instanceof Array) {
titleText += 's';
}
return (

<div>
<h1>{titleText}</h1>
<ul>{this.props.children}</ul> --> Refers to defined props in app.js of <List />
</div>
);
}
}

# defaultProps

- When a prop is not passed in a component instance.

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
render() {
return (
<button>
{this.props.text}
</button>
);
}
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
<Button text="" />,
document.getElementById('app')
);

# Setting Initial State

- State:

  - To make a component have state, give the component a state property.
  - This property should be declared inside of a constructor method:

- this.state
  - Should be equal to an object, like in the example above.
  - this.state { mood: "wheein" };
  - The object is called the "initial state".
  - It is important to note that React component always have to call super in their constructor to be set up properly.

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
// constructor method begins here:
constructor(props) {
super(props);
this.state = { title: "Best App" };
}
render() {
return (

<h1>
Wow this entire app is just an h1.
</h1>
);
}
}

# Access a Component's State

- Read a components state:
  - this.state.x;

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
// constructor method begins here:
constructor(props) {
super(props);
this.state = { title: "Best App" };
}
render() {
return (

<h1>{this.state.title}</h1>
);
}
}

ReactDOM.render(<App />, document.getElementById("app"));

# Update state with this.setState

- this.setState()
  - Takes an object, and merges that object with the component's current state.
  - The initial state remains unaffected if you change an individual property in an object.
  - A component changes its state by calling this function.
  - 1st arg: object updates state.
  - 2nd arg: a callback (you never need that shit).

# Call this.setState from Another Function

- this.setState() is inserted most of the time another function.

import React from 'react';
import ReactDOM from "react-dom";

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {

constructor(props) {
super(props);
this.state = { color: green };
this.changeColor = this.changeColor.bind(this); // required
}

// bind this function to constructor because this is used
changeColor() {
const newColor = this.state.color == green ? yellow : green;
this.setState({ color: newColor });
}

render() {
return (

<div style={{background: this.state.color}}>
<h1>Change my color</h1>
<button onClick={this.changeColor}>Change color</button>
</div>
);
}
}

ReactDOM.render(<Toggle />, document.getElementById("app"));

# bind()

- Is necessary because we want to point to the object inside the other function.
- this.makeSomeFog = this.makeSomeFog.bind(this);
- When you write a component class method that uses this, you need to bind that method inside of your constructor function or else it won't work!

  constructor(props) {
  super(props);
  this.state = { color: green };
  this.changeColor = this.changeColor.bind(this); // required
  }

  // bind this function to constructor
  changeColor() {
  const newColor = this.state.color == green ? yellow : green;
  this.setState({ color: newColor });
  }

# this.setState Automatically Calls render

- this.setState automatically gets rendered that's why the page gets refreshed.

# The Component Lifecycle

- React Components can get created, rendered, added to the DOM, updated and removed.

# Lifecycle: Mounting

- When the component is being initialized and put into the DOM for the first time.
- The first render basically <Component />.
- If a component is never mounted you don't see it.

# Lifecycle: Updating

- When the component updates as a result of changed state or changed props.
- this.setState();
- this.props.x = "wow";

# Lifecycle: Unmounting

- When the component is being removed from the DOM.
- If you have a button that hides a component the component gets removed.
- Not all components have to be unmounted e.g. a navigation bar.

# Introduction to Lifecycle Methods

- Lifecycle methods

  - constructor() -> mounting phase
  - render() -> mounting and updating phase.

- Initial state:
  - this.state = ({ date: new Date() });

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
// Add your methods in here.
constructor(props) {
super(props);
this.state = ({ date: new Date() });
}

render() {
return <div>{this.state.date.toLocaleTimeString()}</div>;
}
}

ReactDOM.render(<Clock />, document.getElementById('app'));

# Lifecycle Mounting Phase - 3 Steps

- componentDidMount()
  - Is the final method called during the mounting phase.
  - 1. constructor()
  - 2. render()
  - 3. componentDidMount()

# componentDidMount()

- Is called after the component is rendered.

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
constructor(props) {
super(props);
this.state = { date: new Date() };
}
render() {
return <div>{this.state.date.toLocaleTimeString()}</div>;
}
// After the component is rendered...
componentDidMount() {
// Paste your code here.
const oneSecond = 1000;
setInterval(() => {
this.setState({ date: new Date() });
}, oneSecond);
}
}

# componentWillUnmount()

- Hides the mess from the mounted component or functionality from the page.

import React from 'react';

export class Clock extends React.Component {
constructor(props) {
super(props);
this.state = { date: new Date() };
}
render() {
return <div>{this.state.date.toLocaleTimeString()}</div>;
}
componentDidMount() {
const oneSecond = 1000;
this.intervalID = setInterval(() => {
this.setState({ date: new Date() });
}, oneSecond);
}

componentWillUnmount() {
clearInterval(this.intervalID);
}

}

# componentDidUpdate()

- Is invoked immediately after updating occurs.
- render() -> updating phase
- componentDidUpdate() -> updating phase

ReactDOM.render(<Clock />, document.getElementById('app'));

import React from 'react';

export class Clock extends React.Component {
constructor(props) {
super(props);
this.state = { date: new Date() };
}
render() {
return (

<div>
{this.props.isPrecise
? this.state.date.toISOString()
: this.state.date.toLocaleTimeString()}
</div>
);
}

startInterval() {
const delay = this.props.isPrecise ? 100 : 1000;
this.intervalID = setInterval(() => {
this.setState({ date: new Date() });
}, delay);
}

// Is invoked immediately after updating occurs.
componentDidUpdate(prevProps) {
if (this.props.isPrecise === prevProps.isPrecise) {
return;
}
clearInterval(this.intervalID);

    this.startInterval();

}

componentDidMount() {
this.intervalID = setInterval(() => {
this.setState({ date: new Date() });
}, this.startInterval());
}
componentWillUnmount() {
clearInterval(this.intervalID);
}
}

# Review

-

# Stateless Functional Components

- Function components is the React style that Angela uses.
- Two styles of components: Class Component Style, Stateless Functional Component Style

import React from 'react';
import ReactDOM from 'react-dom';

// Stateless Functional Component Style
export const Friend = () => {
return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

ReactDOM.render(
<Friend />,
document.getElementById('app')
);

# Function Components and Props

- Function Components can also receive information via props.
- If you want to use props then use props parameter.
- props.propertyName your template for instantiating Components <Component />.
- Function Components don't use the keywords it goes straight into the props.

import React from 'react';
import ReactDOM from 'react-dom';

export const NewFriend = (props) => {
return (

<div>
<img src={props.src} />
</div>
);
};

ReactDOM.render(
<NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
document.getElementById('app')
);

# Why Use Hooks?

- Hooks:

  - Are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components.
  - With Hooks, we can use simple function components to do lots of the fancy things that we could only do with class components in the past.
  - Function Components and React Hooks are optional.
  - Hook into state and lifecycle features directly from our function components.

- Hook Methods:
  - useState()
  - useEffect()
  - useContext()
  - useReducer()
  - useRef()

import React from "react";
import ReactDOM from "react-dom";
// import App from "./Container/AppClass";
import App from "./Container/AppFunction";

ReactDOM.render(
<App />,
document.getElementById("app")
);

# The State Hook - Update Function Component State

- useState:

  - Returns an array with two values:
    - current state: the current value of this state (now).
    - state setter: a function that we can use to update the value of this state.
  - Is a named export from the React library.
  - You need to import it -> import React, { useState } from "react";
  - const [x, set] = useState();
  - const [currentState, setState] = useState("");

- onclick template for setx:
  - onclick {() => setx()}

import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ColorPicker() {
// call useState and assign its return values to `color` and `setColor`
const [color, setColor] = useState();

const divStyle = {backgroundColor: color};

return (

<div style={divStyle}>
<p>The color is {color}</p>
<button onClick={() => setColor("Aquamarine")}>
Aquamarine
</button>
<button onClick={() => setColor("BlueViolet")}>
BlueViolet
</button>
<button onClick={() => setColor("Chartreuse")}>
Chartreuse
</button>
<button onClick={() => setColor("CornflowerBlue")}>
CornflowerBlue
</button>
</div>
);
}

# Initialize State

- useState(true);

  - if you want that the initial state is visible on the page.

- if you don't useState then pass null for clarification.
- can be either true or false as well.

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
const [color, setColor] = useState("Tomato");

const divStyle = {backgroundColor: color};

return (

<div style={divStyle}>
<p>Selected color: {color}</p>
{colorNames.map((colorName)=>(
<button
onClick={() => setColor(colorName)}
key={colorName}>
{colorName}
</button>
))}
</div>
);
}

# The State Hook - Use State Setter Outside of JSX

- onChange()
  - when you modify an element x should happen.

import React, { useState } from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
// declare current state and state setter
const [phone, setPhone] = useState("");

const handleChange = ({ target })=> {
const newPhone = target.value;
const isValid = validPhoneNumber.test(newPhone);
if (isValid) {
// update state
setPhone(newPhone);
}
// just ignore the event, when new value is invalid
};

return (

<div className='phone'>
<label for='phone-input'>Phone: </label>
<input id='phone-input' value={phone} onChange={handleChange} />
</div>
);
}

# Set From Previous State

- State setter callback function
  - setCount(currentState => currentState + 1);
  - Takes currentState as an argument => what you want to do with currentState.

# The State Hook - Arrays in State

import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
// declare and initialize state
const [cart, setCart] = useState([]);

const addItem = (item) => {
const newCart = setCart([item, ...cart]);
return newCart;
};

const removeItem = (targetIndex) => {

    setCart(prev => {
      return prev.filter((item, index) => index !== targetIndex);
    })

};

return (

<div>
<h1>Grocery Cart</h1>
<ul>
{cart.map((item, index) => (
<li onClick={() => removeItem(index)} key={index}>
{item}
</li>
))}
</ul>
<h2>Produce</h2>
<ItemList items={produce} onItemClick={addItem} />
<h2>Pantry Items</h2>
<ItemList items={pantryItems} onItemClick={addItem} />
</div>
);
}

# The State Hook - Objects in State

- Start setter callback function (Objects)
  setProfile((prevProfile) => ({
  ...prevProfile,
  [name]: value
  }));

# The State Hook - Separate Hooks for Separate States

- you can use useState() more than 1 time.

import React, { useState } from "react";

function Musical() {
const [state, setState] = useState({
title: "Best Musical Ever",
actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
locations: {
Chicago: {
dates: ["1/1", "2/2"],
address: "chicago theater"},
SanFrancisco: {
dates: ["5/2"],
address: "sf theater"
}
}
})
}

function MusicalRefactored() {
// write your code here
const [title, setTitle] = useState("Best Musical Ever");
const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
const [locations, setLocations] = useState({
Chicago: {
dates: ["1/1", "2/2"],
address: "chicago theather"
},

    SanFrancisco: {
      dates: ["5/2"],
      address: "sf theater"
    }

})
)
}

# THINGS THAT WERE HARD AND NEED MORE PRACTICE

- Function Components
- The State Hook

--

# The Effect Hook - Why Use useEffect?

- Effect Hook:

  - Is JS Code execution after each render e.g.
    - Fetching data from a back-end service.
    - Subscribing to a stream of data.
    - Managing timers and intervals.
    - Reading from and making changes to the DOM.

- When to use an Effect Hook?

  - 1. When the component is first added, or mounted, to the DOM and renders.
  - 2. When the state or props change, causing the component to re-render.
  - 3. When the component is removed, or unmounted, from the DOM.

- useEffect()
  - Is invoked immediately after updating occurs.
  - first arg: effect = callback function that executes after the component renders.
  - Better readability instead of Class Components.
  - Functional component version of componentDidUpdate()
  - Needs to be imported -> import { useEffect } from "react";

# The Effect Hook - Function Component Effects

import React, { useState, useEffect } from 'react';

export default function Counter() {
const [count, setCount] = useState(0);

// always after useState and before methods
useEffect(() => {
alert(`Count: ${count}`);
});

const handleClick = () => {
setCount((prevCount) => prevCount + 1);
};

return (

<div>
<p>You clicked {count} times</p>
<button onClick={handleClick}>
Click me
</button>
</div>
);
}

# The Effect Hook - Clean Up Effects

- Clean up effects
  - useEffect()
  - Called before the component re-renders or unmounts.
  - Remove eventlisteners after execution.
  - Avoids memory leak and performance issues.

import React, { useState, useEffect } from 'react';

export default function Counter() {
const [clickCount, setClickCount] = useState(0);

// your code here
const increment = () => {
setClickCount(previousCount => previousCount + 1)
}

useEffect(() => {
// add event listener
document.addEventListener("mousedown", increment);
// clean-up to avoid wrong counting of clicks
return () => {
document.removeEventListener("mousedown", increment);
}
});

return (

<h1>Document Clicks: {clickCount}</h1>
);
}

# The Effect Hook - Control When Effects Are Called

- useEffect() - Dependency array (2nd param)

  - If you only want to call effect after the first render then usse empty array is 2nd param.
  - If the dependency array changes values between renders the effect is called again.
  - cleanup function: returned when the component is destroyed.

  useEffect(() => {
  alert("component rendered for the first time");
  return () => {
  alert("component is being removed from the DOM");
  };
  }, []);

import React, { useState, useEffect } from 'react';

export default function Timer() {
const [time, setTime] = useState(0);
const [name, setName] = useState("");

useEffect(() => {
const intervalId = setInterval(() => {
setTime((prev) => prev + 1);
}, 1000);

    return () => {
      clearInterval(intervalId);
    };

}, []); // rommel verwijderen

// Set wat ingevoerd is door target object te setten.
const handleChange = ({ target }) => setName(target.value);

return (
<>

<h1>Time: {time}</h1>
<input value={name} onChange={handleChange} type="text" />
</>
);
}

# The Effect Hook - Fetch Data

- Dependency Array:
- If the value of a dependency has changed, then the Effect Hook will call our effect again!

useEffect(() => {
document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes

import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Forecast() {
const [data, setData] = useState(null);
const [notes, setNotes] = useState({});
const [forecastType, setForecastType] = useState('/daily');

useEffect(() => {
alert('Requested data from server...');
get(forecastType).then((response) => {
alert('Response: ' + JSON.stringify(response,'',2));
setData(response.data);
});
}, [forecastType]);

const handleChange = (itemId) => ({ target }) =>
setNotes((prev) => ({
...prev,
[itemId]: target.value
}));

if (!data) {
return <p>Loading...</p>;
}

return (

<div className='App'>
<h1>My Weather Planner</h1>
<div>
<button onClick={() => setForecastType('/daily')}>5-day</button>
<button onClick={() => setForecastType('/hourly')}>Today</button>
</div>
<table>
<thead>
<tr>
<th>Summary</th>
<th>Avg Temp</th>
<th>Precip</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
{data.map((item) => {
return (
<tr key={item.id}>
<td>{item.summary}</td>
<td> {item.temp.avg}°F</td>
<td>{item.precip}%</td>
<td>
<input
value={notes[item.id] || ''}
onChange={handleChange(item.id)}
/>
</td>
</tr>
);
})}
</tbody>
</table>
</div>
);
}

# Rules of Hooks

- Only call Hooks at the top level.
- Only call Hooks from React functions.

import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
const [categories, setCategories] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);
const [items, setItems] = useState({});

useEffect(() => {
get('/categories').then((response) => {
setCategories(response.data);
});
}, []);

useEffect(() => {
if (selectedCategory && !items[selectedCategory]) {
get(`/items?category=${selectedCategory}`).then((response) => {
setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
});
}
}, [items, selectedCategory]);

if (!categories) {
return <p>Loading..</p>;
}

return (

<div className='App'>
<h1>Clothes 'n Things</h1>
<nav>
{categories.map((category) => (
<button key={category} onClick={() => setSelectedCategory(category)}>
{category}
</button>
))}
</nav>
<h2>{selectedCategory}</h2>
<ul>
{!items[selectedCategory]
? null
: items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
</ul>
</div>
);
}

# Separate Hooks for Separate Effects

import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
const [menu, setMenu] = useState(null);
useEffect(() => {
get('/menu').then((response) => {
setMenu(response.data);
});
}, []);

const [newsFeed, setNewsFeed] = useState(null);
useEffect(() => {
get('/news-feed').then((response) => {
setNewsFeed(response.data);
});
}, []);

const [friends, setFriends] = useState(null);
useEffect(() => {
get('/friends').then((response) => {
setFriends(response.data);
});
}, []);

return (

<div className='App'>
<h1>My Network</h1>
{!menu ? (
<p>Loading..</p>
) : (
<nav>
{menu.map((menuItem) => (
<button key={menuItem}>{menuItem}</button>
))}
</nav>
)}
<div className='content'>
{!newsFeed ? (
<p>Loading..</p>
) : (
<section>
{newsFeed.map(({ id, title, message, imgSrc }) => (
<article key={id}>
<h3>{title}</h3>
<p>{message}</p>
<img src={imgSrc} alt='' />
</article>
))}
</section>
)}
{!friends ? (
<p>Loading..</p>
) : (
<aside>
<ul>
{friends
.sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
.map(({ id, name, isOnline }) => (
<li key={id} className={isOnline ? 'online' : 'offline'}>
{name}
</li>
))}
</ul>
</aside>
)}
</div>
</div>
);
}

# Stateless Components Inherit From Stateful Components

- Stateful:

  - Describes any component that has a state property.
  - Can pass states down to a stateless component.

- Stateless:
  - Describes any component that does NOT have a state property.

import React from "react";
import ReactDOM from "react-dom";

// Stateful component class = a component that has state
export class Parent extends React.Component {
constructor(props) {
super(props);
this.state = {name: "Frarthur"};
}

render() {
return <div></div>;
}
}

# Build a Stateless Component Class

-- stateless class --
import React from "react";

export class Child extends React.Component {
render() {
return <h1>Hey, my name is {this.props.name}!</h1>;
}
}

# Pass a Component's State

import React from "react";
import ReactDOM from "react-dom";
import { Child } from "./Child";

// Stateful component class = a component that has state
export class Parent extends React.Component {
constructor(props) {
super(props);
this.state = {name: "Frarthur"};
}

render() {
return <Child name={this.state.name} />;
}
}

ReactDOM.render(<Parent />, document.getElementById("app"));

# Don't Update props

- A component should never update this.props
- NOT: this.props.message = "I love fat fries";
- A React component should use PROPS to store information that can be changed, but only be changed by a DIFFERENT component.
- A React component should use STATE to store information that the component itself can change.

# Define an Event Handler

- Make Child component update it's parent's state:
  - Define a state-changing method on the parent.

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
constructor(props) {
super(props);

    this.state = { name: 'Frarthur' };

}

// Function that kan change the name
changeName(newName) {
this.setState({
name: newName
});
}

render() {
return <Child name={this.state.name} />
}
}

ReactDOM.render(
<Parent />,
document.getElementById('app')
);

# Child Components Update Their Parents' state - Pass the Event Handler

- Keep states above in your methods.
- Use this to refer to functions in class components.

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
constructor(props) {
super(props);
this.state = { name: 'Frarthur' };
this.changeName = this.changeName.bind(this); // Point to object from another function.

}

changeName(newName) {
this.setState({
name: newName
});
}

render() {
return <Child name={this.state.name} onChange={this.changeName} /> // pass to child can change parent state
}
}

ReactDOM.render(
<Parent />,
document.getElementById('app')
);

# Child Components Update Their Parents' State - Receive the Event Handler

import React from 'react';

export class Child extends React.Component {
constructor(props) {
super(props);
this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
const name = e.target.value;
this.props.onChange(name);
}

render() {
return (

<div>
<h1>
Hey my name is {this.props.name}!
</h1>
<select onChange={this.handleChange} id="great-names">
<option value="Frarthur">
Frarthur
</option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );

}
}

# Childs Component Update Their Parents' State - Automatic Binding

-

# Child Components Update Sibling Components

-

# One Sibling to Display, Another to Change

- Stateless component 1: displays information
- Stateless component 2: changes information.

# Pass the Right props to the Right Siblings

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
constructor(props) {
super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);

}

changeName(newName) {
this.setState({
name: newName
});
}

render() {
return (

<div>
<Child 
          onChange={this.changeName} />
<Sibling name={this.state.name} />
</div>
);
}
}

ReactDOM.render(
<Parent />,
document.getElementById('app')
);

# Display Information In A Sibling Component

import React from 'react';

export class Sibling extends React.Component {
render() {
const name = this.props.name;
return (

<div>
<h1>Hey, my name is {name}!</h1>
<h2>Don't you think {name} is the prettiest name ever?</h2>
<h2>Sure am glad that my parents picked {name}!</h2>
</div>
);
}
}

# Stateless Components Inherit From Stateful Components - Recap

-

# Style - Advanced React Techniques

- propType
- Write a form
- How to use styles
- Concept: Dividing Components into presentational components and container components

# Style - Inline Styles

- <h1 style={{ color: "x" }}>Hello Karina!</h1>
  import React from 'react';
  import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: "lightblue", color: "darkred" }}>Please style me! I am so bland!</h1>;

ReactDOM.render(
styleMe,
document.getElementById('app')
);

# Style - Make A Style Object Variable

- const style = {
  color: "red",
  background: "deeppink"
  }
- bovenaan plaatsen

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
background: "lightblue",
color: "darkred"
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
styleMe,
document.getElementById('app')
);

# Style - Style Name Syntax

- camelCase css attributes
- string values

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
background: "lightblue",
color: "darkred",
marginTop: "100px",
fontSize: "50px"
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
styleMe,
document.getElementById('app')
);

# Style - Style Value Syntax

- You can use numbers as well for units.

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
background: "lightblue",
color: "darkred",
marginTop: 100,
fontSize: 50
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
styleMe,
document.getElementById('app')
);

# Style - Share Styles Across Multiple Components

import React from 'react';
import { styles } from "./styles";

const h1Style = {
color: styles.color,
fontSize: styles.fontSize,
fontFamily: styles.fontFamily,
padding: styles.padding,
margin: 0,
};

export class AttentionGrabber extends React.Component {
render() {
return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
}
}

# Separate Container Components From Presentational Components

- Shows when you have to divide a component into smaller components.

# Separate Presentational Component

- Presentational Component:
  - Only contains HTML/JSX.
  - Should be an exported component.
  - Will not render itself.
  - Presentational component will get rendered by a container component.

# Render Presentational Component in Container Component

- Container Component = logic
- Presentational Component = render JSX

# propTypes

- For prop validation.
- To ensure that your props are doing what they supposed to be doing.
- Documentation for your props.

# Proptypes - Apply PropTypes

- Proptypes: Makes a component class EXPECT a prop!
- Needs an import -> import PropTypes from "prop-types";
- x.propTypes = {
  x: PropTypes.datatype
  };
- Is an object, not a function!
- Defined outside of the class component.

ComponentClass.propTypes = {
message: PropTypes.string
};

# Proptypes - Add Properties to PropTypes

BestSeller.propTypes = {
title: PropTypes.string.isRequired,
author: PropTypes.string.isRequired,
weeksOnList: PropTypes.number.isRequired
};

# PropTypes in Function Components

const Example = (props) => {
return <h1>{props.message}</h1>;
}

Example.propTypes = {
message: PropTypes.string.isRequired
};

# React Forms

-

# React Forms - Input onChange

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
handleUserInput() {

};

render() {
return (

<div>
<input onChange={this.handleUserInput} type="text" />
<h1>I am an h1.</h1>
</div>
);
}
}

ReactDOM.render(<Input />, document.getElementById("app"));

# React Forms - Write an Input Event Handler

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
handleUserInput(e) {
this.setState({userInput: e.target.value});
};

render() {
return (

<div>
<input onChange={this.handleUserInput} type="text" />
<h1>I am an h1.</h1>
</div>
);
}
}

ReactDOM.render(<Input />, document.getElementById("app"));

# React Forms - Set the Input's Initial State

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
constructor(props) {
super(props);
this.state = ({ userInput: '' });
this.handleUserInput = this.handleUserInput.bind(this);
}

handleUserInput(e) {
this.setState({userInput: e.target.value});
};

render() {
return (

<div>
<input onChange={this.handleUserInput} type="text" />
<h1>I am an h1.</h1>
</div>
);
}
}

ReactDOM.render(<Input />, document.getElementById("app"));

# Update an Input's Value

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
constructor(props) {
super(props);
this.state = ({ userInput: '' });
this.handleUserInput = this.handleUserInput.bind(this);
}

handleUserInput(e) {
this.setState({userInput: e.target.value});
};

render() {
return (

<div>
<input onChange={this.handleUserInput} type="text" value={this.state.userInput} />
<h1>{this.state.userInput}</h1>
</div>
);
}
}

ReactDOM.render(<Input />, document.getElementById("app"));

# React Forms - Controlled vs Uncontrolled

- Uncontrolled Component:

  - A component that maintains its own internal state.
  - Remembers data itself.

- Controlled Component:
  - A component that does not maintain any internal state.
  - Must be controlled by someone else.
  - You need the information through props.
  - When you give <input> a value attribute it becomes controlled.

### STEPHEN GRIDER REACT COURSE - MODERN REACT WITH REDUX

-

# How to Get Help

- Modern React and Redux.
- Udemy QA
- @ste_grider -> twitter
- ste.grider@gmail.com
- 9AM PST

# Our First App

- Best way to learn React:
  - Write Code.

import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
const [language, setLanguage] = useState("ru");
const [text, setText] = useState("");

return (

<div>
<Field label="Enter English" onChange={setText} value={text} />
<Languages language={language} onLanguageChange={setLanguage} />
<hr />
<Translate text={text} language={language} />
</div>
);
}

# Critical Questions!

- App Component

  - Produces JSX and handles user events.
  - Returns JSX.

- JSX

  - Set of instructions to tell React what content we want to show on the screen.

- JSX Elements
  - To React create a normal HTML element.
  - Tell React to show another component.
- HTML elements treated normally.
- Components return their functions.

- HTTP Requests/Response

  - index.html
  - bundle.js

- ReactDOM render
- Get JSX or HTML tag -> 1st param
- Put inside app id in index.html. -> 2nd param
<div class="container" id="root"></div>

- React Library:

  - Knows how to work with components.
  - Called a 'reconciler'

- ReactDOM library:

  - Knows how to take instructions on what we want to show and turn it into HTML.
  - Called a 'renderer'

- useState:
- Function for working with React's 'state' System.
- State is used to keep track of data that changes over time.
- Used to make React update the HTML on the screen.

# Installing NodeJS

-

# Install a React App

- npm install -g create-react-app
- npx create-react-app my-app

# Bugs during install

- npx clear-npx-cache
- npx uninstall -g create-react-app
- npx create-react-app my-app

# Generating a React Project

- -g:
  - Installs package globally so we can run it from the terminal.

# Why Create React App?

- Babel:

  - Converts JS version to another version.
  - ES5: Version of JS you probably know.
  - Supported accross all browsers.

- Newer Versions:
  - Poor support on some browsers.
  - ES2015 -> Almost completely supported.
  - ES2016 -> Poor support.
  - ES2017 -> Poor support.
  - ES2018 -> Poor support.
  - ES2019 -> Poor support.

# Exploring a Create-React-App Project

- src:

  - Folder where we put all the source code we write.

- public:

  - Folder that stores static files, like images.

- node_modules:

  - Folder that contains all of our project dependencies.

- package.json:

  - Records our project dependencies and configures our project.

- package-lock.json

  - Records the exact version of packages that we install.

- README.md
  - Instructions on how to use this project.

# Starting and Stopping A React App

- Stopping the React app:

  - Press CTRL+C in the terminal.

- Starting the app up in the future:

  - Run npm start in the project directory.
  - localhost:3000

- Port in use message:

  - You can't do npm start double time.

- localhost:3000 doesn't work:
  - On your network: ip address in node terminal.

# JavaScript Module Systems

- Clean React Project

  - Delete everything in src folder.

- Import:

  - We want to get code from some other file or dependency.

- React:

  - The variable we want to assign this import to.

- from:

  - We are about to specify the name of the library or file we are importing from.

- 'react':
  - The name of the dependency or path to the file we are importing.
  - in node_modules

# Displaying Content with Functional Component

- Component:

  - A function or a class that produces HTML (JSX) to show the user and handles feedback from the user by using event handlers.

- Functional Component:
  const App = () => {
  return <div>Hello Karina!</div>;
  };

- Render a component:
  ReactDOM.render(<App />, document.getElementById("root"));

# What is JSX?

-

# Converting HTML to JSX

- JSX:
  - Special dialect of JS (its not HTML!)
  - Browsers don't understand JSX code! We write JSX then run tools to turn it into normal JS
  - Very similar in form and function to HTML with a couple differences.

# Inline Styling with JSX

- JSX vs HTML:
  - Adding custom styling to an element uses different syntax.
  - Adding a class to an element uses different syntax.
  - JSX can reference JS variables.

# Converting Styling to JSX Format

-

# Class vs ClassName

- JSX vs HTML:

  - Adding custom styling to an element uses different syntax.
  - Adding a class to an element uses different syntax.
  - JSX can reference JS variables.

- not class but className

// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component -> Functional Component
const App = () => {
return (

<div>
<label className="label" for="name">
Enter name:
</label>
<input id="name" type="text" />
<button style={{ backgroundColor: "blue", color: "white" }}>
Submit
</button>
</div>
);
};

// Rendering component
ReactDOM.render(<App />, document.getElementById("root"));

# Referencing JS Variables in JSX

- Output from functions need ().
- In event listeners you use a function pointer.

# Values JSX can't show

- You can't render a full object only it's properties.

// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component -> Functional Component
const App = () => {
const buttonText = { text: "Click me" };
const labelText = "Enter name:";

return (

<div>
<label className="label" for="name">
{labelText}
</label>
<input id="name" type="text" />
<button style={{ backgroundColor: "blue", color: "white" }}>
{buttonText.text}
</button>
</div>
);
};

// Rendering component
ReactDOM.render(<App />, document.getElementById("root"));

# Finding Forbidden Property Names

// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component -> Functional Component
const App = () => {
const buttonText = { text: "Click me" };
const labelText = "Enter name:";

return (

<div>
<label className="label" htmlFor="name">
{labelText}
</label>
<input id="name" type="text" />
<button style={{ backgroundColor: "blue", color: "white" }}>
{buttonText.text}
</button>
</div>
);
};

// Rendering component
ReactDOM.render(<App />, document.getElementById("root"));

# Exercise Introduction

-

# JSX Exercise Solution

-

# Three Tenets of Components

- Component Nesting:

  - A component can be shows inside of another.

- Component Reusability:

  - We want to make components that can be easily reused through out application.

- Component Configuration:
  - We should be able to configure a component when it is created.

# Application Overview

-

# Getting Some Free Styling -> SEMANTIC UI FRAMEWORK

- Semantic UI Framework
- Foundation:
  - Use CDN links from documentation in index.html.
  - check components project.
- Tailwind CSS

# Naive Component Approach

-

# IMPORTANT info About Faker Installation

npm install faker@5.5.3
<img alt="avatar" src={faker.image.image()} />

# Specifying Images in JSX

- Faker installation:
  - Check previous section.
  - You don't want to use it in a professional project
  - Dependencies need an import.
  - import faker from "faker";

# Duplicating a Single Component

- Makes a mess of your component hard to read.

# Extracting JSX to New Components

- Creating a Reusable, Configurable Component:
  - Identify the JSX that appears to be duplicated.
  - What is the purpose of that block of JSX? Think of a descriptive name for what it does.
  - Create a new file to house this new component - it should have the same name as the component.
  - Create a new component in the new file, paste the JSX into it.
  - Make the new component configurable by using React's 'props' system.
  - components are written in PascalCase.

# Component Nesting

-

# React's Props System

- Component Hierarchy:
  - App
    - Comment Detail -> Karina
    - Comment Detail -> Ning
    - Comment Detail -> Giselle
- Props:
  - System for passing data from a parent component to a child component.
  - Goal is to customize or configure a child component.

# Passing and Receiving Props

- Props:

  - System for passing data from a parent component to a child component.
  - Child component has the place holder props.
  - Goal is to customize or configure a child component.
  - Is an object you need the properties from.

- Providing props from parent to child:
  - <CommentDetail author="Ningning" />

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
return (

<div className="ui container comments">
<CommentDetail author="Ningning" />
<CommentDetail author="Karina" />
<CommentDetail author="Giselle" />
</div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import faker from "faker";

// With props we make place holders for the hardcoded stuff when instantiate an object
export const CommentDetail = (props) => {
return (

<div className="comment">
<a href="/" className="avatar">
<img alt="avatar" src={faker.image.image()} />
</a>
<div className="content">
<a href="/" className="author">
{props.author}
</a>
<div className="metadata">
<span className="date">Today at 6:00PM</span>
</div>
<div className="text">I love you Kevin.</div>
</div>
</div>
);
};

export default CommentDetail;

# Passing Multiple Props

-

# Passing Props - Solutions

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
return (

<div className="ui container comments">
<CommentDetail
        author="Ningning"
        timeAgo="Today at 4:45PM"
        content="My father runs a restaurant in Sichuan."
        avatar={faker.image.image()}
      />
<CommentDetail
        author="Karina"
        timeAgo="Today at 2:00AM"
        content="I love you Kimono."
        avatar={faker.image.image()}
      />
<CommentDetail
        author="Giselle"
        timeAgo="Yesterday at 5:00PM"
        content="Is your brother that hot Indian programmer?"
        avatar={faker.image.image()}
      />
</div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));

# Component Reuse

- Approval Card:
  - White outline
  - 2 buttons.

# Implementing an Approval Card

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
return (

<div className="ui container comments">
<ApprovalCard />
<CommentDetail
        author="Ningning"
        timeAgo="Today at 4:45PM"
        content="My father runs a restaurant in Sichuan."
        avatar={faker.image.image()}
      />
<CommentDetail
        author="Karina"
        timeAgo="Today at 2:00AM"
        content="I love you Kevin."
        avatar={faker.image.image()}
      />
<CommentDetail
        author="Irene"
        timeAgo="Yesterday at 5:00PM"
        content="Is your brother that hot Indian programmer?"
        avatar={faker.image.image()}
      />
<CommentDetail
        author="Jutta"
        timeAgo="Yesterday at 6:00PM"
        content="Ik wil graag neuken met Jacob"
        avatar={faker.image.image()}
      />
</div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";

const ApprovalCard = () => {
return (

<div className="ui card">
<div className="content">Are you sure?</div>
<div className="extra content">
<div className="ui two buttons">
<div className="ui basic green button">Approve</div>
<div className="ui basic red button">Reject</div>
</div>
</div>
</div>
);
};

export default ApprovalCard;

# Showing Custom Children

- props.children
  - Makes sure you can put nested component inside the component where you've put the props.children on.
  - Is the nested components props content.

import React from "react";

const ApprovalCard = (props) => {
return (

<div className="ui card">
<div className="content">{props.children}</div>
<div className="extra content">
<div className="ui two buttons">
<div className="ui basic green button">Approve</div>
<div className="ui basic red button">Reject</div>
</div>
</div>
</div>
);
};

<ApprovalCard>
    <CommentDetail
      author="Ningning"
      timeAgo="Today at 4:45PM"
      content="My father runs a restaurant in Sichuan."
      avatar={faker.image.image()}
    />
  </ApprovalCard>

# Component Reuse

<ApprovalCard>
    <div>
      <h4>Warning!</h4>
      Are you sure you want to do this?
    </div>
  </ApprovalCard>

# Exercise Props

-

# Test Your Knowledge: Props

<script type="text/babel" data-presets="env,react">
    const App = () => {
        return (
            <div>
                <Message header="Karina" text="A member of South-Korean girl group named aespa." />
            </div>
        );
    }
    
    const Message = (props) => {
        return (
            <div className="ui message">
                <div className="header">{props.header}</div>
                <p>{props.text}</p>
            </div>
        );
    }
    

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script crossorigin src="https://unpkg.com/@babel/standalone@7.0.0/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/@babel/preset-env-standalone@7.0.0/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

# Props Exercise Solution

-

# Exercise - Children

-

# Test Your Knowledge: Children Through Props

<script type="text/babel" data-presets="env,react">
    const App = () => {
        return (
            <Segment>
            </Segment>
        );
    }
    
    const Segment = (props) => {
        return <div className="ui placeholder segment"></div>;
    }
    
    

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script crossorigin src="https://unpkg.com/@babel/standalone@7.0.0/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/@babel/preset-env-standalone@7.0.0/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

# Children Exercise Solution

-

# Class-Based Components

- Component:

  - Function or Class that produces HTML to show the user using JSX and handles feedback from the user Using Event Handlers.

- How React Used to Be:

  - Functional Components:

    - Can produce JSX to show content to the user.

  - Class Components:
    - Can produce JSX to show content to the user.
    - Can use the Lifecycle Method system to run code at specific points in time.
    - Can use the 'state' system to update content on the screen.

- How React is Now:

  - Functional Components (Hooks System):

    - Can produce JSX to show content to the user.
    - Can use Hooks to run code at specific points in time.
    - Can use Hooks to access state system and update content on screen.

  - Class Components (Lifecycle, State System):

    - Can produce JSX to show content to the user.
    - Can use the Lifecycle Method system to run code at specific points in time.
    - Can use the "state" system to update content on the screen.

  - Companies with established projects are using Class-based components.
  - Companies with newer projects may be using Class-based or Function-based components.

- Really Hard:

  - Learn Hooks
  - Learn Redux

- Much Easier:
  - Learn Class Components
  - Learn Hooks
  - Learn Redux

# Application Overview

- Functional Components

  - Good for simple content.

- Class Components

  - Good for just about everything else.

- Benefits of Class Components:

  - Easier code organization.
  - Can use 'state' (another React system).
  - Easier to handle user input.
  - Understands lifecycle events.
  - Easier to do things when the app first starts.

- App Challenges:
  - Need to get the users physical location.
  - Need to determine the current month.
  - Need to change text and styling based on location + month.

# Scaffolding The App

- App (it is winter or summer): Has to determine location + month.
- SeasonDisplay: Shows different text/icons based on props.

# Getting A Users Physical Location

- Geolocation API:
  - developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

# window.navigator.geolocation.getCurrentPosition()

- Is an Async method.
- Gets a GeoLocation object (where the user is long, lat).
- 1st param = success callback
- 2nd param = error callback

window.navigator.geolocation.getCurrentPosition(
(position) => console.log(position),
(err) => console.log(err)
);

# Resetting Geolocation Preferences

- i icon in the browser -> reset permissions.
- blocking acces gives error message in geolocation api.

# Handling Async Operations with Functional Components

- JS file loaded by browser.
- App component gets created.
- We call geolocation service.
- App returns JSX, gets rendered to page as HTML.
- We get result of geolocation!

# Refactoring from Functional to Class Components

- JS file is loaded by browser.
- App component gets created.
- We call geolocation service.
- App returns JSX, gets rendered to page as HTML.
- We get result of geolocation!
- Tell the component to rerender itself with this new information.

- Rules of Class Components:
  - Must be a JavaScript Class
  - Must extend (subclass) React.Component
  - Must define a 'render' method that returns some amount of JSX.

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
render() {
window.navigator.geolocation.getCurrentPosition(
(position) => console.log(position),
(err) => console.log(err)
);

    return <div>Latitude: </div>;

}
}

ReactDOM.render(<App />, document.getElementById("app"));

# The Rules of State

- Only usable with class components (Technically can be used with functional components using the 'hooks' system).
- You will confuse props with state :(
- 'State' in a JS object that contains data relevant to a component.
- Updating 'state' on a component causes the component to (almost) instantly rerender.
- State must only be initialized when a component is created.
- State can only be updated using the function 'setState'.

# Important Note About super(props) Deprecation

-

# Initializing State Through Constructors

- Rules of State
  - Only usable with class components.
  - You will confuse props with state :(
  - 'State' is a JS object that contains data relevant to a component.
  - Updating 'state' on a component causes the component to (almost) instantly rerender.
  - State must be initialized when a component is created.
  - State can only be updated using the function "setState".

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
constructor(props) {
super(props);
this.state = { lat: null }; // we don't know initial state yet
}

// React says we have to define render!
render() {
window.navigator.geolocation.getCurrentPosition(
(position) => console.log(position),
(err) => console.log(err)
);

    return <div>Latitude: </div>;

}
}

ReactDOM.render(<App />, document.getElementById("app"));

# Updating State Properties

- You don't want asyncronous operation in your render function.

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
constructor(props) {
super(props);

    // THIS IS THE ONLY TIME when we do direct assignment
    // to this.state
    this.state = { lat: null }; // we don't know initial state yet

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );

}

// React says we have to define render!
render() {
return <div>Latitude: {this.state.lat}</div>;
}
}

ReactDOM.render(<App />, document.getElementById("app"));

# App Lifecycle Walkthrough

- JS file loaded by browser.
- Instance of App component is created.
- App components 'constructor' function gets called.
- State object is created and assigned to the this.state property.
- We call geolocation service.
- React calls the components render method.
- App returns JSX, gets rendered to page as HTML.
- We get result of geolocation!
- We update our state object with a call to 'this.setState'.
- React sees that we updated the state of a component.
- React calls our 'render' method a second time.
- Render method returns some (updated) JSX.
- React takes that JSX and updates content on the screen.

# Handling Errors Gracefully

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
constructor(props) {
super(props);

    // THIS IS THE ONLY TIME when we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" }; // we don't know initial state yet

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );

}

// React says we have to define render!
render() {
return (

<div>
Latitude: {this.state.lat}
<br />
Error: {this.state.errorMessage}
</div>
);
}
}

ReactDOM.render(<App />, document.getElementById("app"));

# Conditionally Rendering Content

- Have latitude -> No errorMessage -> Show latitude
- No latitude -> Have errorMessage -> Show error
- No latitude -> No errorMessage -> Show "loading"

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
constructor(props) {
super(props);

    // THIS IS THE ONLY TIME when we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" }; // we don't know initial state yet

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );

}

// React says we have to define render!
render() {
if (this.state.errorMessage && !this.state.lat) {
return <div>Error: {this.state.errorMessage}</div>;
}

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;

}
}

ReactDOM.render(<App />, document.getElementById("app"));

# Introducing Lifecycle Methods

- Component Lifecycle:

  - constructor
  - render (content visible on screen)
  - componentDidMount
  - componentDidUpdate (Sit and wait for updates)
  - componentWillUnmount (Sit and wait until this component is not longer shown)

- componentDidMount()

  - Event that happens when the component is rendered for the 1st time.

- componentDidUpdate()
  - Happens when you set the state to something new.

# Why Lifecycle Methods?

- constructor

  - Good place to do one-time setup.

- render

  - Avoid doing anything besides returning JSX.

- componentDidMount

  - Good to do data-loading!

- componentDidUpdate

  - Good place to do more data-loading when state/props change.

- componentWillUnmount

  - Good place to do cleanup (especially for non-React stuff).

- Other lifecycle methods (rarely used):
  - shouldComponentUpdate
  - getDerivedStateFromProps
  - getSnapshotBeforeUpdate

# Refactoring Data Loading to Lifecycle Methods

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
constructor(props) {
super(props);

    // THIS IS THE ONLY TIME when we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" }; // we don't know initial state yet

}

componentDidMount() {
window.navigator.geolocation.getCurrentPosition(
(position) => {
// We called setState
this.setState({ lat: position.coords.latitude });
},
(err) => this.setState({ errorMessage: err.message })
);
}

// React says we have to define render!
render() {
if (this.state.errorMessage && !this.state.lat) {
return <div>Error: {this.state.errorMessage}</div>;
}

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;

}
}

ReactDOM.render(<App />, document.getElementById("app"));

# Alternate State Initialization

- Alternative State
  - Works the same when you define state in the constructor.
  - Needs no constructor
  - state = { lat: null, errorMessage: "" }; // same as this.state in constructor

# Passing State As Props

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
state = { lat: null, errorMessage: "" }; // same as this.state in constructor

componentDidMount() {
window.navigator.geolocation.getCurrentPosition(
(position) => this.setState({ lat: position.coords.latitude }),
(err) => this.setState({ errorMessage: err.message })
);
}

// React says we have to define render!
render() {
if (this.state.errorMessage && !this.state.lat) {
return <div>Error: {this.state.errorMessage}</div>;
}

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;

}
}

ReactDOM.render(<App />, document.getElementById("app"));

--

import React from "react";

const SeasonDisplay = (props) => {
console.log(props.lat);
return <div>Season Display</div>;
};

export default SeasonDisplay;

# Determining Season

import React from "react";

const getSeason = (lat, month) => {
if (month > 2 && month < 9) {
return lat > 0 ? "summer" : "winter";
} else {
return lat > 0 ? "winter" : "summer";
}
};

const SeasonDisplay = (props) => {
const season = getSeason(props.lat, new Date().getMonth());
console.log(season);
return <div>Season Display</div>;
};

export default SeasonDisplay;

# Ternary Expressions in JSX

import React from "react";

const getSeason = (lat, month) => {
if (month > 2 && month < 9) {
return lat > 0 ? "summer" : "winter";
} else {
return lat > 0 ? "winter" : "summer";
}
};

const SeasonDisplay = (props) => {
const season = getSeason(props.lat, new Date().getMonth());
const text =
season === "winter" ? "Burr, it is chilly" : "Let's hit the beach!";

return (

<div>
<h1>{text}</h1>
</div>
);
};

export default SeasonDisplay;

# Icons Not Loading and Cors Errors

- npm install semantic-ui-css
- index.js:
  - import "semantic-ui-css/semantic.min.css";

# Showing Icons

- How to include CSS:
  - Create css in src folder
  - Import css in specific js component
  - import './x.css';

# Showing a Loading Spinner

-

# Specifying Default Props

- defaultProps:
  - When properties are not filled in then show default values.

import React from "react";

const Spinner = (props) => {

  <div className="ui active dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>;
};

// defaultProps = When properties are not filled in then show default values
Spinner.defaultProps = {
message: "Loading...",
};

export default Spinner;

# Avoiding Conditionals in Render

- Don't use if-statements in the render() method.

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
state = { lat: null, errorMessage: "" }; // same as this.state in constructor

componentDidMount() {
window.navigator.geolocation.getCurrentPosition(
(position) => this.setState({ lat: position.coords.latitude }),
(err) => this.setState({ errorMessage: err.message })
);
}

renderContent() {
if (this.state.errorMessage && !this.state.lat) {
return <div>Error: {this.state.errorMessage}</div>;
}

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;

}

render() {
return <div className="border red">{this.renderContent()}</div>;
}
}

ReactDOM.render(<App />, document.getElementById("app"));

# Breather and Review

- Benefits of Class Components:

  - Easier code organization
  - Can use 'state' (another React system)
    - Easier to handle user input.
  - Understands lifecycle events
    - Easier to do things when the app first starts.

- Rules of Class Components

  - Must be a JavaScript Class
  - Must extend (subclass) React.Component
  - Must define a "render" method returns some amount of JSX

- Rules of State

  - Only usable with class components
    - Technically can be used with functional components using the 'hooks' system.
  - You will confuse props with state :(
  - 'State' is a JS object that contains data relevant to a component.
  - Updating 'state' on a component causes the component to (almost) instantly rerender.
  - State must be initialized when a component is created.
  - State can only be updated using the function 'setState'.

- Component Lifecycle

  - constructor
  - render -> content visible on screen.
  - componentDidMount -> when component is rendered 1st time.
  - componentDidUpdate -> when state changes occcur.
  - componentWillUnmount -> removes garbage.

- Other lifecycle methods (rarely used)
  - shouldComponentUpdate
  - getDerivedStateFromProps
  - getSnapshotBeforeUpdate

# App Overview
