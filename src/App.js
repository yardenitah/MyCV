// resume/src/App.js
import React from "react";
import "./App.css";
import { BsLinkedin } from "react-icons/bs";
import { TbBriefcaseFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
// import { usePDF } from "react-to-pdf";

// const Component = () => {
//   const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
//   return (
//     <div>
//       <button onClick={() => toPDF()}>Download PDF</button>
//       <div ref={targetRef}>Content to be generated to PDF</div>
//     </div>
//   );
// };

const Header = () => (
  <header>
    <h1>Yarden Itah</h1>
    <h2>B.Sc. Student in Software Engineering</h2>
  </header>
);

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const ContactInfo = () => (
  <div className="contact-info">
    <h2>Contact</h2>
    <p>
      <a href="mailto:yarden1606@gmail.com" className="contact-link">
        <MdEmail className="contact-icon" />
        yarden1606@gmail.com
      </a>
    </p>
    <p className="contact-link">
      <FaPhoneSquareAlt className="contact-icon" />
      <a href="tel:0533338329">053-3338329</a>
    </p>
    <p className="contact-link">
      <HiHome id="home-icon" className="contact-icon" />
      Tel Aviv, Israel
    </p>
  </div>
);

const Links = () => (
  <div className="links">
    <h2>Links</h2>
    <p>
      <a
        href="https://yardenitah.github.io/My_Portfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBriefcaseFilled style={{ paddingRight: "5px", fontSize: "20px" }} />{" "}
        Portfolio
      </a>
    </p>
    <p>
      <a
        href="https://www.linkedin.com/in/yarden-itah-381560260/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin style={{ paddingRight: "5px", fontSize: "18px" }} />{" "}
        LinkedIn
      </a>
    </p>
  </div>
);

const Skills = () => (
  <div className="skills">
    <h2>Skills</h2>
    <h3>Programming Languages</h3>
    <ul>
      <li>
        <BsDot /> C
      </li>
      <li>
        <BsDot /> C++
      </li>
      <li>
        <BsDot />
        Java
      </li>
      <li>
        <BsDot />
        JavaScript
      </li>
      <li>
        <BsDot />
        Python
      </li>
    </ul>
    <h3>Web Technologies</h3>
    <ul>
      <li>
        <BsDot />
        HTML
      </li>
      <li>
        <BsDot />
        CSS
      </li>
      <li>
        <BsDot />
        React
      </li>
      <li>
        <BsDot />
        Node.js
      </li>
    </ul>
    <h3>Database</h3>
    <ul>
      <li>
        <BsDot />
        MongoDB
      </li>
      <li>
        <BsDot />
        SQL
      </li>
    </ul>
  </div>
);

const Main = () => (
  <div className="main">
    <Header />
    <Section title="Introduction">
      <p className="list-item">
        <BsDot style={{ fontSize: "30px" }} />
        Bachelor's degree, Third-year student in Software Engineering, SCE
        College.
      </p>
      <p className="list-item">
        <BsDot style={{ fontSize: "30px" }} />
        Member of the leadership program of the Prime Minister's Office and the
        ISAF Foundation.
      </p>
      <p className="list-item">
        <BsDot style={{ fontSize: "30px" }} />
        Highly motivated to learn and expand horizons.
      </p>
    </Section>
    <Section title="Education">
      <h3>B.Sc. in Software Engineering</h3>
      <p>2021 - 2025</p>
      <p className="list-item">
        <BsDot style={{ fontSize: "20px" }} />
        Third-year student at SCE College
      </p>

      <h3>Pre-academic Preparation</h3>
      <p>2020 - 2021</p>
      <p className="list-item">
        <BsDot style={{ fontSize: "20px" }} />
        Graduated with honors
      </p>
    </Section>
    <Section title="Work Experience">
      <h3>Private Tutor</h3>
      <p>2022 - 2024</p>
      <ul>
        <li className="list-item">
          <BsDot style={{ fontSize: "20px" }} />
          Providing private lessons to students and high school students in
          Python, Java, C, C++.
        </li>
      </ul>
      <h3>Sales Representative</h3>
      <p>2017 - 2018</p>
      <ul>
        <li className="list-item">
          <BsDot style={{ fontSize: "20px" }} /> Sales in Europe.
        </li>
        <li className="list-item">
          {" "}
          <BsDot style={{ fontSize: "20px" }} />
          Provided service and sales to customers in English.
        </li>
      </ul>
    </Section>
    <Section title="Social Action">
      <h3>ISAF Foundation Fellow</h3>
      <p>2024 - Present</p>
      <ul>
        <li className="list-item">
          <BsDot style={{ fontSize: "20px" }} />
          Leadership program in collaboration with the Prime Minister's Office.
        </li>
        <li className="list-item">
          <BsDot style={{ fontSize: "20px" }} />
          Promoting youth from social and geographic periphery through
          individual initiatives.
        </li>
      </ul>
      <h3>Volunteer</h3>
      <p>2019</p>
      <p className="list-item">
        <BsDot style={{ fontSize: "20px" }} />
        Animal Cruelty Association
      </p>
    </Section>
    <Section title="Military Service">
      <h3>TECHNOLOGY AND LOGISTICS PROVIDER, LOGISTICS CORPS</h3>
      <p> 2018 - 2020</p>
      <ul>
        <li className="list-item">
          <BsDot style={{ fontSize: "20px", marginBottom: "20px" }} />
          Managed multiple administrative interfaces and coordinated logistics
          operations, honorable discharge as a Sergeant.
        </li>
      </ul>
    </Section>
    <Section title="Languages">
      <p>
        Hebrew: Native
        <br />
        English: Fluent in writing, speaking, and reading
      </p>
    </Section>
  </div>
);
const App = () => (
  <div className="container">
    <Main />
    <aside>
      <ContactInfo />
      <Links />
      <Skills />
    </aside>
  </div>
);

export default App;
