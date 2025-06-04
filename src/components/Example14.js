"use client";
export default function Greeting({isLoggedIn}){
    if (isLoggedIn) return<h1>Welcome back!</h1>;
    if (!isLoggedIn) return<h1>Please Log in</h1>;
}