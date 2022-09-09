import { useState, useContext } from "react";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";
import "./UserForm.css";

/** LoginForm component.
 *
 * Props:
 * - login function
 *
 * State:
 * - form data
 *
 * Events:
 * - handle change
 * - handle submit
 *
 * RoutesList -> LoginForm
 */
function LoginForm({ login }) {

  const user = useContext(userContext);

  const initialFormData = {
    username: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
  }

  if (user) return <Navigate to="/" />;

  return (
    <>
      <h2>Log In</h2>
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
        <button className="btn btn-info text-white">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;