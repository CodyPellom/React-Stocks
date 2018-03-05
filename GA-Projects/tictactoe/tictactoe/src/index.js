import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {


    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}  {/*  2. Props sends down value to Square, the  props are being passed down, and info can't be passed upwards. THis also, by granting access to the numbered game board enables the numbers to be displayed via DOM 4. we set the state, so now we change this.props to this.state*/}
        </button>             
      );
    }
  }
  
  class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
      };
    
    renderSquare(i) {
      return <Square                            //7. two props have been passed down, value and square.
      value={this.state.squares[i]}             //6. handle click is about to be created, so ithas been prepped here on ine down
      onClick={() => this.handleClick(i)}/>;   //1. i is the index//the square component will now have access to i //5. changed the value=i to valu = this.state. nefore we were hard coding the squares, but now we are saying this square has the index of i
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  