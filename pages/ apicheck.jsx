import React, { useState, useEffect } from "react";


export default function Apicheck() {
    const [v, setV] = useState(1);
    useEffect(() => {
      const i = setInterval(() => {
       setV(v => v + 1)
      }, 1000);
    return () => clearInterval(i)
    }, []);
    
    return (<div>Значение: {v}</div>)
    
}

