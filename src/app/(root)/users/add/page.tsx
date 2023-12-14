import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { addUser } from '@/lib/actions';
import { AddUserInput } from '@/types/enums';
import React from 'react';

const AddUser = () => {
  return (
    <div className="background-light900_dark200 h-full rounded-md p-4">
      <form action={addUser} className="mx-auto mt-20 max-w-md">
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput value={AddUserInput.USER_NAME} />
          <FormInput value={AddUserInput.EMAIL} />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput value={AddUserInput.PASSWORD} />
          <FormInput value={AddUserInput.PHONE} />
        </div>
        <FormInput value={AddUserInput.ADRESS} />
        <FormButton />
      </form>
    </div>
  );
};

export default AddUser;
