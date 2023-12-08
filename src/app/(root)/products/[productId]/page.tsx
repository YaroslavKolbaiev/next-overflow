import SelectMenu from '@/components/Select';
import UserFormInput from '@/components/UserFormInput';
import React from 'react';

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = ({ params: { productId } }: Props) => {
  return (
    <div className="background-light900_dark200 rounded-md p-4">
      <div className="mx-auto max-w-md">
        <div className="group relative mb-5 w-full">
          <SelectMenu />
        </div>
        <UserFormInput value="Title" placeholder="Iphone, Sumsung ..." />
        <UserFormInput value="Price" placeholder="500 USD" />
        <UserFormInput value="Stock" placeholder="20" />
        <div className="mb-5">
          <label
            htmlFor="Address"
            className="formText-gray600_gray400
            mb-2
            block
            text-sm
            font-medium
          "
          >
            Adress
          </label>
          <textarea
            id="Address"
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
        <button
          className="primary-gradient
          btn-hover_active
          w-full
          rounded-md
          p-2
          text-light-800
        "
          type="button"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
