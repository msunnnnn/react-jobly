import { useState, useContext } from "react";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";
import "./UserForm.css";

/** SignupForm component.
 *
 * Props:
 * - signup function
 *
 * State:
 * - form data
 *
 * Events:
 * - handle change
 * - handle submit
 *
 * RoutesList -> SignupForm
 */
function SignupForm({ signup }) {

  const user = useContext(userContext);

  const initialFormData = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
  }

  if (user) return <Navigate to="/" />;

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="user-form d-flex flex-column">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          aria-label="username"
          className="input-bar form-control me-2"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          aria-label="password"
          className="input-bar form-control me-2"
        />
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          aria-label="firstName"
          className="input-bar form-control me-2"
        />
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          aria-label="lastName"
          className="input-bar form-control me-2"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-label="email"
          className="input-bar form-control me-2"
        />
        <button className="btn btn-info text-white">Submit</button>
      </form>
    </>
  );
}

export default SignupForm;