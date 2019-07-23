import React from 'react';
import PropTypes from 'prop-types';

import Input from "./Input";

const Form = props => {
    return (
        <form>
            <Input value={props.input} onChange={props.inputChange} />
        </form>
    );
};

Form.propTypes = {
    input: PropTypes.string,
    inputChange: PropTypes.func
};

export default Form;