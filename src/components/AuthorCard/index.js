import React from 'react';
import styles from './styles.module.css';

const AuthorCard = ({firstName, lastName}) => {
  return (
    <div className={styles.AuthorCard}>
      <img
        className={styles.AuthorImage}
        src={`https://joeschmoe.io/api/v1/${firstName + ' ' + lastName}`}
        alt=""
      />
      <div className={styles.AuthorName}>
        {firstName} {lastName}{' '}
      </div>
      <button className={styles.ProfileButton}>Click to view Profile</button>
    </div>
  );
};

export default AuthorCard;
