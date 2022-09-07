import { useState } from "react";

function LoginForm({ login }) {

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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
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
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;