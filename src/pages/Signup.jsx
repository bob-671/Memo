import { useState } from "react";

function Signup() {

  const [role, setRole] = useState("user");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    sickness: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      role,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    };

    if (role === "user") {
      data.age = formData.age;
      data.sickness = formData.sickness;
      data.gender = formData.gender;
    }

    console.log("User Data:", data);
  };

  return (
    <form className="Signf" onSubmit={handleSubmit}>

      {/* Role */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        
        <option value="user">User</option>
        <option value="nutrition">Nutrition</option>
      </select>

      <br />

      {/* Common fields */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        required
      />

      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        required
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <br />

      {/* User only fields */}
      {role === "user" && (
        <>
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
          />

          <br />

          <input
            type="text"
            name="sickness"
            placeholder="Sickness"
            onChange={handleChange}
          />

          <br />

          <select name="gender" onChange={handleChange}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </>
      )}

      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;