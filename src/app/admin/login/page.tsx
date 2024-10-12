"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function AdminLogin() {
  const router = useRouter();
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const handleAdminLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      // validate the username and password
      if (admin.username.trim() === "" || admin.password.trim() === "") {
        toast.error("Invalid inputs");
        return;
      }

      // validate the credentials
      let response = await axios.post("/api/admin/login", admin);

      if (response.data.success) {
        router.push('/admin/dashboard');
      } 
      
    } catch (error: any) {

      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
      console.log(error.message);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <form
        className="w-96 mx-auto border rounded-md p-8 shadow-md"
        onSubmit={handleAdminLogin}
      >
        <h1 className="text-3xl text-center font-semibold mb-8">Admin Login</h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            username
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="something@gmai.com"
            value={admin.username}
            onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
