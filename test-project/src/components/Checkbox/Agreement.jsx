import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";
export default function Agreement() {
    
    const checkBoxMsg = [
        {txt:"I read the term of the app",startState:false},
        {txt:"I accept the term of the app",startState:false},
        {txt:"I want to get the weekly news letter",startState:true},
        {txt:"I want to get sales and offers",startState:true},
    ];
    return <div>
        {checkBoxMsg.map((check,index)=>{
            return (<Checkbox key={index} startState={check.startState} >{check.txt}</Checkbox>)
        })}
    </div>;
}
