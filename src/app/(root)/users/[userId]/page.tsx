import React from 'react';
import Image from 'next/image';
import FormInput from '@/components/FormInput';
import { UserInput } from '@/types/enums';
import { UserPageProps } from '@/types';

const UserPage = ({ params: {userId} }: UserPageProps ) => {
  return (
    <div className="grid gap-4 md:grid-cols-6">
      <div className="background-light900_dark200 flex h-fit flex-col rounded-md p-4 md:col-span-2">
        <figure
          className="relative
            h-40
            w-full
            rounded-md
            bg-slate-600
            md:h-28
            lg:h-48
          "
        >
          <Image src="/assets/icons/account.svg" alt={userId} fill={true} />
        </figure>
        <p className="text-dark200_light800">ID: {userId}</p>
      </div>
      <div className="background-light900_dark200 rounded-md p-4 md:col-span-4">
        <FormInput name={UserInput.USER_NAME} type="text" />
        <FormInput name={UserInput.EMAIL} type="email" />
        <FormInput name={UserInput.PASSWORD} type="password" />
        <FormInput name={UserInput.PHONE} type="text" />
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

export default UserPage;
