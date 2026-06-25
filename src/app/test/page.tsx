"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  const a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 100);
  });

  a.then((res) => {
    console.log(res);
  });

  console.log(a, "d");

  return (
    <div className="p-4 flex justify-center text-4xl">
      page
      <Link href="/about">Aboutsss</Link>
    </div>
  );
};

export default page;
