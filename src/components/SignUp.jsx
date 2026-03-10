import axios from "axios";
import React, { useState } from "react";
import BASE_URL from "../utils/constants";

const SignUp = () => {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName: fn,
        lastName: ln,
        email,
        password,
        age,
        gender,
        skills,
        about,
      });

      console.log(res);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Create Account
          </h2>
          {/* First Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name <span className="text-error">*</span> </legend>
            <input type="text" className="input input-bordered w-full"  value={fn} onChange={(e) => setFn(e.target.value)} />
          </fieldset>
          {/* Last Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name <span className="text-error">*</span> </legend>
            <input type="text" className="input input-bordered w-full" value={ln} onChange={(e) => setLn(e.target.value)} />
          </fieldset>
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email <span className="text-error">*</span> </legend>
            <input type="email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
          </fieldset>
          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password <span className="text-error">*</span> </legend>
            <input type="password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
          </fieldset>
          {/* Gender */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender <span className="text-error">*</span> </legend>
            <input type="text" className="input input-bordered w-full" value={gender} onChange={(e) => setGender(e.target.value)} />
          </fieldset>
          {/* Age */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age <span className="text-error">*</span> </legend>
            <input type="number" className="input input-bordered w-full" value={age} onChange={(e) => setAge(e.target.value)} />
          </fieldset>
          {/* Skills */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Skills <span className="text-error">*</span> </legend>
            <input type="text" className="input input-bordered w-full" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </fieldset>
          {/* About */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">About <span className="text-error">*</span> </legend>
            <textarea className="textarea textarea-bordered w-full" value={about} onChange={(e) => setAbout(e.target.value)} />
          </fieldset>
          {/* Button */}
          <button className="btn btn-primary mt-4 w-full" onClick={handleSignUp} > Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;