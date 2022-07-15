import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aourik khalid </span>
            from <span className="purple"> Paris, France.</span>
            <br />I am a junior Data Scientist apprentice at{" "}
              <span className="purple">  OpenClassrooms</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing music with my guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> watching movies and series 
            </li>
            <li className="about-activity">
              <ImPointRight /> building mechanical things like keyboards, you can find my laste keyboards on my github profile
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”{" "}
          </p>
          <footer className="blockquote-footer"> Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
