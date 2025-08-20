import React, { useState } from "react";

function ReportCrime() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Crime reported successfully!");
    setFormData({ name: "", location: "", type: "", description: "" });
  };

  return (
    <div className="page form-page">
      <h2>Report a Crime</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Your Name (optional)"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type of Crime"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportCrime;
