import React from 'react';
import Image from 'next/image';
import FormInput from '@/components/FormInput';
import { UserInput } from '@/types/enums';
import { UserPageProps } from '@/types';
import FormButton from '@/components/FormButton';
import FormTextArea from '@/components/FormTextArea';
import { fetchUserById } from '@/lib/data';
import { editUser } from '@/lib/actions';

const UserPage = async ({ params: { userId } }: UserPageProps) => {
  const { userName, email, phone, adress } = await fetchUserById(userId);

  return (
    <div className="grid h-full gap-4 md:grid-cols-6">
      <div className="background-light900_dark200 flex h-fit flex-col rounded-md p-4 md:col-span-2">
        <h2 className="text-dark200_light800 mb-4 text-center font-bold">
          User Info
        </h2>
        <p className="text-dark200_light800">
          <span className="text-dark400_light500 font-semibold">
            User Name:
          </span>{' '}
          {userName}
        </p>
        <p className="text-dark200_light800">
          <span className="text-dark400_light500 font-semibold">E-Mail:</span>{' '}
          {email}
        </p>
        <p className="text-dark200_light800">
          <span className="text-dark400_light500 font-semibold">Phone:</span>{' '}
          {phone}
        </p>
        <p className="text-dark200_light800">
          <span className="text-dark400_light500 font-semibold">Adress:</span>{' '}
          {adress}
        </p>
      </div>
      <form
        action={editUser}
        className="background-light900_dark200 rounded-md p-4 md:col-span-4"
      >
        <input type="hidden" name="id" value={userId} />
        <FormInput name={UserInput.USER_NAME} type="text" />
        <FormInput name={UserInput.EMAIL} type="email" />
        <FormInput name={UserInput.PHONE} type="text" />
        <FormTextArea name={UserInput.ADRESS} id="address" />
        <FormButton title="Update" />
      </form>
    </div>
  );
};

export default UserPage;
