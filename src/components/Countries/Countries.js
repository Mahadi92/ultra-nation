import React from 'react';
import './Countries.css';

const Countries = (props) => {
    const {flag, name, population} = props.country
    return (
        <div className="country-container">
            <div className="country-box">
                <img width="100px" height="60px" src={flag} alt=""/>
                <h2>{name}</h2>
                <h4>{population}</h4>
                <button onClick={() => props.handleAddBtn(props.country)} className="add-country">Add country</button>
            </div>
        </div>
    );
};

export default Countries;