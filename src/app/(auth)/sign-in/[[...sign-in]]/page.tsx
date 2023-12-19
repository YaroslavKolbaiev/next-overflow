import { SignIn } from '@clerk/nextjs';

// start from here
// inform that this is a sign in page and explain about credentials
// remove '/' from allowed pages
// delete social providers
// allow only single user

export default function Page() {
  return <SignIn />;
}
