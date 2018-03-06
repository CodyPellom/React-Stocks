import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Stock extends Component {
    render() {

        const id = this.props.match.params.symbol
        console.log(id)

        const stock = this.props.stockData
        console.log(stock)

        const singleid = stock.filter((stock) => { stock.symbol === id })
        console.log(singleid)

        return (
            <div>
                <h3>{singleid[0].name}</h3>

            </div>
        );
    }
}

export default Stock;