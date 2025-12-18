import React from 'react';
import styles from './topHeader.module.css';
// Import icons if you have them (e.g., from lucide-react or font-awesome)
import { Clock, MapPin, Contact } from 'lucide-react'; 

const TopHeader = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        {/* Left Side: Info */}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <Clock size={14} className={styles.icon} />
            <span>Working: Monday -Friday 9 AM - 5PM</span>
          </div>
          <div className={styles.infoItem}>
            <MapPin size={14} className={styles.icon} />
            <span>121 King St, Melbourne VIC 3000</span>
          </div>
        </div>

        {/* Right Side: Auth Links */}
        <div className={styles.auth}>
          <Contact size={14} className={styles.icon} />
          <a href="/login">Login</a>
          <span className={styles.divider}>/</span>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;