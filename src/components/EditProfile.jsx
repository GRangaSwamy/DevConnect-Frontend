import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import BASE_URL from "../utils/constants";
const EditProfile = () => {

  const [fn,setFn] = useState("");
  const [ln,setLn] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");
  const [about,setAbout] = useState("");
  const [skills,setSkills] = useState("");
  const user = useSelector((store) => store.user);
 const handleEditProfile = async () => {
  try {

    const newSkills = skills
      .split(",")
      .map(skill => skill.trim())
      .filter(skill => skill !== "");

    const existingSkills = user?.skills || [];

    const payload = {
      firstName: fn || user.firstName,
      lastName: ln || user.lastName,
      age: age ? Number(age) : user.age,
      about: about || user.about,
      gender: gender || user.gender,
      skills: [...new Set([...existingSkills, ...newSkills])]
    };

    console.log("Sending:", payload);

    const res = await axios.patch(
      BASE_URL+"/profile/edit",
      payload,
      { withCredentials: true }
    );

    console.log(res.data);

  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};
  return (
    <div className="flex justify-center">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">
            Edit Profile
          </h2>
          <input
            className="input input-bordered"
            placeholder="First Name"
            value={fn}
            onChange={(e)=>setFn(e.target.value)}
          />
          <input
            className="input input-bordered"
            placeholder="Last Name"
            value={ln}
            onChange={(e)=>setLn(e.target.value)}
          />
          <input
            className="input input-bordered"
            placeholder="Age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          />
          <input
            className="input input-bordered"
            placeholder="Gender"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
          />
          <input
            className="input input-bordered"
            placeholder="Add Skills"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered"
            placeholder="About"
            value={about}
            onChange={(e)=>setAbout(e.target.value)}
          />
          <button
            className="btn btn-primary mt-4"
            onClick={handleEditProfile}
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;