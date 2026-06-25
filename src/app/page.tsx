"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { authClient } from "@/lib/auth-client";

const Home = () => {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      await authClient.signUp.email(
        {
          email,
          password,
          name,
        },
        {
          onError: (error) => {
            console.error("Error creating user:", error);
          },
          onSuccess: () => {
            console.log("User created successfully");
          },
        },
      );
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const onLogin = async () => {
    try {
      await authClient.signIn.email(
        {
          email,
          password,
        },
        {
          onError: (error) => {
            console.error("Error creating user:", error);
          },
          onSuccess: () => {
            console.log("User logined successfully");
          },
        },
      );
    } catch (error) {
      console.error("Error login user:", error);
    }
  };

  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <p>You are already logged in.</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4 p-4">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" onClick={() => onSubmit()}>
          Create User
        </Button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" onClick={() => onLogin()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
