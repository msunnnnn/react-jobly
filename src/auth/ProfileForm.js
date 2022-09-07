import { useState, useContext } from "react";
import userContext from "../userContext";

function ProfileForm({ update }) {
  const user = useContext(userContext);
  const initialFormData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  }
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    update(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile</h2>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={user.username}
        aria-label="username"
        disabled={true}
      />
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        aria-label="firstName"
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        aria-label="lastName"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        aria-label="email"
      />
      <button>Save Changes</button>
    </form>
  );
}

export default ProfileForm;