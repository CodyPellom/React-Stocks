###React styling with CSS/React

Sometimes, the css we write in react can overwrite other css functions, because of the cascading uni-directional flow of reaact documents and coding. 

Global Variables:
If you have a variable that is availble to eery single function, you may cause a function to spit out something dif every time, It is a weakness, so put a style into a function to protct your data.

Sepeeration f Concern: instead o the trad way of JS/HTML/CSS. In one component youll  have all three. making the componet as small as possible makes things more undertandble for everyone involved.

in order to do this we use in line styles. We bring in inline styles into css. Using the classname syntax in clunky and convoluted. So inline styles in much asier, and someone even came up with style components. 
*****************************************************************
import React, { Component } from 'react';


class Button extends Component{
  render(){
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "inline-block",
      backgroundColor: "#55acee",
      boxShadow: "0px 5px 0px 0px #3C93D5"
    };

    return (
      <a href="#" style={buttonStyles}>
        Click Me
      </a>
    )
  }
}

export default Button;
***************************************************************
^{An example of an inline styling component}

"This." is referring to "Button". this displays some of the weaknesses around react styling. Overly complex VJS styling the dom. while using a traditional kethod with a linked stylesheet may have been a better choice. The synthetic events are awesome as they are concered with dynamic and interactivity. onClick, doubleClick, onDrag etc assist in creating very dynamic pages, and apps.

styled-components is an NPM package for easily styling react documents. 

Styled coponents must be declared as a const and much be declared above the 'class App extends Component'. This is the ontl  way for the css chages to take effects after downloading the styled-compnents.

This styling is very specific and keeps the data safe


using const ErrorBUtton = Button.Extend` will EXTEND "BUtton"; so whatever "Button" had, decalaring a style wth an original parent and all its attirbutes,  and whatever you declare within the extension will apply the data to ErrorButton + the Button attribute.

const Button = styled.a`;
background-color: black,
color: white,
font-family: 'Lobster'
`

THEN  

const ErrorButton = button.extend`
(this will have background-color, color, and font family)
+ 
text-decoration:underline,
text-decoration-color: white
`
*****************************************************************

###Syntax of Styled```

Backticks (`) MUST BE AFTER the declartation of intent on the opening line. and AFTER the last line. Without the BAckticks, this RECT  CSS will not work. At all. 

Example =
*****************************************************************
Animation:

const RotatingDiv = styled.div`
    animation: ${rotate360} 2s infinite;
*****************************************************************

### Exporting:

export {
    ErrorButton
    Button
    EnterButton
}


O R


export const ErrorButton = styled.a`

backgroun-color:  pink,
background-image: url("#hlhkjhkjhkhkhkhkhk")
`

###Importing:

import {ErrorButton, Button, EnterButon} from './components/etc



or the single import method

<>******************************************************<>
###More Animation Examples:

Npm i react-animations
npm start
& T H E N
import {pulse] from 'react-animations'
     
     const PulsingDiv = styled.div`

     animation: {$pulseAnimation} 2s inifinte;
     `


     This will create a cool pulsing effect
<>************      *****************************************<>

IMPOrting libraries:

it is necessary to go ahead and download a library to use in Reaact:

https://react.semantic-ui.com/usage

there is the documentation for downloading andimporting a library



