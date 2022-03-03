import React from 'react'


const data = [
    { qualifications: "M.SC. IT", institute: 'Department of Animation', university: "Gujarat University", year:'2018-2023', grades:'8.77'},
    { qualifications: "HSC", institute: 'Kumkum Vidhyalay', university: "GSHEB", year:'2018', grades:'8.77'},
    { qualifications: "SSC", institute: 'Kumkum Vidhyalay', university: "GSHEB", year:'2016', grades:'8.77'},
    
  ]
  
  
const AcademicDetails = () => {
  return (
    <div>
    <h2>Below is My Academic Details</h2>
      <table>
        <tr>
          <th>Qualifications</th>
          <th>Institute</th>
          <th>University/ Board</th>
          <th>Year</th>
          <th>Grades</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.qualifications}</td>
              <td>{val.institute}</td>
              <td>{val.university}</td>
              <td>{val.year}</td>
              <td>{val.grades}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AcademicDetails