"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function page() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  let router = useRouter();

  // function to handle admin login
  const handleAdminLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      let response = await axios.post("/api/admin/login", loginData);

      if (response.data.success) {
        router.push("/admin/dashboard");
      } else {
          toast.error("Invalid admin details");
      }
    } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleAdminLogin}
        className="border p-4 rounded-md flex flex-col gap-6 w-1/4"
      >
        <h2 className="text-center text-3xl font-semibold my-4">Admin Login</h2>
        <Input
          placeholder="username"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <Input
          placeholder="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default page;
