/*global chrome*/
import React, { useState, useEffect } from "react";
import TabCard from "./tab";


export default function Tabs() {
    const [tabs, setTabs] = useState([]);
     useEffect(() => {
      const intevalId = setInterval(() => {
        typeof(window) === 'object' ? chrome.tabs.query({}, tabs => {
          setTabs(tabs) //(tabs.map(tab => tab.url))
        }) : null;
       }, 1000);
       return() => {
          clearInterval(intevalId);
       };
    }, []);
    
    
    console.log(tabs[0]);
    console.log({tabs});
 
    return <div style={{height:"100%",width:"100%", display: "flex",justifyContent: "center", alignItems: "center",flexDirection: "column"}}>{tabs?.map((tab) => 
    (<TabCard key={tab.id} stringA={tab.url} stringB={tab.id} />
  
    ))}
      </div> 
    
}

