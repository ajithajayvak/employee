import React from "react";
import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
const Employees = () => {
  const [selectedTeam, setTeam] = useState("TeamB");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "Javascript dev",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 2,
      fullName: "Oob Jones",
      designation: "React dev",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 3,
      fullName: "Cones",
      designation: "Js dev",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 4,
      fullName: "Syam",
      designation: "Php dev",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 5,
      fullName: "Syam",
      designation: "Php dev",
      gender: "female",
      teamName: "Team C",
    },
  ]);
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employe) =>
      employe.id === parseInt(event.currentTarget.id)
        ? employe.teamName === selectedTeam
          ? { ...employe, teamName: "" }
          : { ...employe, teamName: selectedTeam }
        : employe
    );
    setEmployees(transformedEmployees);
  }
  console.log(selectedTeam);
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-selct-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
            <option value="Team D">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employe) => (
              <div
                id={employe.id}
                className={
                  employe.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employe.gender === "female" ? (
                  <img src={femaleProfile} className="card-img-top" />
                ) : (
                  <img src={maleProfile} className="card-img-top" />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employe.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b>
                    {employe.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
