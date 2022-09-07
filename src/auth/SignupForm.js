import { useState } from "react";

function SignupForm({ signup }) {

  const initialFormData = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }

  const [formData, setFormData] = useState(initialFormData);


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        aria-label="username"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        aria-label="password"
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
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;