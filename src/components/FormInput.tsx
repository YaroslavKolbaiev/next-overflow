import React from 'react';

const FormInput = ({ value }: { value: string }) => {
  return (
    <div className="group relative z-0 mb-5 w-full">
      <input
        type="text"
        name={value}
        id={value}
        className="text-dark200_light800
          peer
          block 
          w-full 
          appearance-none 
          border-0 
          border-b-2 
          border-gray-300 
          bg-transparent 
          px-0 
          py-2.5 
          text-sm 
          focus:border-primary-500
          focus:outline-none
          focus:ring-0 
          dark:border-gray-600 
          dark:focus:border-primary-500
        "
        placeholder=" "
        required
      />
      <label
        htmlFor={value}
        className="absolute
          top-3 
          -z-10 
          origin-[0] 
          -translate-y-6 
          scale-75 
          text-sm 
          text-gray-500 
          duration-300 
          peer-placeholder-shown:translate-y-0 
          peer-placeholder-shown:scale-100 
          peer-focus:start-0 
          peer-focus:-translate-y-6 
          peer-focus:scale-75 
          peer-focus:font-medium 
          peer-focus:text-primary-500 
          rtl:peer-focus:translate-x-1/4 
          dark:text-gray-400 
        "
      >
        {value}
      </label>
    </div>
  );
};

export default FormInput;
