import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const AuthorCard = ({ firstName, lastName, authorId ,numLikes,numPosts}) => {
  return (
    <div className={styles.AuthorCard}>
      <img
        className={styles.AuthorImage}
        src={`https://joeschmoe.io/api/v1/${firstName + " " + lastName}`}
        alt=""
      />
      <div className={styles.AuthorName}>
        {firstName} {lastName}{" "}
      </div>
      {/* <button className={styles.ProfileButton}>Click to view Profile</button> */}
      <Link
        className="btn btn-primary text-white font-weight-bold"
        to={`/profile/${firstName}`}
        id={authorId}
        firstName={firstName}
        lastName={lastName}
        numLikes={numLikes}
        numPosts={numPosts}
      >
        Click to view Profile
      </Link>
    </div>
  );
};

export default AuthorCard;
