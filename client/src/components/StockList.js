import React, {Component} from 'react';
import Stock from './Stock';
import {connect} from 'react-redux';
import '../styles/stocklist.css';

class StockList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row stock-list">
          {this.props.stocks.map((stock, i) => <Stock key={i} id={stock.id} code={stock.code} description={stock.description}/>)}
          {this.props.stocks.length === 0 && <p>No Stocks!</p>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({stocks: state});

const StockListContainer = connect(mapStateToProps)(StockList);

export default StockListContainer;
