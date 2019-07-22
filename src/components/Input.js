import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    return (
        <input value={props.value} onChange={props.onChange} />
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;