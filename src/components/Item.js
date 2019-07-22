import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <li className="Item">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default Item;