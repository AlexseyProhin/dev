/*global chrome*/
import React, { useState, useEffect } from "react";


export default function Tick() {
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      setInterval(() => {
       setDate(new Date().toLocaleTimeString())
      }, 1000);
    }, []);
    typeof(window) === 'object' ? chrome.tabs.query({}, tabs => {
      setTabs(tabs.map(tab => tab.url))
  }) : null
    const [tabs, setTabs] = useState();
    return <div>
      <h1>Hello, world!</h1><h2>It is {date}.</h2></div>,
      <div style={{height:300,width:1000}}>{
        tabs
      }
      </div> 
    
}
//chrome.extension)
/* typeof(window) === 'object' ? !!JSON.stringify(Object.keys(window)).search('chrome') && JSON.stringify(Object.keys(window.chrome)) : null // + JSON.stringify(Object.keys(window.chrome.tabs)) : null*/
