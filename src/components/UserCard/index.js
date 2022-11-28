import React, { useState, useEffect } from "react";
import styles from "./style.module.css";




const UserCard = ({
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
          src={`https://joeschmoe.io/api/v1/${firstName + " " + lastName}`}
          alt=""
        />
        <h1 className={styles.authorName}>{firstName + " " + lastName}</h1>
        <p className={styles.mobile}>mobile : {phone}</p>
        <p className={styles.posts}>posts : {numPosts}</p>
        <p className={styles.likes}>likes : {numLikes}</p>
      </div>
    // </div>
  );
};

export default UserCard;
