import React from "react";
import "../Styles/Faculty.css";
import Staff from "../Assests/staff1.jpeg";
import Staff2 from'../Assests/Staff3.jpeg'
import Staff3 from "../Assests/Staff2.jpeg";
function Faculty() {
  return (
    <>
      <div className="Faculty-box">
        <h1>Faculty</h1>
        <img src={Staff} alt="Staff" />
        <h3>Dr. Rajmani Prasad Sinha</h3>
        <h3> M.Sc. (Pat.), M.Sc. (Sheffield, U. K.), Ph.D. (Pat)</h3>
        <h3>Consultant, School of Astronomy, Aryabhatta Knowledge University, Patna</h3>
        <h3>Chairman – 2011, Bihar School Examination Board, Patna</h3>
        <h3>Retired – 2009, From Patna University Service as Head of Physics Department</h3>
        <h3>Vice-Chancellor – 2003, L.N. Mithila University, Darbhanga.</h3>
      </div>
      
      <div className="Faculty-box">
        <h1>Staff</h1>
        <img src={Staff3} alt="Staff" />
        <h3>Lalan Kumar Mandal</h3>
        <h3>Assistant</h3>
        <h3>School of River Studies</h3>
        <h3> Email - mandallallan@gmail.com</h3>
        <h3>7903256476</h3>
      </div>
      <div className="Faculty-box">
        <img src={Staff2} alt="Staff" />
        <h3>Gaurav Kumar</h3>
        <h3>PGDM(MBA)</h3> <h3>B.COM</h3>
        <h3>MTCO</h3>
        <h3>School of River Studies</h3>
        <h3>g.kr01aku@gmail.com</h3>
        <h3>7979062749</h3>
      </div>
    </>
  );
}

export default Faculty;
