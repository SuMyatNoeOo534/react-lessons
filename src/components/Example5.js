"use client";
import React from "react";
export default class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Ma Su Myat Noe Oo",
            email:"sumyatnoeoo750@gmail.com",
            phoneNo:"09899900889",

        };
        this.onChangePhoneNo=this.onChangePhoneNo.bind(this);

    }
    onChangeEmail(changedEmail){
        this.setState({email:changedEmail});
    }
    onChangePhoneNo(event){
        this.setState({phoneNo:event.target.value});
    }
    onClickButton(){
        alert("Button 1clicked!");

    }
    onClickButton2(){
        alert("Button 2clicked!");
    }
    render(){
        return(
            <div>
                <h1>Event in Class Compent</h1>
                <input
                 value={this.state.name}
                 placeholder="Enter Name"
                 onChange={(event)=>{
                    this.setState({name:event.target.value});
                 
                 }}
                 />
                 <input
                 value={this.state.email}
                 placeholder="Enter Email"
                 onChange={(event)=>{
                    this.onChangeEmail(event.target.value);
                 
                 }}
                 />
                 
                 
                 
                 <input
                 value={this.state.phoneNo}
                 placeholder="Enter Phone Number"
                 
                    onChange={this.onChangePhoneNo}
                    />
                 <button onClick={this.onClickButton}>Button</button>
                 <button onClick={()=>this.onClickButton2()}>Button2</button>
            </div>
        ); 
    }
}