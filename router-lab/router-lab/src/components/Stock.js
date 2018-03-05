import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Stock extends Component {
    render() {
        return (
            <div>
                <h3>Stock</h3>
                {this.props.stockData.map((stock, index)=>{
                    return (
                        <div key={index}>
                        <Link to='/stocks/:symbol'>{stock.name} </Link>
                        <br/>
                        {stock.symbol}
                        
                        </div>) 
                })}
            </div>
        );
    }
}

export default Stock;