import React from 'react';
import './button.css';

//props describes an object
export const Button =(props)=> (
<div>
<button className ={props.isPrimary ? "primary" : "secondary"}>Click me</button>
<div>my Div</div>
</div>
  //<button className ="button">click me</button>
);

//*full version
//const Button = () => {
  //return (
    //<button>click me</button>
  //)
//}


//*long version of if statement
//let x ;
//if (2>3) {
//  x=1;
//}else {
  //x=2
//;}

//*short version of if statement
// if 1 is true display, is 1 is fault display 2
//let x = 2>3 ? 1:2
