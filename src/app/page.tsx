"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const Home = () => {

    const { 
        data: session, 
    } = authClient.useSession() 

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  if(session){
      return (
        <div className="flex flex-col p-4 gap-y">
          <p>Logged in as {session.user.name}</p>
          <Button onClick={()=> authClient.signOut()}>
            Sign Out
          </Button>
        </div>
      )
    }

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
      },
      {
        onSuccess: () => {
          window.alert("Success");
        },
        onError: () => {
          window.alert("something went wrong");
        },
      },
    );
  };

  const onLogin = () => {
    authClient.signIn.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
      },
      {
        onSuccess: () => {
          window.alert("Success");
        },
        onError: () => {
          window.alert("something went wrong");
        },
      },
    );
  };

  return (
    <div>
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>Login</Button>
    </div>
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>Create User</Button>
    </div>
    </div>
  );
};

export default Home;
