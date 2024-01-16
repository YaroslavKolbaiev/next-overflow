import { SignIn, ClerkLoading } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="
          background-light900_dark200
          text-dark200_light800
          rounded-md
          p-4
        "
      >
        <h1 className="text-lg font-semibold">
          Welcome to NextAdmin portfolio application
        </h1>
        <p className="py-3 text-lg">
          In order to limit number of admins please use bellow credentials.
          <br />
          You may sign-up, but application will not give an access to new admin.
        </p>
        <p>
          <span className="font-semibold">email:</span> jedij69199@aseall.com
        </p>
        <p>
          <span className="font-semibold">password:</span> 5YGwVCpEEZU7
        </p>
      </div>
      <SignIn />
    </div>
  );
}
