const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <table className="education-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Organization/School Name</th>
            <th>Percentage</th>
            <th>Pass out Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech</td>
            <td>Lovely Professional University</td>
            <td>78.2%</td>
            <td>2025</td>
          </tr>
          <tr>
            <td>Class XII (CBSE)</td>
            <td>D.A.V. Public School</td>
            <td>86%</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Class X (CBSE)</td>
            <td>D.A.V. Public School</td>
            <td>82%</td>
            <td>2018</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
