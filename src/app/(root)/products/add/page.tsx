import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SelectMenu from '@/components/Select';
import React from 'react';

const AddProduct = () => {
  return (
    <div className="background-light900_dark200 rounded-md p-4">
      <form className="mx-auto max-w-md">
        <div className="mt-5 grid md:grid-cols-2 md:gap-6">
          <div className="group relative mb-5 w-full">
            <SelectMenu />
          </div>
          <FormInput value="Title" />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput value="Price" />
          <FormInput value="Stock" />
        </div>
        <FormInput value="Description" />
        <FormButton />
      </form>
    </div>
  );
};

export default AddProduct;
