import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="flex justify-center items-center flex-col gap-4">
        <div>Welcome, {session.user.email}</div>
        <img src={session.user.image} />
        <button
          className="border-2 border-black py-4 px-16"
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col gap-4">
        <p>You are not signed in.</p>
        <button
          className="border-2 border-black py-4 px-16"
          onClick={() => signIn()}
        >
          SignIn
        </button>
      </div>
    );
  }
};
export default Login;
