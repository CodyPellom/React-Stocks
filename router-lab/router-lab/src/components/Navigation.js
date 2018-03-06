import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const navStyle = styled.div`
border: solid;
background-color: gray;
width: 75px;
height: 100px;
h3 {
    color: whitesmoke;
}
`

class Navigation extends Component {
    render() {
        return (
            <div>
                <navStyle>
               <h3>React Router Lab</h3> 
               <Link to="/">Home</Link>
               <br/><br/>
               <Link to="/About">About</Link>
               <br/><br/>
               <Link to="/Stocks">Stocks</Link>
               </navStyle>
            </div>
        );
    }
}

export default Navigation;