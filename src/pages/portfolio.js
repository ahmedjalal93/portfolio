import React from "react";
import Container from "../compouneds/container";
import Figure from "../compouneds/figure";


function Portfolio() {
  return (
      <Container>
        <h2>Portfolio</h2>
        <h4><a href="https://github.com/ahmedjalal93/" target="_blank">Github</a></h4>
        <h4><a href="resume.pdf" target="_blank">Resume</a></h4>
        <h4><a href="https://www.linkedin.com/in/ahmed-jalal-781530188" target="_blank">LinkedIn</a></h4>
        <hr/>
        <h2>Projects</h2>
          <Figure>
            <a href="work5/index.html">
                <figcaption className="figure-caption">Weather API</figcaption>
                <img src={`${process.env.PUBLIC_URL}/img/weather.png`} class="rounded" alt="Weather API"/>
            </a>
          </Figure>
          <Figure>
            <a href="project1/index.html">
                <figcaption className="figure-caption">Stock Market</figcaption>
                <img src={`${process.env.PUBLIC_URL}/img/project1.png`} class="rounded" alt="Stock Market"/>
            </a>
          </Figure>
          <Figure>
            <a href="https://peaceful-scrubland-88128.herokuapp.com/dash">
                <figcaption className="figure-caption">Story Lines</figcaption>
                <img src={`${process.env.PUBLIC_URL}/img/project2.png`} class="rounded" alt="Story Lines"/>
            </a>
          </Figure>
          <Figure>
            <a href="work5/index.html">
                <figcaption className="figure-caption">Work Scheduler</figcaption>
                <img src={`${process.env.PUBLIC_URL}/img/calender.png`} class="rounded" alt="work Scheduler"/>
            </a>
          </Figure>
          <Figure>
            <a href="https://budget-tracker-aj93.herokuapp.com/">
                <figcaption className="figure-caption">Budget Tracker</figcaption>
                <img src={`${process.env.PUBLIC_URL}/img/budgettracker.png`} class="rounded" alt="Budget Tracker"/>
            </a>
          </Figure>
          <Figure>
            <a href="https://userdirecory-aj93.herokuapp.com/">
                <figcaption className="figure-caption">User Directory</figcaption>
                <img src={`${process.env.PUBLIC_URL}/img/userdirectory.png`} class="rounded" alt="User Directory"/>
            </a>
          </Figure>
      </Container>
    );
}


export default Portfolio;
