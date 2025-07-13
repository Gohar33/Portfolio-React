import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "./Cards.css";

const cards = [
  {
    id: 1,
    img: "https://i.imgur.com/OAY2Mgv.jpg ",
    title: "Meal-sharing app",
    text: "Meal Sharing is an app created by React, deployed on Heroku.",
    tools: "HTML, CSS, JS, React, Node.js, MySQL",
    codeLink: "https://github.com/Gohar33/meal-sharing",
    projectLink: "https://hyf-meal-sharing-gohar.herokuapp.com/",
  },

  {
    id: 2,
    img: "https://i.imgur.com/sB3pmWX.png",
    title: "To Do List",
    text: "The page is created by React, helps to add, edit, update and delete to do lists.",
    tools: "HTML, CSS, JS, React",
    codeLink: "https://github.com/Gohar33/ToDoList-React",
    projectLink: "Project link",
  },

  {
    id: 3,
    img: "https://i.imgur.com/6Yutu46.png",
    title: "Dashboard",
    text: "Dashboard page displaying usage consumption, designed on Figma, then created by React.",
    tools: "HTML, CSS, JS, React, Figma",
    codeLink: "https://github.com/Gohar33/dashboard",
    projectLink: "https://gohar33.github.io/dashboard/",
  },

  {
    id: 4,
    img: "https://i.imgur.com/4zFmAq1.png",
    title: "Quizz for Coders",
    text: "An interactive game to practice HTML, CSS and JavaScript.",
    tools: "HTML, CSS, JS",
    codeLink: "https://github.com/Gohar33/quizz_for_coders",
    projectLink: "https://gohar33.github.io/quizz_for_coders/",
  },

  {
    id: 5,
    img: "https://i.imgur.com/cRJObWM.png",
    title: "Weather app",
    text: "Helps to show current weather in any city of the world",
    tools: "HTML, CSS, JS",
    codeLink: "https://github.com/Gohar33/weather_app",
    projectLink: "Project link",
  },

  {
    id: 6,
    img: "https://i.imgur.com/SsKgATU.png",
    title: "CSS Portfolio",
    text: "My old portfolio I created during my bootcamp study period",
    tools: "HTML, CSS, JS",
    codeLink: "https://github.com/Gohar33/Gohar33.github.io",
    projectLink: "https://gohar33.github.io/index.html",
  },
];

export default function Cards() {
  return (
    <div>
      <h2 className="title" id="projects">
        some <span className="color">projects</span> worth to consider
      </h2>
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <Card>
                <Card.Img variant="top" src={card.img} className="card-img" />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{card.tools}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={card.codeLink} target="_blank">
                    Code Link
                  </Card.Link>
                  <Card.Link href={card.projectLink} target="_blank">
                    Project Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
