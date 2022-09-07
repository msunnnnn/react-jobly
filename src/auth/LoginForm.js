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
      Username: <input name="username" value={formData.color} onChange={handleChange} />
      Password: <input name="password" value={formData.currency} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );


}

export default LoginForm;