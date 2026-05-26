import React from "react";
import "../Styles/Institute.css";
import Carousels from "./Carousels";
import ImportantBox from "./ImportantBox";

const BoxHeading = "News & Announcement";
const BoxHeadingSecond = "Important Links";
const Image = "https://akucgs.vercel.app/assets/new.gif";

const NewsAndAnnouncement = [
  {
    id: 0,
    NewsName: "Admission 2025",
    href: "https://adms.akubihar.ac.in/",
  },
  {
    id: 1,
    NewsName: "PROSPECTUS2025",
    href: "/Prospectus.pdf",
  },
  {
    id: 2,
    NewsName: "Activities Report 2025 SCHOOL OF ASRTRONOMY",
    href: "/Centres Notification.pdf",
  },
  // {
  //   id: 3,
  //   NewsName:
  //     "Results for M.Sc. in River Science and Management 1st Semester Examination, 2023",
  //   href: "https://results.akuexam.net/MSc_RS_1stSem_2023Results.aspx",
  // },
];

const ImportantLinks = [
  {
    id: 0,
    NewsName: "Admission Procedure 2025",
    href: "/Admission.pdf",
  },
  // {
  //   id: 1,
  //   NewsName: "DRC/BOS",
  //   href: "#",
  // },
  // {
  //   id: 2,
  //   NewsName: "Approved Syllabus of Courses offered By SGS",
  //   href: "#",
  // },
];

function Institute() {
  return (
    <>
      <div className="Institute-tab">
        <div className="Institute-tab-one">
          <Carousels />
          <ImportantBox
            NewsAndAnnouncement={NewsAndAnnouncement}
            Image={Image}
            BoxHeading={BoxHeading}
          />
        </div>

        <div className="Institute-tab-two">
          <ImportantBox
            NewsAndAnnouncement={ImportantLinks}
            Image={Image}
            BoxHeading={BoxHeadingSecond}
          />

          <div className="Institute-tab-content" style={{ marginLeft: "10px" }}>
            <h3 style={{ textAlign: "justify" }}>
            The School of Astronomy, Bihar, was officially established by the Government of Bihar in 2023
            with a clear and ambitious goal: to make the vast and exciting world of space science 
            and astronomy accessible to everyone.
            </h3>
            <br />
            <h3 style={{ textAlign: "justify" }}>
              Located in Patna, this center marks the beginning of a new, vital chapter for education and research in the region. 
              Our primary objective is to inspire the next generation of scientists, 
              explorers, and innovators. We achieve this by providing hands-on practical experience using cutting-edge tools, 
              including modern telescopes and spectroscopic instruments.
            </h3>
             <br />
             <h3 style={{ textAlign: "justify" }}>
              Located in Patna, this center marks the beginning of a new, vital chapter for education and research in the region. 
              Our primary objective is to inspire the next generation of scientists, 
              explorers, and innovators. We achieve this by providing hands-on practical experience using cutting-edge tools, 
              including modern telescopes and spectroscopic instruments.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute;
