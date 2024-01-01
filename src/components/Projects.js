import React from 'react';
import {
  Container, Row, Col, Tab,
} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/dubai.jpg';
import projImg2 from '../assets/img/dubai2.jpeg';
import projImg3 from '../assets/img/dubai4.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      imgUrl: projImg1,
    },
    {
      title: 'Project 2',
      imgUrl: projImg2,
    },
    {
      title: 'Project 3',
      imgUrl: projImg3,
    },
    {
      title: 'Project 4',
      imgUrl: projImg1,
    },
    {
      title: 'Project 5',
      imgUrl: projImg2,
    },
    {
      title: 'Project 6',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container class="coming-soon">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>Some projects I have done over the years</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroudImage" />
    </section>
  );
}
