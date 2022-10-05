import React, { useState, useEffect } from "react";


export default function Tick() {
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      setInterval(() => {
       setDate(new Date().toLocaleTimeString())
      }, 1000);
    }, []);
    
    return <div><h1>Hello, world!</h1><h2>It is {date}.</h2></div>
    
}

