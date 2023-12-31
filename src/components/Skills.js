import React from 'react';
import Carousel from 'react-multi-carousel';
import jsLogo from '../assets/img/JavaScript-logo.png';
import tsLogo from '../assets/img/Typescript_logo.png';
import sqlLogo from '../assets/img/PostgreSQL.png';
import gitLogo from '../assets/img/git-logo.png';
import 'react-multi-carousel/lib/styles.css';
// import background from '../assets/img/NYC-brooklyn.jpg';

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                <br />
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={jsLogo} alt="js" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={tsLogo} alt="ts" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={sqlLogo} alt="sql" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={gitLogo} alt="git" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/*  <img className="background-image-skills" src={background} alt="Image" /> */}
    </section>
  );
}
