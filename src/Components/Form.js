import React, { useState } from 'react';

const Form = ({className}) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    pointOfContact: '',
    location: '',
    date: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid PNG or JPG file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with the following data:', {
      ...formData,
      file: selectedFile,
    });
    // You can add code to handle the form submission here
  };

  return (
    <div className={className}>
      <h2>Flyer Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="organizationName">Organization Name: </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="pointOfContact">Point of Contact: </label>
          <input
            type="text"
            id="pointOfContact"
            name="pointOfContact"
            value={formData.pointOfContact}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="file">Upload a PNG or JPG file: </label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            id="file"
            onChange={handleFileChange}
          />
        </div>
        <div style={{cursor: "pointer", textDecoration: "underline", marginTop: ".2in", marginLeft: "10%"}}>Submit</div>
      </form>
    </div>
  );
}

export default Form;
