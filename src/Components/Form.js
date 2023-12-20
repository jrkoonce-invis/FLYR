import React, { useState } from 'react';
import axios from 'axios';

const Form = ({callBack}) => {
  const url = "../../upload"

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
        // await axios.post("http://127.0.0.1:8000/upload", TOTAL_FORM_DATA)
        await axios.post(url, TOTAL_FORM_DATA)
            .then((response) => {
                console.log(response)
                callBack() // closes modal from parent component
            });
    }
  }

  return (
    <div className="grid justify-items-center gap-4">
      <h1 className="text-3xl">Flyer Upload</h1>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Organization Name</span>
        </label>
        <input type="text"id="org"
            name="org"
            value={formData.organizationName}
            onChange={handleInputChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Point of Contact</span>
        </label>
        <input type="text" id="pointOfContact"
            name="pointOfContact"
            value={formData.pointOfContact}
            onChange={handleInputChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input type="text" id="loc"
            name="loc"
            value={formData.location}
            onChange={handleInputChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="w-full">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            className="bg-base-100 input input-bordered w-full"
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Input Flyer File (PNG, JPG/JPEG)</span>
        </label>
        <input type="file" accept=".jpg, .jpeg, .png"
            id="file"
            onChange={handleFileChange} className="file-input file-input-bordered w-full max-w-xs" />
      </div>

      <button className="btn btn-outline btn-accent" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
