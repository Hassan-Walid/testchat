import React, { useEffect, useState } from 'react';
import { getDatabase,ref, get, onChildAdded } from 'firebase/database';
import app from "./config.js";

const db = getDatabase(app);
const dbRef = ref(db,"nature/fruits");

const Read = () => {
    let [data,setData]=useState([]);
    
    useEffect(() => {
      setData([]);

    const unsubscribe = onChildAdded(dbRef, (snapshot) => {
        setData((prevMessages) =>{
            console.log("prev",prevMessages);
            console.log("snap",snapshot.val());
            return [...prevMessages, snapshot.val()]});

    // setData([...data,snapshot.val()]);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);
  
    // const fetchData=async ()=>{
    //     const snapshot = await get(dbRef);
    //     if(snapshot.exists()){
    //             setData(Object.values(snapshot.val()))
    //     }
    //     else{
    //         alert("error");
    //     }
    // }
    return (
        <div>
            <h1>Read</h1>
            {/* <button onClick={fetchData}>display Data</button> */}
            <ul>
                {data.map((d)=>{
                    return <li key={d}>{d.fruitName} : {d.fruitDef} </li>
                })}
            </ul>
        </div>
    );
}

export default Read;
