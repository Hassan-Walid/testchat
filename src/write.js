import React, { useState } from 'react';
import { getDatabase, push, ref, set } from 'firebase/database';
import app from "./config.js";

const Write = () => {
    let [inputValue1,setInputValue1]=useState("");
    let [inputValue2,setInputValue2]=useState("");
    const saveData = async()=>{
        const db = getDatabase(app);
        const newDomRef = push(ref(db,"nature/fruits"));
        set(newDomRef,{
            fruitName:inputValue1,
            fruitDef:inputValue2
        }).then(()=>{alert("added successfully")}).catch((e)=>console.log(e));

    }

    return (
        <div>
           <input type='text' value={inputValue1} onChange={(e)=>setInputValue1(e.target.value)}/>
           <input type='text'value={inputValue2} onChange={(e)=>setInputValue2(e.target.value)}/>
           <button onClick={saveData}>Click</button>

        </div>
    );
}

export default Write;
