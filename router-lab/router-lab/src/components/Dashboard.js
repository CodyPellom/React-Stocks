import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Dashboard</h3>
                {this.state.stockData.map((stock, index) => {
                    return (
                        <div key={index}>

                <h1>Here is the stock breakdown:</h1>
                <h4>Name:{stock.name}</h4>
                <h4>Symbol:{stock.symbol}</h4>
                <h4>Last Price:{stock.last.price}</h4>
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