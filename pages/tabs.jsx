/*global chrome*/
import React, { useState, useEffect } from "react";
import TabCard from "./tab";


export default function Tabs() {
  const [tabs, setTabs] = useState([]);
  
  function createDiv () {
    const injectElement = document.createElement('div');injectElement.innerHTML = 'Hello deep';document.body.appendChild(injectElement);
}
// const injectDiv = (id) => {
//     typeof (window) === 'object' ? chrome.scripting.executeScript({
//           target: {tabId: id},
//           func: createDiv,
//         },
//         null 
//         ) : null;
//   }



  useEffect(() => {
    var popupWindow = window.open(
      chrome.runtime.getURL("index.html"),
      "exampleName",
      "width=400,height=400"
    );
    //window.close();
    const intevalId = setInterval(() => {
      typeof (window) === 'object' ? chrome.tabs.query({}, newTabs => {
        setTabs(newTabs)  

        // chrome.tabs.executeScript(tabs[0].id, {code: " const injectElement = document.createElement('div');injectElement.innerHTML = 'Hello deep';document.body.appendChild(injectElement);"
        // })

        // for(let i = 0; i < tabs.lenght; i++) {
        //   chrome.tabs.executeScript(tabs[i].id, {code: " const injectElement = document.createElement('div');injectElement.innerHTML = 'Hello deep';document.body.appendChild(injectElement);"
        // })}
        

        // chrome.tabs.onCreated.addListener(
        //   tab => {
        //     console.log(`onCreated:${JSON.stringify(tab)}`)
        //   }
        // );
        chrome.tabs.onUpdated.addListener(
           (tabId, changeInfo, tab) => {
             if (changeInfo.status == 'complete') {
               chrome.tabs.executescript({
                target: {tabId: id},
                func: createDiv,
                
               });
              

            }
            // console.log(`onUpdated:tabId:${JSON.stringify(tabId)}`)
            // console.log(`onUpdated:changeInfo:${JSON.stringify(changeInfo)}`)
            // console.log(`onUpdated:tab:${JSON.stringify(tab)}`)

        }
        )
      })
        : null;
    }, 1000);
    return () => {
      clearInterval(intevalId);
    };
  }, []);



  return <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>{tabs?.map((tab) =>
  (<TabCard key={tab.id} id={tab.id} stringA={tab.url} stringB={tab.id} />

  ))}
  </div>

}

