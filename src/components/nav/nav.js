import React from 'react';
import styles from './nav.module.css';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <div>JSON</div>
      </div>
      <div className={styles.rightNav}>
        <div>Authors</div>
        <div>Most Likes Posts</div>
        <div>Most Comments Posts</div>
      </div>
    </div>
  );
}

export default Nav;
