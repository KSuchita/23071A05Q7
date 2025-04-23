import React, { useState } from 'react';
import './PlacementChecker.css'; // Import CSS for styling

function PlacementChecker() {
  const [formData, setFormData] = useState({ rollNo: '', cgpa: '' });
  const [eligibility, setEligibility] = useState(null);
  const minCGPA = 7.0; // Minimum CGPA for eligibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cgpaValue = parseFloat(formData.cgpa);
    if (!isNaN(cgpaValue)) {
      setEligibility(cgpaValue >= minCGPA ? 'Eligible for Placement' : 'Not Eligible for Placement');
    } else {
      setEligibility('Please enter a valid CGPA');
    }
  };

  return (
    <div className="placement-container">
      <h1>Placement Eligibility Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>Roll Number:</label>
        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
        
        <label>CGPA:</label>
        <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} required />
        
        <button type="submit">Check Eligibility</button>
      </form>
      
      {eligibility && <p className="result">{eligibility}</p>}
    </div>
  );
}

export default PlacementChecker;
