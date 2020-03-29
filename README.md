# React SSR Basic Wiring
 very basic implementation of Server Side Rendering with Create React App with Express.
 Followed some youtube videos and used main code from the repo below and simplified it for Express.
 
 However, most tutorials do not show how to load static assets and images in ssr.
 
 ToDo:
 - Investigate how to get api call result included in the initial SSR page load, not after the page is loaded in the browser. 
 
 Update:
 29 March, 2020 - I figured out how to load CRA's static assets and images in ssr.  Now these assets load in ssr.
 
  - added sass and reactstrap to check if they all work with SSR.
   In my old create react app, I keep having the following error, and cannot find a solution but there is no issue with this latest create react app.
```/Users/nobuyukifujioka/Documents/noby-coding/progress-maker-ui/node_modules/reactstrap/es/Button.js:1
  import _extends from "@babel/runtime/helpers/esm/extends";
  ^^^^^^
  
  SyntaxError: Cannot use import statement outside a module
```
 - Also, there is no issue with class component.
 - added Quill editor to check a solution to 'document not found' issue with SSR.
 ```
 var elem = document.createElement('div');
               ^
 ReferenceError: document is not defined
```
 
 

references:
```
https://www.freecodecamp.org/news/demystifying-reacts-server-side-render-de335d408fe4/
https://reactjs.org/docs/react-dom-server.html
https://www.youtube.com/watch?v=NwyQONeqRXA
https://github.com/EddiG/ssr-cra-graphql
https://github.com/zenoamaro/react-quill/issues/122
```
