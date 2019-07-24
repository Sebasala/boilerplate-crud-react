import React from 'react';
import PropTypes from 'prop-types';

import Input from "./Input";

const Form = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input value={props.input} onChange={props.inputChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

Form.propTypes = {
    input: PropTypes.string,
    inputChange: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Form;