const { useState } = React;

function App() {
  // for downloading CV
  const buttonDownloadCVClick = () => {
    const pdfUrl = "./CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Pavlo_Myskiv.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // for images
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");

  const getImgSrc = (event) => {
    // Access the src attribute of the clicked image
    const src = event.target.src;
    setTempingSrc(src);
    setModel(true);
    // console.log("Clicked image src:", tempingSrc);

    // You can now use the 'src' variable as needed
    // For example, you might want to pass it to another function or update state
  };

  // for header
  const [headerOpen, setHeaderOpen] = useState(false);
  const openHeaderClick = () => {
    setHeaderOpen(!headerOpen);
  };

  return (
    <div className="app">
      <header className="header" id="home">
        <div className="header__logo">
          <h1>PM</h1>
          <span>
            <strong>M</strong>yskiv
          </span>
        </div>
        <div
          className={headerOpen ? "header__content open" : "header__content"}
        >
          <nav className="header__links">
            <ul className="header__links__list">
              <li>
                <a href="#home" onClick={() => setHeaderOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#welcome" onClick={() => setHeaderOpen(false)}>
                  About me
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setHeaderOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setHeaderOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" onClick={() => setHeaderOpen(false)}>
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setHeaderOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__action">
            <button className="header__button" onClick={buttonDownloadCVClick}>
              Download my CV
            </button>
          </div>
        </div>
        <img
          width="50"
          height="50"
          src={
            headerOpen
              ? "https://img.icons8.com/ios/50/delete-sign--v1.png"
              : "https://img.icons8.com/ios/50/000000/menu--v7.png"
          }
          alt="menu--v7"
          className="menu__burger"
          onClick={openHeaderClick}
        />
      </header>

      <section
        className="section section__1"
        id="welcome"
        onClick={() => setHeaderOpen(false)}
      >
        <article className="welcome__text">
          <h3>Hi I'm</h3>
          <h2>Pavlo Myskiv</h2>
          <div className="welcome__profession">
            <h1>WEB</h1>
            <h1>developer</h1>
          </div>
          <p>
            Welcome to my portfolio. Here you can find out more about who I am
            and what I do
          </p>
          <a href="#contact">
            <button className="welcome__contact-button">Contact Me</button>
          </a>
        </article>

        <article className="welcome__photo">
          <img src="./img/my-pic.jpg" alt="My_photo_1" />
        </article>
      </section>

      <section
        className="section section__2"
        onClick={() => setHeaderOpen(false)}
      >
        <article className="about__photo">
          <img src="./img/my-pic-2.jpg" alt="My_photo_2" />
        </article>

        <article className="about__text">
          <h1>About Me</h1>
          <p>
            Software developer, who is focused on creating dynamic and
            user-friendly web applications. Always find new opportunities to
            improve my developing skills.
          </p>
          <div className="skills">
            <ul>
              <li>
                <h2>Frontend 👨‍💻</h2>
                <input type="range" min="0" max="100" value="70" readOnly />
              </li>
              <li>
                <h2>Backend 💻</h2>
                <input type="range" min="0" max="100" value="60" readOnly />
              </li>
              <li>
                <h2>UI/UX Design 🖌️</h2>
                <input type="range" min="0" max="100" value="40" readOnly />
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section
        className="section section__3"
        id="skills"
        onClick={() => setHeaderOpen(false)}
      >
        <article className="technologies__description">
          <h1>Skills</h1>
          <p>Here are technologies, which I work with</p>
        </article>

        <article className="skills__block">
          <div className="skill__square">
            <div className="skill__part">
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/ios/50/design--v1.png"
                alt="design--v1"
              />
              <span>UI/UX</span>
            </div>
            <div className="skill__list">
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/color/96/figma.png"
                  alt="figma"
                />
                <span>Figma</span>
              </div>
            </div>
          </div>

          <div className="skill__square">
            <div className="skill__part">
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/ios/50/code--v1.png"
                alt="code--v1"
              />
              <span>Frontend</span>
            </div>

            <div className="skill__list">
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/color/96/html-5--v1.png"
                  alt="html-5--v1"
                />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/color/96/css3.png"
                  alt="css3"
                />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/color/96/javascript--v1.png"
                  alt="javascript--v1"
                />
                <span>JS</span>
              </div>
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/office/96/react.png"
                  alt="react"
                />
                <span>React</span>
              </div>
            </div>
          </div>

          <div className="skill__square">
            <div className="skill__part">
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/ios/50/server.png"
                alt="server"
              />
              <span>Backend</span>
            </div>

            <div className="skill__list">
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/fluency/96/node-js.png"
                  alt="node-js"
                />
                <span>NodeJS</span>
              </div>
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/nolan/96/express-js.png"
                  alt="express-js"
                />
                <span>ExpressJS</span>
              </div>
              <div className="skill-item">
                <img
                  width="45"
                  height="45"
                  src="https://img.icons8.com/color/96/mysql-logo.png"
                  alt="mysql-logo"
                />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section
        className="section section__4"
        id="projects"
        onClick={() => setHeaderOpen(false)}
      >
        <article className="projects__description">
          <h1>My Projects</h1>
          <p>Here are all projects made by me</p>
          <p>Click on image to look on details)</p>
        </article>

        <div className={model ? "model open" : "model"}>
          <img src={tempingSrc} alt="" />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/delete-sign--v1.png"
            alt="delete-sign--v1"
            className="icon__close"
            onClick={() => setModel(false)}
          />
        </div>
        <article className="projects__block">
          <div className="project__square">
            <img src="./img/mycer-pic-1.png" alt="" onClick={getImgSrc} />
            <img src="./img/mycer-pic-2.png" alt="" onClick={getImgSrc} />
            <img src="./img/mycer-pic-3.png" alt="" onClick={getImgSrc} />
            <img src="./img/mycer-pic-4.png" alt="" onClick={getImgSrc} />
            <a href="https://mycertificate.onrender.com/" target="_blank">
              <h2>MyCertificate</h2>
            </a>
          </div>

          <div className="project__square">
            <img src="./img/fcskala-pic-1.png" alt="" onClick={getImgSrc} />
            <img src="./img/fcskala-pic-6.png" alt="" onClick={getImgSrc} />
            <img src="./img/fcskala-pic-3.png" alt="" onClick={getImgSrc} />
            <img src="./img/fcskala-pic-5.png" alt="" onClick={getImgSrc} />
            <h2>Website of FC "Skala 1911"</h2>
          </div>

          <div className="project__square">
            <img src="./img/banking-pic-1.png" alt="" onClick={getImgSrc} />
            <img src="./img/banking-pic-2.png" alt="" onClick={getImgSrc} />
            <img src="./img/banking-pic-3.png" alt="" onClick={getImgSrc} />
            <img src="./img/banking-pic-4.png" alt="" onClick={getImgSrc} />
            <a
              href="https://storied-sopapillas-551924.netlify.app/home"
              target="_blank"
            >
              <h2>YourBanK</h2>
            </a>
          </div>
        </article>
      </section>

      <section
        className="section section__5"
        id="education"
        onClick={() => setHeaderOpen(false)}
      >
        <h1>Education</h1>
        <article className="education__block">
          <div className="education__photo">
            <img
              src="https://static.espreso.tv/uploads/article/2562283/images/im-LNU.jpg"
              alt=""
            />
          </div>
          
          <div className="education__text">
            <h2>MASTER'S DEGREE</h2>
            <h3>Ivan Franko National University of Lviv</h3>
            <h4>Computer Science</h4>
            <p>2023 - present</p>
            <br />
            <br />
            <br />
            <h2>BACHELOR'S DEGREE</h2>
            <h3>Ivan Franko National University of Lviv</h3>
            <h4>Computer Science</h4>
            <p>2019 - 2023</p>
          </div>
        </article>
      </section>

      <footer
        className="footer"
        id="contact"
        onClick={() => setHeaderOpen(false)}
      >
        <div className="footer__logo">
          <h1>PM</h1>
          <span>
            <strong>M</strong>yskiv
          </span>
        </div>

        <div className="footer__links">
          <nav className="footer__links__list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#welcome">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </nav>
        </div>

        <div className="footer__socials">
          <ul className="footer__socials__list">
            <li>
              <a href="https://www.instagram.com/myskiv_p/">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/pavlomyskiw">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pavlo-m-b27983272/">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__lowest">
          <p>
            (C) 2023 <span>PM</span> All Rights Reserved, Inc
          </p>
        </div>
      </footer>

      <a href="#home">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/000000/circled-up-2.png"
          alt="circled-up-2"
          className="to__top"
        />
      </a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
