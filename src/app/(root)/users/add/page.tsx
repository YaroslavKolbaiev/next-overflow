import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import React from 'react';

const AddUser = () => {
  return (
    <div className="background-light900_dark200 rounded-md p-4">
      <form className="mx-auto max-w-md">
        <div className="mt-5 grid md:grid-cols-2 md:gap-6">
          <FormInput value="Username" />
          <FormInput value="E-Mail" />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput value="Password" />
          <FormInput value="Phone" />
        </div>
        <FormInput value="Adress" />
        <FormButton />
      </form>
    </div>
  );
};

export default AddUser;
