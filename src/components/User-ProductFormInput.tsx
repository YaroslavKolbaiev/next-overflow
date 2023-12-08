import React from 'react';

type Props = {
  value: string;
  placeholder: string;
};

const FormInput = ({ value, placeholder }: Props) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={value}
        className="formText-gray600_gray400
          mb-2
          block
          text-sm
          font-medium
        "
      >
        {value}
      </label>
      <input
        type="text"
        id={value}
        className="border-gray300_dark600
          text-dark200_light800
          block
          w-full
          rounded-lg
          border
          border-gray-300
          bg-transparent
          p-2.5
          text-sm
          text-gray-900
          focus:border-primary-500
          focus:outline-none
          focus:ring-0
          dark:focus:border-primary-500
        "
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
