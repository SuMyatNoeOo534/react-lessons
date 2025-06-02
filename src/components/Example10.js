"use client";
import { useState } from "react";
function LoginButton({onClickButton}){
    return(
        <div>
            <button onClick={onClickButton}>Login Button</button>

        </div>
    );
}
function UsernameInput({value,onChangeName}){
    return(
        <div>
        <input value={value} onChange={(e)=>onChangeName(e.target.value)}/>
        </div>
    );
}
function Parent(){
    const[username,setUserName]=useState();
    return(
        <div>
            <UsernameInput value={username} onChangeName={(changedName)=>setUserName(changedName)}
            />
            <LoginButton onClickButton={()=>alert("Clicked Login Button.")}
            />
        </div>
    );
}
export default Parent;