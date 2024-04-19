import React from 'react';

const CustomInput = ({ initialValue, type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={initialValue}
      style={{ color: 'red' }}
    />
  );
};

export default CustomInput;
