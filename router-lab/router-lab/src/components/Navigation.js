import React, { Component } from 'react';
import { Link } from 'react-router-dom'




class Navigation extends Component {
    render() {
        return (
            <div>
               <h3>React Router Lab</h3> 
               <Link to="/">Home</Link>
               <br/><br/>
               <Link to="/About">About</Link>
               <br/><br/>
               <Link to="/Stocks">Stocks</Link>
            </div>
        );
    }
}

export default Navigation;