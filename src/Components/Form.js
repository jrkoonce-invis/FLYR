import React, { useState } from 'react';
import axios from 'axios';

const Form = ({callBack}) => {
  const url = "../../upload"

  const [formData, setFormData] = useState({
    org: '',
    pointOfContact: '',
    loc: '',
    link: '',
    date: '',

    filter_location: '',

    filter_time: '',

    cate1: '',
    cate2: '',
    cate3: ''
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
    if (selectedFile != null  && formData.org != ""
                              && formData.pointOfContact != ""
                              && formData.loc != ""
                              && formData.link != ""
                              && formData.date != ""
                              && formData.filter_location != ""
                              && formData.filter_time != ""
                              && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.pointOfContact) ) {
        TOTAL_FORM_DATA.append("data", JSON.stringify(formData))
        TOTAL_FORM_DATA.append("file", selectedFile)
        // await axios.post("http://127.0.0.1:8000/upload", TOTAL_FORM_DATA)
        await axios.post(url, TOTAL_FORM_DATA)
            .then((response) => {
                console.log(response)
                alert("Flyer posted successfully! It should be accepted and able to view within 12 hours.")
                callBack() // closes modal from parent component
            });
    } else {
      alert("Please complete all fields above and verify email is valid")
    }
  }

  return (
    <div className="grid gap-4 max-w-xs w-full">
      <h1 className="text-3xl">Flyer Upload</h1>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Organization Name</span>
        </label>
        <input type="text"id="org"
            required
            name="org"
            value={formData.organizationName}
            onChange={handleInputChange} placeholder="Enter your Org name here" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Point of Contact</span>
        </label>
        <input type="email" id="pointOfContact"
            required
            name="pointOfContact"
            value={formData.pointOfContact}
            onChange={handleInputChange} placeholder="Please enter an email here" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input type="text" id="loc"
            required
            name="loc"
            value={formData.location}
            onChange={handleInputChange} placeholder="Please enter an address or N/A" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="w-full max-w-xs">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            className="bg-base-100 input input-bordered w-full"
            required
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
            onChange={handleFileChange} className="file-input file-input-bordered w-full max-w-xs"
            required />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Associated Link</span>
        </label>
        <input type="text" id="link"
            required
            name="link"
            value={formData.link}
            onChange={handleInputChange} placeholder="Enter event/Org link here" className="input input-bordered w-full max-w-xs" />
      </div>

      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        
        <div class="form-control w-6/12">
          <label class="label cursor-pointer">
            <span class="label-text">On-Campus</span> 
            <input required onChange={handleInputChange} checked={formData.filter_location === "oncampus"} id="oncampus" value="oncampus" type="radio" name="filter_location" class="radio checked:bg-primary"/>
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">Off-Campus</span> 
            <input required onChange={handleInputChange} checked={formData.filter_location === "offcampus"} id="offcampus" value="offcampus" type="radio" name="filter_location" class="radio checked:bg-secondary" />
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">Remote</span> 
            <input required onChange={handleInputChange} checked={formData.filter_location === "remote"} id="remote" value="remote" type="radio" name="filter_location" class="radio checked:bg-accent" />
          </label>
        </div>
      </div>

      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Time</span>
        </label>
        
        <div class="form-control w-6/12">
          <label class="label cursor-pointer">
            <span class="label-text">Within the Week</span> 
            <input required onChange={handleInputChange} checked={formData.filter_time === "week"} id="week" value="week" type="radio" name="filter_time" class="radio checked:bg-primary"/>
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">Within the Month</span> 
            <input required onChange={handleInputChange} checked={formData.filter_time === "month"} id="month" value="month" type="radio" name="filter_time" class="radio checked:bg-secondary" />
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">Non-Event</span> 
            <input required onChange={handleInputChange} checked={formData.filter_time === "nonevent"} id="nonevent" value="nonevent" type="radio" name="filter_time" class="radio checked:bg-accent" />
          </label>
        </div>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Categories</span>
        </label>
        <select onChange={handleInputChange} name="cate1" className="select select-bordered w-full max-w-xs mb-5" id="cate-1">
          <option disabled selected>Select Category 1</option>
          <option value="Academic/Honor Societies">Academic/Honor Societies</option>
          <option value="Activism">Activism</option>
          <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
          <option value="Performing Arts">Performing Arts</option>
          <option value="Cultural">Cultural</option>
          <option value="Enviromental">Enviromental</option>
          <option value="Governance">Governance</option>
          <option value="Graduate/PhD">Graduate/PhD</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Arts and Media">Arts and Media</option>
          <option value="Religious/Spiritual">Religious/Spiritual</option>
          <option value="Engineering">Engineering</option>
          <option value="Sciences">Sciences</option>
          <option value="University">University</option>
          <option value="Service">Service</option>
          <option value="Social">Social</option>
          <option value="Fraternaties/ Sororities">Fraternaties/Sororities</option>
          <option value="Sports and Recreation">Sports and Recreation</option>
          <option value="Free Food">Free Food</option>
        </select>
        <select onChange={handleInputChange} name="cate2" className="select select-bordered w-full max-w-xs mb-5" id="cate-2">
          <option disabled selected>Select Category 2</option>
          <option value="Academic/Honor Societies">Academic/Honor Societies</option>
          <option value="Activism">Activism</option>
          <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
          <option value="Performing Arts">Performing Arts</option>
          <option value="Cultural">Cultural</option>
          <option value="Enviromental">Enviromental</option>
          <option value="Governance">Governance</option>
          <option value="Graduate/PhD">Graduate/PhD</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Arts and Media">Arts and Media</option>
          <option value="Religious/Spiritual">Religious/Spiritual</option>
          <option value="Engineering">Engineering</option>
          <option value="Sciences">Sciences</option>
          <option value="University">University</option>
          <option value="Service">Service</option>
          <option value="Social">Social</option>
          <option value="Fraternaties/ Sororities">Fraternaties/Sororities</option>
          <option value="Sports and Recreation">Sports and Recreation</option>
          <option value="Free Food">Free Food</option>
        </select>
        <select onChange={handleInputChange} name="cate3" className="select select-bordered w-full max-w-xs mb-5" id="cate-3">
          <option disabled selected>Select Category 3</option>
          <option value="Academic/Honor Societies">Academic/Honor Societies</option>
          <option value="Activism">Activism</option>
          <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
          <option value="Performing Arts">Performing Arts</option>
          <option value="Cultural">Cultural</option>
          <option value="Enviromental">Enviromental</option>
          <option value="Governance">Governance</option>
          <option value="Graduate/PhD">Graduate/PhD</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Arts and Media">Arts and Media</option>
          <option value="Religious/Spiritual">Religious/Spiritual</option>
          <option value="Engineering">Engineering</option>
          <option value="Sciences">Sciences</option>
          <option value="University">University</option>
          <option value="Service">Service</option>
          <option value="Social">Social</option>
          <option value="Fraternaties/ Sororities">Fraternaties/Sororities</option>
          <option value="Sports and Recreation">Sports and Recreation</option>
          <option value="Free Food">Free Food</option>
        </select>
      </div>


      <button className="btn btn-outline btn-accent" onClick={handleSubmit}>Submit</button>
    </div>
    
  );
}

export default Form;
