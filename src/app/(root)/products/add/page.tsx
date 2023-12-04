import FormInput from '@/components/FormInput';
import SelectMenu from '@/components/Select';
import React from 'react';

const AddProduct = () => {
  return (
    <div className="background-light900_dark200 rounded-md p-4">
      <form className="mx-auto max-w-md">
        <div className="mt-5 grid md:grid-cols-2 md:gap-6">
          <FormInput value="Title" />
          <div className="group relative z-0 mb-5 w-full">
            <SelectMenu />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput value="Price" />
          <FormInput value="Stock" />
        </div>
        <FormInput value="Description" />
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
