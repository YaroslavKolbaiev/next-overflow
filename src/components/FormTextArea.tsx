import { FormTextAreaProps } from '@/types';
import React from 'react';

const FormTextArea = ({ defaultValue, name, id }: FormTextAreaProps) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="Address"
        className="formText-gray600_gray400
          mb-2
          block
          text-sm
          font-medium
          capitalize
        "
      >
        {name}
      </label>
      <textarea
        defaultValue={defaultValue}
        name={name}
        id={id}
        className="border-gray300_dark600
          text-dark200_light800
          block
          min-h-[140px]
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
      />
    </div>
  );
};

export default FormTextArea;
