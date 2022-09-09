import { useState, useContext } from "react";
import userContext from "../userContext";
import "./UserForm.css";

/** ProfileForm component.
 *
 * Props:
 * - update function
 *
 * State:
 * - form data
 *
 * Events:
 * - handle change
 * - handle submit
 *
 * RoutesList -> ProfileForm
 */
function ProfileForm({ update }) {

  const user = useContext(userContext);

  const initialFormData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };


  const [formData, setFormData] = useState(initialFormData);
  const [isUpdated, setIsUpdated] = useState(false);



  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    update(formData);
    setIsUpdated(true);
  }

  return (
    <>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} className="user-form d-flex flex-column">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={user.username}
          aria-label="username"
          disabled={true}
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
        {
          isUpdated &&
          (<div className="alert alert-success" role="alert">
            Your changes have been saved.
          </div>)
        }
        <button className="btn btn-info text-white">Save Changes</button>
      </form>
    </>
  );
}

export default ProfileForm;