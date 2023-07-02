import React, { useState } from "react";
import "./Random.css";

function Random() {
  const faculties = ["გრიფინდორი", "რეივენქლო", "ჰაფლფაპი", "სლიზერინი"];
  const [students, setStudents] = useState(["იური", "ნინი", "კოტე", "სალომე"]);
  const [start, setStart] = useState(false);
  const [mixedStudents, setMixedStudents] = useState([]);

  const Mixing = () => {
    if (!start) {
      setStart(true);
      const mixing = [...students].sort(() => Math.random() - 0.5);
      let index = 0;
      const interval = setInterval(() => {
        if (index >= mixing.length) {
          clearInterval(interval);
          return;
        }
        const facultyIndex = Math.floor(Math.random() * faculties.length);
        const faculty = faculties[facultyIndex];
        const student = mixing[index];
        setMixedStudents((prevStudents) => [
          ...prevStudents,
          { faculty: faculty, student: student },
        ]);
        setStudents((prevStudents) =>
          prevStudents.filter((e) => e !== student)
        );
        index++;
      }, 1500);
    }
  };

  return (
    <>
      <div className="container">
        <table>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <div className="student-container">{student}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={Mixing}>გამნაწილებელი ქუდი</button>
      </div>
      <div className="faculties-container">
        {faculties.map((faculty, index) => (
          <div key={index}>
            <p>{faculty}</p>
            {mixedStudents.map((item, itemIndex) => {
              if (item.faculty === faculty) {
                return (
                  <div className="student-container" key={itemIndex}>
                    {item.student}
                  </div>
                );
              }
              return;
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export default Random;
