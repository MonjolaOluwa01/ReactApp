import React from 'react';
import styles from './hero.module.css';
import heroGirl from "../../../assets/images/thumb-1-2.png"
import heroOrange from "../../../assets/images/orangeBorder.png"
import heroBoy from "../../../assets/images/thumb-1-1.png"
import badgeCourse from "../../../assets/images/badgeCourses.png"
import badgeStudent from "../../../assets/images/badgeStudents.png"


const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        {/* Left Side Content */}
        <div className={styles.content}>
          <p className={styles.subtitle}>Learn & Get Certificates</p>
          <h1 className={styles.title}>
            Free Online Courses <br />
            With Certificates & <br /> Diplomas
          </h1>
          <p className={styles.description}>
            25 million Learners. 15 years. 100%.
          </p>
          
          <div className={styles.searchBar}>
            <input type="text" placeholder="What do you want to learn?" />
            <button className={styles.searchBtn}>Search</button>
          </div>
        </div>

        <div className={styles.visuals}>
          <div className={styles.imageCircleMain}>
            <img src={heroOrange} className={styles.orangeFrame} alt="Hero Border" />
            <img src={heroGirl} className={styles.heroGirl} alt="Hero Background" />
          </div>
          <div className={styles.imageCircleBoy}>
            <img src={heroOrange} className={styles.orangeFrameBoy} alt="Hero Border" />
            <img src={heroBoy} className={styles.heroBoy} alt="Hero Boy" />
          </div>
            <div className={`${styles.badge} ${styles.badgeTop}`}>
                <img src={badgeStudent} alt= "Students"></img>
            </div>
            <div className={`${styles.badge} ${styles.badgeBottom}`}>
                  <img src={badgeCourse} alt="Courses"></img>
            </div>
        </div>
  
      </div> 
    </section>
  );
};

export default Hero;