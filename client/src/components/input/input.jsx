import React from 'react';

// all distructured props is interface of our component
const Input = ({ name, label, value, error, onChange }) => {
    return (
        <div className="form-group"><label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                type="text"
                className="form-control mt-1 mb-3" />
            {error && <div className="alert alert-danger p-2">{error}</div>}
        </div>
    );
}

export default Input;