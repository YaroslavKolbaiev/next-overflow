import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { addUser } from '@/lib/actions';
import { UserInput } from '@/types/enums';
import React from 'react';

const AddUser = () => {
  return (
    <div className="background-light900_dark200 h-full rounded-md p-4">
      <form action={addUser} className="mx-auto mt-20 max-w-md">
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput type="text" value={UserInput.USER_NAME} />
          <FormInput type="email" value={UserInput.EMAIL} />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput type="password" value={UserInput.PASSWORD} />
          <FormInput type="text" value={UserInput.PHONE} />
        </div>
        <FormInput type="text" value={UserInput.ADRESS} />
        <FormButton title="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
