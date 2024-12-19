import React from 'react';

const FormInput = ({ label, type, value, onChange, required }) => {
    return (
        <div className="form-group">
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={label.toLowerCase()}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default FormInput;