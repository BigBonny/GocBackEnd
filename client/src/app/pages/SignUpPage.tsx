import { SignUp } from "@clerk/clerk-react";

export function SignUpPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
