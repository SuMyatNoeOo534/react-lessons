"use client";
import React,{useState} from "react";
export default function Person(){
    const[name,setName]=useState();
    const[email,setEmail]=useState("sumyatnoeoo750@gmail.com");
    const[phoneNo,setPhoneNo]=useState("09899900889");
    const onChangeEmail=(changedEmail)=>{
        setEmail(changedEmail);
    };
    const onChangePhoneNo=(event)=>{
        console.log('onChangePhoneNO',event)
        setPhoneNo(event.target.value);
    };
    const onClickButton=()=>{
        alert("Butten 1 clicked!");
    };
    const onClickButton2=()=>{
        alert("Butten 2 clicked!");
    };
    return(
        <div>
            <h1>Event in Functional Component</h1>
            <input
             value={name}
             placeholder="Enter Name"
             onChange={(event)=>setName(event.target.value)}
             />
             <input
             value={email}
             placeholder="Enter Email"
             onChange={(event)=>onChangeEmail(event.target.value)}
             />
             <input
             value={phoneNo}
             placeholder="Enter Phone No."
             onChange={onChangePhoneNo}
             />
             <button onClick={onClickButton}>Butten1</button>
             <button onClick={()=>onClickButton2}>Butten2</button>
        </div>
    );
}