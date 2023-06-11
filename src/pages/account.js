import { useSession, signOut } from "next-auth/react";
import React from "react";

const Account = () => {
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <div>
        <h1>Welcome {session.user.name}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    );
  }
};
export default Account;
