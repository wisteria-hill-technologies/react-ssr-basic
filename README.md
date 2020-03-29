# React SSR Basic Wiring
 very basic implementation of Server Side Rendering with Create React App with Express.
 Followed some youtube videos and used main code from the repo below and simplified it for Express.
 
 However, most tutorials do not show how to load static assets and images in ssr.
 
#### Passing Data in initial SSR
- Pass initial data as prop to the App component shared between ui and server.
- can pass data in window object for ui but it will not be rendered in server side because window object does not exist in server. 

#### Accessing static assets and images in SSR
- need to access them using absolute path.
  1. to assets in Html.js file
  2. To publicPath in webpack.config.server.js file.
 
#### Typical Errors with SSR
```/Users/nobuyukifujioka/Documents/noby-coding/progress-maker-ui/node_modules/reactstrap/es/Button.js:1
  import _extends from "@babel/runtime/helpers/esm/extends";
  ^^^^^^
  
  SyntaxError: Cannot use import statement outside a module
```
 - Seen issue with class component where 'state =' instead of 'this.state' in constructor.
 
 - 'document not found': 'document not found' as document or window object does not exist in node.  Add conditional to avoid this error.
 
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
https://medium.com/@madhurgarg/server-side-rendering-in-react-with-css-sass-no-css-in-js-da7b2b7009ff
```
