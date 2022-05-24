import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';

import referralData from './referral-data';

import './index.css';

// function renderText(index: number) {
//   if (index )
// }

export default function Carrousel() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

  const { referral: currentReferral, project } = referralData[selectedCardIndex];

  return (
    <Fragment>
      <div className="carousel-tetimonials__container-row">
        <div className="carousel-testimonials__referers-container">
          {referralData.map(({ referrer }, index) => (
            <div
              className={`carousel-testimonials__referer-card ${selectedCardIndex === index ? 'selected' : ''}`}
              onClick={() => setSelectedCardIndex(index)}
            >
              <div className="carousel-testimonials__referer-img-container column">
                <img width="72" height="72" alt={referrer.company.name} src={referrer.company.logoUrl} />
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
          ))}
        </div>
        <div className="carousel-testimonials__referral-container">
          <h2>{currentReferral.title}</h2>
          <div class="carousel-testimonials__referral-text-container">
            <div class="carousel-testimonials__referral-quotes-container">
              <i class="fas fa-quote-left"></i>
            </div>
            <p dangerouslySetInnerHTML={{ __html: currentReferral.referralText }} />
            <div class="carousel-testimonials__referral-quotes-container">
              <i class="fas fa-quote-right"></i>
            </div>
          </div>
        </div>
        <div className="carousel-testimonials__project-image">
          {project && (
            <a href={project.projectUrl} target="_blank">
              <img alt={project.projectUrl} width="220" height="393" src={project.appLogoUrl} />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
}
