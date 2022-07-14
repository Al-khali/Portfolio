import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rust chat app"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Rust"
              ghLink="https://github.com/Al-khali/rust_chat_app"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="chat_bot"
              description="a chat bot build with python using NLP algorithm with NLTK framework"
              ghLink="https://github.com/Al-khali/chat-bot"
              demoLink="https://al-khali-chat-bot-cbv2-g55mvl.streamlitapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NBA vs EL"
              description="We draw a comparison between the two main professional basketball leagues in the USA and Europe: the NBA and the Euroleague, respectively. More precisely, we scrape from the internet both statistical and biographical data of players and teams who participated in one of those two leagues between 2016 and 2020. The goal of the project is to expose ways in which the two leagues might differ. In particular, we try to answer different questions"
              ghLink="https://github.com/Al-khali/NBA-VS-EL"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Prediction of wine quality"
              description="This project aims to determine which chemical characteristics are the best indicators of red wine quality. To be more specific, we define the following problems for this analysis:
              Show the contribution of each factor to wine quality in our model.
              Show which characteristics are most important in determining wine quality.
              Show which characteristics are less important in determining wine quality. As mentioned earlier, our target variable will be wine quality, which is scored between 0 and 10."
              ghLink="https://github.com/Al-khali/P8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
