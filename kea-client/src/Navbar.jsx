import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./styles/Navbar.css"



const Navbar = () => {

  const [showAdmissions, setShowAdmissions] = useState(false);

  const toggleAdmissions = () => {
    setShowAdmissions(!showAdmissions);
  };

  const disappearToggleAdmission = () => {
    setShowAdmissions(false)
  }
 
  return (
   <>
    <div className="navContainer">
       <Link to={'/hello'}>
        <img src="./KEA-Logo-kan.png" alt="KEA" />
       </Link>
       <div className="tags">
        <ul className='ulTags'>
          <li onClick={disappearToggleAdmission}>
            <Link to={`/`}>HOME</Link>
          </li>
          <li className='admLi' onClick={toggleAdmissions}>
              <button 
                className="admissionsButton" 
                onClick={toggleAdmissions}
              >
                ADMISSIONS
              </button>
              <span className='admissionSpan'>&#129171;</span>
            </li>
          <li className='prevYearLi' onClick={disappearToggleAdmission}>
            <Link to={`/home`}>PREVIOUS YEAR 
            ADMISSIONS-2023 
            <br/>
            & 2022 
            </Link>
            <span className='prevYearSpan'>&#11206;</span>
          </li>
          <li className='reqClass' onClick={disappearToggleAdmission}>
            <Link to={`/home`}>RECRUITMENTS <span className='prevYearSpan'>&#11206;</span></Link>
            
          </li>
          <li onClick={disappearToggleAdmission}>
            <Link to={`/home`}>RTI</Link>
          </li>
          <li onClick={disappearToggleAdmission}>
            <Link to={`/home`}>TENDERS</Link>
          </li>
          <li className='clgPortal' onClick={disappearToggleAdmission}>
            <Link to={`/home`} >COLLEGE PORTAL
            <span className='prevYearSpan'>&#11206;</span>
            </Link>
          </li>
          <li className='clgPortal' onClick={disappearToggleAdmission}>
            <Link to={`/home`} >FEES REFUND
            <span className='prevYearSpan'>&#11206;</span>
            </Link>
          </li>
          <li className='exmPortal' onClick={disappearToggleAdmission}>
            <Link to={`/home`} >EXAM CENTER PORTAL(for colleges)
          
            </Link>
          </li>
          <li onClick={disappearToggleAdmission}>
            <Link to={`/home`}>CONTACT US</Link>
          </li>
          <select name="language" id="language-selector" aria-label="Language Selector" onClick={disappearToggleAdmission}>
  <option value="english" selected>English</option>
  <option value="kannada">ಕನ್ನಡ  Kannada </option>
</select>
<Link >
        <img src="./Karnataka-Logo.png" alt="KEA"onClick={disappearToggleAdmission}/>
       </Link>
        </ul>
        

       </div>
      </div>
     {/* Scrollable Admissions Section */}
     {showAdmissions && (
        <div className="admissionsSection">
          <ul className="admissionsList">
            <li><Link to={`/undergraduate`}>KARNATAKA STATE ELIGIBILITY TEST(K-SET)-2024</Link></li>
            <li><Link to={`/postgraduate`}>UGCET-2024</Link></li>
            <li><Link to={`/diploma`}>UG NEET- 2024</Link></li>
            <li><Link to={`/phd`}>PGAYUSH - 2024</Link></li>
            <li><Link to={`/phd`}>Diploma CET 2024</Link></li>
            <li><Link to={`/phd`}>PGET-2024 (Medical/Dental & DNB) </Link></li>
            <li><Link to={`/phd`}>GTTC-Diploma-2024</Link></li>
            <li><Link to={`/phd`}>PGCET-2024 (M.Tech/MBA/MCA/M.Arch)</Link></li>
            <li><Link to={`/phd`}>Karnataka Residential Educational Institutions Society 2024</Link></li>
            <li><Link to={`/phd`}>KARNATAKA STATE ELIGIBILITY TEST(K-SET)-2023</Link></li>
          </ul>
        </div>
      )}
   </>
  )
}

export default Navbar