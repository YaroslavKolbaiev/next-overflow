import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import SelectCategoryMenu from '@/components/SelectCategory';
import { editProduct } from '@/lib/actions';
import { fetchProductById } from '@/lib/data';
import { ProductPageProps } from '@/types';
import { ProductInput } from '@/types/enums';
import React from 'react';

const ProductPage = async ({ params: { productId } }: ProductPageProps) => {
  const { title, price, stock, description, category, createdAt } =
    await fetchProductById(productId);

  return (
    <div className="background-light900_dark200 h-full rounded-md p-4">
      <form action={editProduct} className="mx-auto max-w-md">
        <input type="hidden" name="id" value={productId} />
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
        <FormTextArea
          defaultValue={description}
          name={ProductInput.DESCRIPTION}
          id="description"
        />
        <FormButton title="Update" />
      </form>
    </div>
  );
};

export default ProductPage;
