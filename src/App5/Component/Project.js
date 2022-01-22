import React from "react";
import "../Component Css/Project.css";


export default function Project() {
  return (
    <>
      <div className="container-fluid project-container py-3" id="Project">
        <h1 className="project-title">Projects</h1>
        <div className="row mx-auto">
    

          <a
            href="https://animedata-2b628.web.app"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Anime Data
          </a>
          <a
            href="https://todo-24fa6.web.app"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Todo App
          </a>
          <a
            href="https://raj-27.github.io/BookList/"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Add book to List
          </a>
          <a
            href="https://raj-27.github.io/githubFinder/"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Github Finder
          </a>
          <a
            href="https://raj-27.github.io/formValidation/"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Form Validation
          </a>
          <a
            href="https://raj-27.github.io/Slider/"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Slider
          </a>
          <a
            href="https://raj-27.github.io/Modal/"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Modal
          </a>
          <a
            href="https://raj-27.github.io/cardFlipper/"
            target="_blank"
            className="col-lg-3 col-md-5 col-sm-5 col-12 project-box bg"
          >
            Card Flipper
          </a>
        </div>
      </div>
    </>
  );
}
