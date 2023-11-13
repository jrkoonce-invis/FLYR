import React, { useState } from 'react';
import axios from 'axios';

const Form = ({className, callBack}) => {
  const [formData, setFormData] = useState({
    org: '',
    pointOfContact: '',
    loc: '',
    date: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const TOTAL_FORM_DATA = new FormData()

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

  const handleSubmit = async () => {
    if (selectedFile != null) {
        TOTAL_FORM_DATA.append("data", JSON.stringify(formData))
        TOTAL_FORM_DATA.append("file", selectedFile)
        await axios.post("http://127.0.0.1:8000/upload", TOTAL_FORM_DATA)
            .then((response) => {
                console.log(response)
                callBack() // closes modal from parent component
            });
    }
  }

  return (
    <div className={className}>
      <h2>Flyer Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="org">Organization Name: </label>
          <input
            type="text"
            id="org"
            name="org"
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
          <label htmlFor="loc">Location: </label>
          <input
            type="text"
            id="loc"
            name="loc"
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
        <div onClick={handleSubmit}>Submit</div>
      </form>
    </div>
  );
}

export default Form;
