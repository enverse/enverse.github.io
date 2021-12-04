import { Fragment, h } from "preact";
import { useState } from "preact/hooks";

import referralData from "./referral-data";

import "./index.css";

// function renderText(index: number) {
//   if (index )
// }

export default function Carrousel() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

  const { referral: currentReferral, project } =
    referralData[selectedCardIndex];

  return (
    <Fragment>
      <div className="carousel-tetimonials__container-row">
        <div className="carousel-testimonials__referers-container">
          {referralData.map(({ referrer }, index) => (
            <Fragment>
              <div
                className={`carousel-testimonials__referer-card ${
                  selectedCardIndex === index ? "selected" : ""
                }`}
                onClick={() => setSelectedCardIndex(index)}
              >
                <div className="carousel-testimonials__referer-img-container column">
                  <img src={referrer.company.logoUrl} />
                </div>
                <div className="column">
                  <p>
                    <b>
                      {referrer.firstName} {referrer.lastName}
                    </b>
                  </p>
                  <p>{referrer.position}</p>

                  <p>{referrer.company.name}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="carousel-testimonials__referral-container">
          <h2>{currentReferral.title}</h2>
          {currentReferral.referralText}
        </div>
        <div className="carousel-testimonials__project-image">
          {project && (
            <a href={project.projectUrl} target="_blank">
              <img src={project.appLogoUrl} />
            </a>
          )}
        </div>

        {/* <div className="carousel-testimonials__referers-container">
          <div
            className={`carousel-testimonials__referer-card ${
              selectedCardIndex === 0 ? "selected" : ""
            }`}
            onClick={() => setSelectedCardIndex(0)}
          >
            <div className="carousel-testimonials__referer-img-container column">
              <img src="/assets/image/unops-logo.jpg" />
            </div>
            <div className="column">
              <p>
                <b>Charlotte Hallvist</b>
              </p>
              <p>Director of Operations</p>

              <p>UNOPS</p>
            </div>
          </div>
          <div
            className={`carousel-testimonials__referer-card ${
              selectedCardIndex === 1 ? "selected" : ""
            }`}
            onClick={() => setSelectedCardIndex(1)}
          >
            <div className="carousel-testimonials__referer-img-container column">
              <img src="/assets/image/socious-logo.png" />
            </div>
            <div className="column">
              <p>
                <b>Seira Yun</b>
              </p>
              <p>Founder & CEO</p>
              <p>Socious</p>
            </div>
          </div>
          <div
            className={`carousel-testimonials__referer-card ${
              selectedCardIndex === 2 ? "selected" : ""
            }`}
            onClick={() => setSelectedCardIndex(2)}
          >
            <div className="carousel-testimonials__referer-img-container column">
              <img src="/assets/image/heretique-logo.png" />
            </div>
            <div className="column carousel-testimonials__referer-text">
              <p>
                <b>Kévin Egharia</b>
              </p>
              <p>Founder & CEO</p>

              <p>Hérétique</p>
            </div>
          </div>
        </div>
        <div className="carousel-testimonials__referral-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren. Ipsum dolor sit amet. Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr !
        </div>
        <div>img</div> */}
      </div>
      {/* <div className="carousel-tetimonials__container-row">
        <div className="carousel-testimonials__referer-container">
          <div className="carousel-testimonials__referer-img-container">
            <img src="/assets/image/socious-logo.png" />
          </div>
          <p>
            <b>Name</b>
          </p>
          <p>Company</p>
        </div>
        <div className="column">
          <p>
            marfa hashtag leggings. Pabst hot <b>chicken kale</b> chips fanny
            pack ethical.
          </p>
        </div>
        <div className="column">img</div>
      </div>
      <div className="carousel-tetimonials__container-row">
        <div className="carousel-testimonials__referer-container">
          <div className="carousel-testimonials__referer-img-container">
            <img src="/assets/image/heretique-logo.png" />
          </div>
          <p>
            <b>Name</b>
          </p>
          <p>Company</p>
        </div>
        <div className="column">
          <p>
            marfa hashtag leggings. Pabst hot <b>chicken kale</b> chips fanny
            pack ethical.
          </p>
        </div>
        <div className="column">img</div>
      </div> */}
    </Fragment>
  );
}
