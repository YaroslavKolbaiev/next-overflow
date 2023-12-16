import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SelectCategoryMenu from '@/components/SelectCategory';
import { editProduct } from '@/lib/actions';
import { fetchProductById } from '@/lib/data';
import { ProductPageProps } from '@/types';
import { ProductInput } from '@/types/enums';
import React from 'react';

const ProductPage = async ({ params: { productId } }: ProductPageProps) => {
  const { id, title, price, stock, description, category } =
    await fetchProductById(productId);

  return (
    <div className="background-light900_dark200 h-full rounded-md p-4">
      <form action={editProduct} className="mx-auto max-w-md">
        <input type="hidden" name="id" value={id} />
        <div className="group relative mb-5 w-full">
          <SelectCategoryMenu defaultValue={category} />
        </div>
        <FormInput
          name={ProductInput.PRODUCT_TITLE}
          type="text"
          defaultValue={title}
        />
        <FormInput
          name={ProductInput.PRICE}
          type="number"
          defaultValue={price}
        />
        <FormInput
          name={ProductInput.STOCK}
          type="number"
          defaultValue={stock}
        />
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
            defaultValue={description}
            name={ProductInput.DESCRIPTION}
            id="Description"
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
        <FormButton title="Update" />
      </form>
    </div>
  );
};

export default ProductPage;
