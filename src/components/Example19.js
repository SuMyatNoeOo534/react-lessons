"use client";
export default function Username({name}){
    return(
        <p>Hello,{name || "Guest"}!

        </p>
    );
}