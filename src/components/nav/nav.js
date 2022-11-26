import React from 'react';
import styles from './nav.module.css';
import {Outlet, Link} from 'react-router-dom';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <Link to="/">JSON</Link>
      </div>
      <div className={styles.rightNav}>
        <Link to="/">Authors</Link>
        <Link to="/likes">Most Liked</Link>

        <Link to="/comments">Most Comments</Link>
        {/* <Link to="/">Most Likes</Link> */}
      </div>
    </div>
  );
}

export default Nav;
