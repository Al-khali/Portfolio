import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import as from "../../Assets/Projects/as.png";
import dash from "../../Assets/Projects/dash.png";
import nba from "../../Assets/Projects/nba.png";
import chatify from "../../Assets/Projects/chatify.png";
import bank from "../../Assets/Projects/bank.png";
import chat from "../../Assets/Projects/chat.png";

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
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="chat_bot"
              description="a chat bot build with python using NLP algorithm with NLTK framework"
              ghLink="https://github.com/Al-khali/chat-bot"
              demoLink="https://al-khali-chat-bot-cbv2-g55mvl.streamlitapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nba}
              isBlog={false}
              title="NBA vs EL"
              description="We draw a comparison between the two main professional basketball leagues in the USA and Europe: the NBA and the Euroleague, respectively. More precisely, we scrape from the internet both statistical and biographical data of players and teams who participated in one of those two leagues between 2016 and 2020. The goal of the project is to expose ways in which the two leagues might differ. In particular, we try to answer different questions"
              ghLink="https://github.com/Al-khali/NBA-VS-EL"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as}
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
              imgPath={bank}
              isBlog={false}
              title="Credit EDA Case Study"
              description="The loan providing companies find it hard to give loans to the people due to their insufficient or non-existent credit history. Because of that, some consumers use it as their advantage by becoming a defaulter. Suppose you work for a consumer finance company which specialises in lending various types of loans to urban customers. We use EDA to analyse the patterns present in the data. This will ensure that the applicants capable of repaying the loan are not rejected."
              ghLink="https://github.com/Al-khali/bank_loan_EDA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="dashboard streamlit"
              description="A quickly-deployed dashboard for viewing information about the stocks from Kiplinger 22 Stocks for 2022 as of April 16, 2022. Created in Python with yfinance, plotly, matplotlib, and pandas, deployed using Streamlit."
              ghLink="https://github.com/steamlit_dashboard"
              demoLink="https://al-khali-steamlit-dashboard-stocks-zprkif.streamlitapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
