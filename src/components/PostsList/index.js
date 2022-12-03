import React, { useEffect } from "react";
import styles from "./style.module.css";
import PostCard from "../PostCard";
import { Link } from "react-router-dom";

const PostsList = ({ authorId, posts }) => {
  // console.log("first",authorId);
  const userPost = posts.filter((post) => post.authorId == authorId);

  // const id = getPostAuthor(authorId);
  const userPosts = posts.slice(0, 10);
  console.log("userrrrrrrr:", userPost);
  return (
    <div className={styles.postCardsContainer}>
      <ul>
        {userPost.length === 0 ? (
          <h1>loading.... </h1>
        ) : (
          userPost.map((post) => {
            return (
              <Link className={styles.mainContainer} to={`/Profile/${post.id}`}>
                <PostCard
                  key={post.id}
                  title={post.title}
                  numLikes={post.numLikes}
                  date={post.datePublished}
                  id={post.id}
                />
              </Link>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default PostsList;
