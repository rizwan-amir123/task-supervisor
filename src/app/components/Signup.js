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

        <button onClick={() => handleSubmit()}  className="bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-2 bg-sky-700 hover:bg-sky-400 w-5/6 
            transition ease-in duration-200" type="button">
            Sign Up
        </button>
        <div className="flex items-center w-5/6 mt-3 mb-3"> 
            <hr className="flex-grow border-t border-gray-700"/>
              <span className="px-3 text-gray-900"> 
              or 
              </span> 
            <hr className="flex-grow border-t border-gray-700"/> 
        </div>
        <div className="flex flex-col items-center justify-start space-y-1 w-5/6">
          
        {/*
        <a href="http://localhost:8080/auth/github" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">google</span>
        </a>
        <a href="https://github.com/login/oauth/authorize?client_id=88da0cb4bb8c367f0417" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">github</span>
        </a>
        */}
        
        {/*<button onClick={() => handleGoogleLogin()} className="flex gap-2 border-1 bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400 transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
        </button>
      */}

        {/*<button onClick={() => handleGithubLogin()} className="flex gap-2 border-1 bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400 transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Github</span>
        </button>
        */}

      

        <a href="http://localhost:8080/auth/github" className="py-2 px-4 mb-3 flex
        justify-center items-center bg-slate-950 hover:bg-gray-700 focus:ring-gray-500 
        focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
        focus:ring-offset-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
          </svg>
          Sign in with GitHub
        </a>

        <a href="http://localhost:8080/auth/github" className="py-2 px-4 flex 
        justify-center items-center bg-red-800 hover:bg-red-500 focus:ring-gray-500 
        focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
        focus:ring-offset-2 rounded-lg">
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
          </svg>
          Sign in with Google
        </a>

        {/*<a href="http://localhost:8080/auth/github" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">git</span>
        </a>
      */}
        
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