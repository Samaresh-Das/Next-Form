import React, { Fragment } from "react";

const Input = ({ type, id, placeholder, htmlfor, label }) => {
  return (
    <Fragment>
      <label
        className="block text-gray-700 text-[15px] font-medium mb-2"
        htmlFor={htmlfor}
      >
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </Fragment>
  );
};

export default Input;
