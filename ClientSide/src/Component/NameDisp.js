import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NameDisp() {
  const location = useLocation();
  const props = location.state && location.state.props;

  const initialName = props ? props.name : "";
  const email = props ? props.email : "";

  const [name, setName] = useState(initialName);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the name is stored in localStorage
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

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
        {visible ? email : null}
      </div>
    </center>
  );
}

export default NameDisp;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function NameDisp() {
//   const location = useLocation();
//   const props = location.state && location.state.props;

//   const initialName = props ? props.name : "";
//   const email = props ? props.email : "";

//   const [name, setName] = useState(initialName);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Check if the name is stored in localStorage
//     const storedName = localStorage.getItem("name");
//     if (storedName) {
//       setName(storedName);
//     }
//   }, []);

//   const toggle = () => {
//     setVisible(!visible);
//   };

//   return (
//     <center style={{ textTransform: 'uppercase' }}>
//       <div
//         style={{
//           border: '1px solid black',
//           borderRadius: '50%',
//           height: '25px',
//           width: '25px',
//         }}
//       >
//         <i className="fa-solid fa-user fa-sm"></i>
//       </div>
//       <div>{name}</div>
//       <div className={visible ? 'hovered' : ''} onMouseEnter={toggle} onMouseLeave={toggle}>
//         {visible ? email : null}
//       </div>
//     </center>
//   );
// }

// export default NameDisp;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// function NameDisp() {
//   const location = useLocation();
//   const props = location.state && location.state.props;

//   const name = props ? props.name : "";
//   const email = props ? props.email : "";

//   const [visible, setVisible] = useState(false);

//   const toggle = () => {
//     setVisible(!visible);
//   };

//   return (
//     <center style={{ textTransform: 'uppercase' }}>
//       <div
//         style={{
//           border: '1px solid black',
//           borderRadius: '50%',
//           height: '25px',
//           width: '25px',
//         }}
//       >
//         <i className="fa-solid fa-user fa-sm"></i>
//       </div>
//       <div>{name}</div>
//       <div className={visible ? 'hovered' : ''} onMouseEnter={toggle} onMouseLeave={toggle}>
//         {visible ? email : null}
//       </div>
//     </center>
//   );
// }

// export default NameDisp;
