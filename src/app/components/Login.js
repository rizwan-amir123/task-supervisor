"use client"
import { useState } from "react";
export default function Login({src}) {
    const [emailLogin, setEmail] = useState("");
    const [passwordLogin, setPassword] = useState("");

    const handlePasswordLoginInput = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailLoginInput = (e) => {
      setEmail(e.target.value);
    };

    const handleLoginSubmit = () => {
        if (emailLogin === "" || passwordLogin === "") {
          alert("A field value is empty");
          return;
        }
        const postLoginData = async() => {
          const data = {
            email: emailLogin,
            password: passwordLogin
          };
          const response = await fetch("http://localhost:8080/api/auth/signin", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            }
          }).catch((e) => console.log(e));
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          else {
            console.log("Login Successful!");
          }

          return response.json();
        };
        postLoginData();
    }

    return (
    <section className="min-h-screen bg-gradient-to-r from-cyan-500 to-lime-400 px-5 text-white py-32" id="login">
    <div className="grid md:grid-cols-2 items-center justify-center md:justify-between">
    <form className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-lg font-semibold text-blue-950 
            mb-2" htmlFor="emailLogin">
            Email
        </label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        id="emailLogin" type="text" placeholder="abc@xyz.com" value={emailLogin}
        onChange={(e) => handleEmailLoginInput(e)}>
        </input>
        </div>
        <div className="mb-6">
        <label className="block text-lg font-semibold text-blue-950 
             mb-2" htmlFor="passwordLogin">
            Password
        </label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        id="passwordLogin" type="password" placeholder="*****" value={passwordLogin}
        onChange={(e) => handlePasswordLoginInput(e)}>
        </input>
        </div>
        <div className="flex items-center justify-items-start">
        <button onClick={() => handleLoginSubmit()}  className="mr-8 bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400" type="button">
            Sign In
        </button>
        <a className="ml-10 pl-3 inline-block align-baseline font-bold text-md text-blue-950 hover:text-blue-800" href="#">
            Forgot Password?
        </a>
        </div>
        <div className="flex">
        <p className="text-center text-gray-700 my-4 text-md justify-center">
        Not a member yet? <a className="text-blue-950 underline font-semibold" href="/signup">Sign Up</a> here.
        </p>
        </div>

    </form>
    <div className="w-lg">
    <img
            src={src.src}
            alt="coding illustration"
            className="max-w-xl w-lg h-auto mx-auto"
            
    />
    </div>
    </div>
    </section>
);
};