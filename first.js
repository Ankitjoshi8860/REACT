import React from "react";

// how to create element in react
const element =  React.createElement("h1",{id:"first",className:"ankit", style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"hello coder army");
const element2 =React.createElement("h2",{id:"second",className:"ankit", style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"maja aaya mujhe");
const div1 =React.createElement("div",{},[element,element2]);

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(element); 
// Reactroot.render(element2); 
// why it is not showing "hello coder army"??
// because react works like this only.
// because when you render the element inside the "root", it will clean up the entire previous child of div id = "root" 
// and then the new element will be placed inside the "root".

// how you can render multiple elements inside the screen??
// {/* <div> h1 h2 </div> */}
// we will do it because hum 1 single element ko ek bar m "root" k andaar 
// render kar sakte hai.

Reactroot.render(div1); 

// how to make this below using react ??
// making this can be tough using react
//  <div>
//     <div>
//         <h1>
//             <p></p>
//         </h1>
//     </div>
// </div> 

// so you can write code in js like this also.
// this will not be the part of the react
// we are adding additional functionality to the react.
//  <div>
//     <div>
//         <h1>
//             <p></p>
//         </h1>
//     </div>
// </div>  

// this is know as JSX
// html jaise code js m likh sakte hai
// JSX says you can write the html code in the js and jsx will convert it into the React.


// but how to make it without the help of the jsx??
