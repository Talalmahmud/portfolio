import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Col, Row } from "reactstrap";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills__section  d-flex-coloumn">
        <div className="skills__title text-center">
          <h2 data-aos="fade-up">Skills</h2>
          <p data-aos="fade-up">My skills level</p>
        </div>
        <div className="skills__content">
          <div className="skills__frontend" data-aos="fade-right">
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Next Js</h5>
                </div>
                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Tailwind CSS</h5>
                </div>
                <p>Intermediate</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>React Js</h5>
                </div>
                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>JavaScript</h5>
                </div>
                <p>Intermediate</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>HTML</h5>
                </div>

                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>CSS</h5>
                </div>

                <p>Intermediate</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Bootstrap</h5>
                </div>
                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Chakra UI</h5>
                </div>
                <p>Basic</p>
              </Col>
            </Row>
          </div>

          <div className="skills__backend" data-aos="fade-left">
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Node Js</h5>
                </div>
                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Express Js</h5>
                </div>
                <p>Intermediate</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Next Auth</h5>
                </div>
                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Prisma</h5>
                </div>
                <p>Intermediate</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>MongoDB</h5>
                </div>

                <p>Intermediate</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Sql</h5>
                </div>
                <p>Basic</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>PHP</h5>
                </div>
                <p>Basic</p>
              </Col>
              <Col>
                <div className="d-flex skills-hover align-items-center gap-2">
                  <BsCheckCircleFill />
                  <h5>Python</h5>
                </div>
                <p>Basic</p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
