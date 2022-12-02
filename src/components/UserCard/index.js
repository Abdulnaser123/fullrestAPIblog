import React, { useState, useEffect } from "react";
import styles from "./style.module.css";




const UserCard = ({
  author,
  firstName,
  lastName,
  phone,
  numPosts,
  numLikes,
}) => {
 
  return (
    // <div className={styles.authorCardContainer}>
    <div className={styles.CardContainer}>
      <img
        className={styles.profileImage}
        src={`https://joeschmoe.io/api/v1/${
          author.firstName + " " + author.lastName
        }`}
        alt=""
      />
      <h1 className={styles.authorName}>
        {author.firstName + " " + author.lastName}
      </h1>
      <p className={styles.mobile}>mobile : {author.phone}</p>
      <p className={styles.posts}>posts : {author.numPosts}</p>
      <p className={styles.likes}>likes : {author.numLikes}</p>
    </div>
    // </div>
  );
};

export default UserCard;
