import React, { useState, useEffect } from "react";


export default function Tick() {
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      setInterval(() => {
       setDate(new Date().toLocaleTimeString())
      }, 1000);
    }, []);
    
    return <div>
      <h1>Hello, world!</h1><h2>It is {date}.</h2></div>,
      <div style={{height:300,width:1000}}>{
        
      typeof(window) === 'object' ? !!JSON.stringify(Object.keys(window)).search('chrome') && JSON.stringify(Object.keys(window.chrome)) + JSON.stringify(Object.keys(window.chrome.extension)) + JSON.stringify(Object.keys(window.chrome.tabs)) : null
      }
      </div> 
    
}
//chrome.extension)

