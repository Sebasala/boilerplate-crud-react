import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input value={props.input} onChange={props.inputChange} />
            <textarea name="textarea" id="textarea" rows="10" onChange={props.textareaChange} value={props.textarea}></textarea>
            <button type="submit">Crear</button>
        </form>
    );
};

Form.propTypes = {
    input: PropTypes.string,
    inputChange: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Form;