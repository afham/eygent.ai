"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <p>You are already logged in.</p>
        <Button
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/sign-in");
                },
              },
            })
          }
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return <div className="flex flex-col gap-2">Dashboard</div>;
};

export default HomeView;
