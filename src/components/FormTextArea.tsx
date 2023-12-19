import { FormTextAreaProps } from '@/types';
import { ProductInput } from '@/types/enums';
import React from 'react';

// new TS way of providing type safety for conditional props
const FormTextArea = (props: FormTextAreaProps) => {
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
        {props.name}
      </label>
      <textarea
        defaultValue={
          props.name === ProductInput.DESCRIPTION ? props.defaultValue : ''
        }
        name={props.name}
        id={props.id}
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
        required
      />
    </div>
  );
};

export default FormTextArea;
