import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SelectCategoryMenu from '@/components/SelectCategory';
import { editProduct } from '@/lib/actions';
import { ProductInput } from '@/types/enums';
import React from 'react';

// continue from here !!!!!!!!!!!!
// show values from product instead of input
// change FormInput value prop to name prop
// maybe consider to change FormInput to ProdFormInput with value from DB

const ProductPage = () => {
  return (
    <div className="background-light900_dark200 h-full rounded-md p-4">
      <form action={editProduct} className="mx-auto max-w-md">
        <div className="group relative mb-5 w-full">
          <SelectCategoryMenu />
        </div>
        <FormInput value={ProductInput.PRODUCT_TITLE} type="text" />
        <FormInput value={ProductInput.PRICE} type="number" />
        <FormInput value={ProductInput.STOCK} type="number" />
        <div className="mb-5">
          <label
            htmlFor="Description"
            className="formText-gray600_gray400
              mb-2
              block
              text-sm
              font-medium
            "
          >
            Description
          </label>
          <textarea
            name={ProductInput.DESCRIPTION}
            id="Description"
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
          />
        </div>
        <FormButton title="Update" />
      </form>
    </div>
  );
};

export default ProductPage;
