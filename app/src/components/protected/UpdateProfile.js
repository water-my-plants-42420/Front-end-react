import React, { useState } from 'react';
import Nav from '../Nav';
import { Form } from '../Styled';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const EditProfileForm = () => {
  const initialProfileInfo = {
    username: '',
    password: '',
    phone: '',
  };

  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);

  const { username, phone, password } = profileInfo;

  // Handler Functions
  const handleInputChange = (e) => {
    setProfileInfo({
      ...profileInfo,
      [e.target.id]: e.target.value,
    });
  };

  let userid = parseInt(localStorage.getItem('userId'));

  const updateProfile = (userid) => {
    axiosWithAuth()
      .put(`users/${userid}`, profileInfo)
      .then((res) => {
        console.log(res.body.message)
        console.log('NEWPROFILE', profileInfo);
      })
      .catch((error) => console.log(error));
  };

  const handleFormSubmit = (e) => {
    if (phone && password && username) {
      e.preventDefault();
      console.log(
        'value of newUser inside of EDIT PROFILE handleFormSubmit',
        profileInfo
      );
      updateProfile(userid);

      setProfileInfo(initialProfileInfo);
    }
  };

  return (
    <>
      <Nav />
      <Form autoComplete="off">
        <div>
          <h1>Edit Profile</h1>
        </div>

        <div className="form-inputs">
          <label htmlFor="phone">User Name</label>
          <input
            type="username"
            id="username"
            name="username"
            onChange={handleInputChange}
            value={username}
            placeholder="Username"
            required
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={password}
            placeholder="Password"
            required
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={handleInputChange}
            value={phone}
            placeholder="Number"
            required
          />
        </div>

        <button type="submit" onClick={handleFormSubmit}>
          Edit Profile
        </button>
      </Form>
    </>
  );
};

export default EditProfileForm;
