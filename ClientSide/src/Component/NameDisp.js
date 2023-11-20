import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext"; 

function NameDisp() {
  const { state } = useUser(); 
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(""); 

  useEffect(() => {
    const storedName = state.name || "";
    setName(storedName);
  }, [state.name]);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <center style={{ textTransform: "uppercase" }}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
        }}
      >
        <i className="fa-solid fa-user fa-sm"></i>
      </div>
      <div>{name}</div>
      <div
        className={visible ? "hovered" : ""}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        {visible ? state.email : null}
      </div>
    </center>
  );
}

export default NameDisp;
