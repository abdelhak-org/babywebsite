// About.js
import React from 'react';
import imagetwo from '../assets/imagetwo.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="image-section">
        <img src={imagetwo} alt="Image" className="image" />
        <p className="image-caption">
          <span className="bold-text">Welcome to our website all about babies!</span>
          <br />
          First and foremost, it's important to make sure your baby is healthy and happy. Regular doctor visits and vaccinations are essential, and we'll provide you with information and resources to help you keep your baby in top form. When it comes to feeding time, whether you're breastfeeding or bottle-feeding, we'll provide you with the information you need to ensure your baby gets the right nutrients.
        </p>
      </div>

      <div className="content-section">
        <h3 className="section-heading">The Happiness of New Parents!</h3>
        <p className="section-content">
          Welcome to our website all about babies! Whether you're an expectant parent or simply love learning about the joys and challenges of parenting, you've come to the right place. Here, we aim to provide you with the latest information and resources to help you care for your little one at every step.
          <br />
          Babies are amazing creatures and bring so much joy and wonder into our lives. From their first smile to their first steps, there are countless milestones to look forward to. As much as we love these precious moments, we also know that caring for a baby can be tough. That's why we're here to help!
        </p>
      </div>
    </div>
  );
};

export default About;
