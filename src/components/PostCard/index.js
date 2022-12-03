import React, { useState } from "react";
import styles from "./style.module.css";

const PostCard = ({
  title,
  description,
  date,
  firstName,
  lastName,
  numLikes,
}) => {
  // const [authorName, setAuthorName] = useState("");

  // setAuthorName(firstName + ' ' + lastName);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.mainContainer}>
        <h3>{title}</h3>
        <p className={styles.postDescription}>{description}</p>
        <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
        <p className={styles.likes}>
          {numLikes} {" Likes"}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
