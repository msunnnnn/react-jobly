import { useState } from "react";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({});

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
      <input name="username" value={formData.username} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input name="password" value={formData.password} onChange={handleChange}
        type="password" />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;