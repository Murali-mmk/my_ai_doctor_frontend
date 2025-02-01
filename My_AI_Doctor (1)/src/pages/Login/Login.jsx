import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  // State for managing password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and API call logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          {/* Left side for the image */}
          <div className="col-md-6 d-none d-md-block mt-5">
            <img
              src="https://cdn-ijphb.nitrocdn.com/RHWoEaqpOxVKJjUNeLaispPPVzoVqNkU/assets/images/optimized/rev-57e2736/mayurahospitals.com/wp-content/uploads/2023/02/Mayura-logo-v2-02.png" // Add your image URL here
              alt="Login Image"
              className="img-fluid h-80 w-100 object-cover"
            />
          </div>

          {/* Right side for the form */}
          <div className="col-md-6 col-sm-8 bg-white shadow rounded p-5 ">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-3">
               <Link to='/home'>
               <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
               </Link>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
                <Link to="/register" className="text-decoration-none">
                  Create new account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react'

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login Successful:", { email, password });
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#007BFF",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login
