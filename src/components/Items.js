import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

const Items = props => {
    return (
        <ul className="Items">
            {props.items.map(item => <Item title={item.title} description={item.description} /> )}
        </ul>
    );
};

Items.propTypes = {
    items: PropTypes.array
};

export default Items;