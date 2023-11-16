import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { name, password });
  };
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((response) => {
        if (response.data && response.data._id) {
          console.log("Login successful");
          navigate("/home", { state: { props: response.data } });
        } else {
          console.log("Login failed");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };
  return (
    <div className="container1">
      <div className="glassmorphism">
        <h1>Welcome to MotorMart</h1>
        <div className="content">
          <h1>User Login</h1>
          {/* <button className="btn btn-outline btn-danger" onClick={handleDelete}>
            Delete Account
          </button> */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="btn-container" onClick={handleLogin}>
              <div className="btn">
                <button type="button">Login</button>
              </div>
            </div>
          </form>
          <h3>Don't have an Account? Create One</h3>
          <Link to="/register">
            <div className="btn-container">
              <div className="btn">
                <button type="submit" onSubmit={handleSubmit}>
                  Register
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
//added modal
// const handleLogin = (e) => {
//   e.preventDefault();
//   axios.post("http://localhost:3001/login", { name, password })
//     .then((response) => {
//       if (response.data && response.data._id) {
//         console.log("Login successful");
//         navigate('/home', { state: { props: response.data } });
//       } else {
//         console.log("Login failed");
//       }
//     })
//     .catch((err) => {
//       console.error("Login error:", err);
//     });
// };
// const handleDelete = () => {
//   // Perform the delete operation here
//   const customerIdToDelete = "654cce24c589b15fb4edd1f7"; // Replace with the actual customer ID
//   axios.delete(`http://localhost:3001/delete-customer/${customerIdToDelete}`)
//     .then((response) => {
//       console.log("Customer deleted successfully");
//     })
//     .catch((error) => {
//       console.error("Error deleting customer:", error);
//     });
// };
// import React, { useState } from "react";
// import "./Login.css";
// import { Link, useNavigate} from "react-router-dom";
// import axios from "axios";

// function Login() {
//   const [name, setName] = useState();
//   const [password, setPassword] = useState();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", { name, password });
//   };
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3001/login", { name, password })
//       .then((response) => {
//         if (response.data && response.data._id) {
//           console.log("Login successful");
//           navigate('/home', { state: { props: response.data } });
//         } else {
//           console.log("Login failed");
//         }
//       })
//       .catch((err) => {
//         console.error("Login error:", err);
//       });
//   };

//   // const deleteit = () =>{
//   //   axios.delete(`http://localhost:3001/delete-customer/id}`)
//   //   .then((response) => {
//   //     console.log("Customer deleted successfully");
//   //   })
//   //   .catch((error) => {
//   //     console.error("Error deleting customer:", error);
//   //   });
//   // }

//   return (
//     <div className="container">
//       <div className="glassmorphism">
//         <div className="content">
//           <h1>User Login</h1>
//           {/* <button className="btn btn-outline btn-primary">delete</button> */}
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 autoComplete="off"
//                 id="name"
//                 name="name"
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="btn-container" onClick={handleLogin}>
//               <div className="btn">
//                 <button type="button">Login</button>
//               </div>
//             </div>
//           </form>
//           <h3>Don't have an Account Create One</h3>
//           <Link to="/register">
//             <div className="btn-container">
//               <div className="btn">
//                 <button type="submit" onSubmit={handleSubmit}>
//                   Register
//                 </button>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
