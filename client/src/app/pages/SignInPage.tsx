import { SignIn } from "@clerk/clerk-react";

export function SignInPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
