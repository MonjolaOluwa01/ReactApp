import React from 'react';
import styles from './about.module.css';
import aboutImg from '../../../assets/images/singleStudent.png';
// import { CheckCircle2 } from 'lucide-react'; // Using lucide for icons

const About = () => {
  const features = [
    "Standard Learning",
    "Best Trainers",
    "Free Health Care",
    "Online Degrees"
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        <div className={styles.imageWrapper}>
          <div className={styles.offsetFrame}></div>
          <div className={styles.imageContainer}>
            <img src={aboutImg} className="studentSingle" alt="Students in Classroom" />
          </div>
        </div>
        
        <div className={styles.content}>
          <span className={styles.subtitle}>About Us</span>
          <h2 className={styles.title}>
            Our Classroom Is A Very Different <span className={styles.highlight}>School</span> Than All The Others
          </h2>
          <p className={styles.description}>
            We provide an environment where students can grow and learn from the best in the industry. Our approach is tailored to modern digital needs.
          </p>

          {/* <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <CheckCircle2 className={styles.icon} size={20} />
                {feature}
              </li>
            ))}
          </ul> */}

          <button className={styles.btn}>Learn More</button>
        </div>

        

      </div>
    </section>
  );
};

export default About;
