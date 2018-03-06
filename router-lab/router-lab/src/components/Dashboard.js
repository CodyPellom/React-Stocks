import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Dashboard</h3>
                {this.props.stockData.map((stock, index) => {
                    return (
                        <div key={index}>

                <h1>Here is the stock breakdown:</h1>
                <Link to={`/stocks/${stock.symbol}`}><h4>Name:{stock.name}</h4></Link>
                <Link to={`/stocks/${stock.symbol}`}><h4>Symbol:{stock.symbol}</h4></Link>
                <h4>Last Price:{stock.lastPrice}</h4>
                <h4>Change:{stock.change}</h4>
                <h4>High:{stock.high}</h4>
                <h4>Low:{stock.low}</h4>
                <h4>Open:{stock.open}</h4>
                        
                        </div>)
                    
                })}

            </div>
        );
    }
}

export default Dashboard;