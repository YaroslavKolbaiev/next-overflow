import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SelectCategoryMenu from '@/components/SelectCategory';
import { addProduct } from '@/lib/actions';
import { ProductInput } from '@/types/enums';
import React from 'react';

const AddProduct = () => {
  return (
    <div className="background-light900_dark200 h-full rounded-md p-4">
      <form action={addProduct} className="mx-auto max-w-md">
        <div className="mt-5 grid md:grid-cols-2 md:gap-6">
          <div className="group relative mb-5 w-full">
            <SelectCategoryMenu />
          </div>
          <FormInput type="text" value={ProductInput.PRODUCT_TITLE} />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput type="number" value={ProductInput.PRICE} />
          <FormInput type="number" value={ProductInput.STOCK} />
        </div>
        <FormInput type="text" value={ProductInput.DESCRIPTION} />
        <FormButton title="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;
