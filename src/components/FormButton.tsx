import React from 'react';

const FormButton = () => {
  return (
    <button
      type="submit"
      className="primary-gradient
        btn-hover_active
        rounded-md
        px-3
        py-2
        text-sm
        text-light-800
        max-md:w-full
      "
    >
      Submit
    </button>
  );
};

export default FormButton;
