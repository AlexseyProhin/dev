import { propNames } from "@chakra-ui/react";

export default function TabCard({ stringA, stringB, id}) {
      console.log(id);
      function createDiv () {
            const injectElement = document.createElement('div');injectElement.innerHTML = 'Hello deep';document.body.appendChild(injectElement);
      }
      const injectDiv = (id) => {
            typeof (window) === 'object' ? chrome.scripting.executeScript({
                  target: {tabId: id},
                  func: createDiv,
                },
                null 
                ) : null;
          }

      return <div style={{
            height: "100px",
            width: "450px",
            background: '#CCCCFF',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "5",
            paddingBottom: "5"
      }}>

            <div style={{
                  height: "40px",
                  width: "200px",
                  background: "green",
                  display: "flex"
            }}>{stringA}</div>

            <div style={{
                  height: "40px",
                  width: "200px",
                  background: "yellow",
                  display: "flex"
            }}>{stringB}</div>

            <button onClick={injectDiv(id)} style={{
                  height: "40px",
                  width: "200px",
                  background: "pink",
                  display: "flex"
            }}>вставить див</button>
      </div>
}
