import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/stock.css';

const Stock = ({ code, description, onClick }) => (
  <div className="stock col-sm-4">
    <p className="stock-code">
      <Link to={`/${code}`}>
        {code}
      </Link>
      <span className="float-sm-right" onClick={onClick}>
        <i className="fa fa-times"></i>
      </span>
    </p>
    <p className="stock-description">
      {description}
    </p>
  </div>
)

export default Stock;
