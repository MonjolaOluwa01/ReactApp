 React Hooks & JavaScript HTML DOM
Modern web development combines JavaScript’s HTML DOM for understanding how web pages work under the hood, and React hooks for building scalable, maintainable user interfaces without manual DOM manipulation.
HTML DOM & document Object
The HTML DOM (Document Object Model) represents a web page as a tree of objects.
The document object is the root and owner of all elements in the page.
To access or manipulate any element in HTML, JavaScript starts with document.
DOM Capabilities
Using the document object, JavaScript can:
Find elements (by id, tag name, class name, selectors)
Change elements (content, attributes, styles)
Create, add, remove, or replace elements
These operations allow direct, manual control of the web page structure and appearance.
Finding HTML Elements
Before manipulating elements, they must be selected from the DOM.
Common methods include:
document.getElementById() → finds a single element by ID
document.getElementsByTagName() → finds elements by tag
document.getElementsByClassName() → finds elements by class
Searching within a specific parent element for scoped access
If an element is not found, the result is null or an empty collection.
React’s Approach vs Direct DOM Manipulation
While vanilla JavaScript directly manipulates the DOM, React abstracts this process:
React maintains a Virtual DOM
Developers describe what the UI should look like
React determines how to update the real DOM efficiently
As a result, direct DOM methods are rarely used in React applications, except in special cases.
React Hooks (State, Effects, Performance, and Sharing Data)
Core Hooks
useState
Manages local component state and triggers re-renders when updated.
useEffect
Handles side effects such as API calls, subscriptions, and DOM interactions.
useRef
Creates persistent references to DOM elements or values without causing re-renders.
Performance Hooks
useCallback
Prevents unnecessary recreation of functions passed to child components.
useMemo
Memoizes expensive calculations to avoid redundant computation.
State Sharing & Complexity
useContext
Shares data across multiple component levels without prop drilling.
useReducer
Manages complex state logic using predictable reducer functions.
Big Picture
The DOM explains how web pages are structured and manipulated
The document object is the gateway to all HTML elements
React hooks provide a modern, declarative way to manage state, side effects, performance, and shared data
React minimizes direct DOM manipulation, making applications more predictable, efficient, and easier to maintain
The DOM teaches how the browser works; React hooks teach how to build scalable UIs without fighting it.
