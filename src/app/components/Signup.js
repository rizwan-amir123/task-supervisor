"use client"
//import { redirect } from 'next/navigation';
import { useState, useEffect } from "react";

export default function SignUp({src}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNameInput = (e) => {
      setName(e.target.value);
    };
    const handleEmailInput = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleGoogleLogin = () => {
      
      const getData = async() => {
        const response = await fetch("http://localhost:8080/auth/google")
        .catch((e) => console.log(e));
        console.log("hello");
        //return response.json();
        //return 
      };
      getData();
    }

    const handleGithubLogin = async () => {
      try {
        const response = await fetch('http://localhost:8080/auth/github');
        if (response.ok) {
          window.location.href = data.redirect;
        } else {
          console.error('Error during login:', response.status, data);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
      /*
      const getData = async() => {
        const response = await fetch("http://localhost:8080/auth/github")
        .catch((e) => console.log(e));
        //console.log(response.json());
        //return response.json();
        //return 
      };
      getData();
      */
      //window.location.href = 'http://localhost:8080/auth/github';
      //console.log("hello");
    
     //redirect('https://github.com/login/oauth/authorize?client_id=88da0cb4bb8c367f0417&redirect_uri=http://localhost:8080/oauth/redirect');
    //}
    const handleSubmit = () => {
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
          alert("A field value is empty");
          return;
        }

        const postData = async() => {
          const data = {
            username: name,
            email: email,
            password: password,
            roles: ["user"]
          };
          const response = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            }
          }).catch((e) => console.log(e));
          return response.json();
        };
        postData();
    }
    return (
    <section className="bg-gradient-to-r from-cyan-500 to-lime-400 px-5 text-white pt-5" id="login">
      
    <div className="grid md:grid-cols-2 items-center justify-center md:justify-between">
    <form className="px-8 pt-10 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-md font-semibold text-blue-950 
            mb-2" htmlFor="fullname">
            Full Name
        </label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        id="fullname" type="text" placeholder="John Smith" value={name}
        onChange={(e) => handleNameInput(e)}>
        </input>
        </div>
        <div className="mb-6">
        <label className="block text-md font-semibold text-blue-950 
             mb-2" htmlFor="email">
            Email
        </label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        id="email" type="text" placeholder="abc@xyz.com" value={email}
        onChange={(e) => handleEmailInput(e)}>
        </input>
        </div>
        <div className="mb-6">
        <label className="block text-md font-semibold text-blue-950 
             mb-2" htmlFor="password">
            Password
        </label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        id="password" type="password" placeholder="*****"  value={password}
        onChange={(e) => handlePasswordInput(e)}>
        </input>
        </div>
        <div className="mb-6">
        <label className="block text-md font-semibold text-blue-950 
             mb-2" htmlFor="confirm_password">
            Confirm Password
        </label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        id="confirm_password" type="password" placeholder="*****" value={confirmPassword}
        onChange={(e) => handleConfirmPasswordInput(e)}>
        </input>
        </div>

        <div className="flex items-center justify-start space-x-4">
        <button onClick={() => handleSubmit()}  className="bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400" type="button">
            Sign Up
        </button>
        {/*
        <a href="http://localhost:8080/auth/github" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">google</span>
        </a>
        <a href="https://github.com/login/oauth/authorize?client_id=88da0cb4bb8c367f0417" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">github</span>
        </a>
        */}
        <button onClick={() => handleGoogleLogin()} className="flex gap-2 border-1 bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400 transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
        </button>

        <a href=""></a>

        <button onClick={() => handleGithubLogin()} className="flex gap-2 border-1 bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400 transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Github</span>
        </button>

        <a href="http://localhost:8080/auth/github" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">git</span>
        </a>
        
        </div>
        <p className="text-gray-700 mt-4 mx-auto text-sm">
    By signing up, you agree to the <a className="text-blue-950 underline font-semibold" href="/#">Terms of Service and Privacy Policy </a>
    </p>
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