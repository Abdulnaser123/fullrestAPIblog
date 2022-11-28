import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./comments.module.css";
function Comments() {
  const [data, setData] = useState({});
  useEffect(() => {
    const likes = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json"
      );
      setData(response.data);
    };
    likes();
  }, []);

  const location = useLocation();

  return (
    <div>
      {Object.keys(data).length !== 0 &&
        data.posts.map((item) => {
          if (item.id === location.pathname.split("/")[2])
            return (
              <>
                <div className={styles.profile}>
                  <div className={styles.title}>{item.title}</div>
                  <div>{item.description}</div>
                  <div>
                    Data Published :
                    {new Date(item.datePublished).toLocaleDateString()}
                  </div>
                  {data.authors.map((author) => {
                    if (author.id === item.id)
                      return <div> Author Name : {author.firstName}</div>;
                  })}
                  <div>{item.numLikes} Likes</div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.CommentTitle}>Comments :</div>
                  {Object.keys(data).length !== 0 &&
                    data.comments.map((comment) => {
                      if (comment.postId == item.id)
                        return (
                          <div className={styles.CommentSection}>
                            {data.authors.map((author) => {
                              return author.id == comment.authorId ? (
                                <img
                                  className={styles.CommentImage}
                                  src={`https://joeschmoe.io/api/v1/${
                                    author.firstName + " " + author.lastName
                                  }`}
                                />
                              ) : (
                                <></>
                              );
                            })}
                            <span className={styles.Arrow}></span>{" "}
                            <div className={styles.CommentText}>
                              {" "}
                              {comment.text}
                            </div>
                          </div>
                        );
                    })}
                </div>
              </>
            );
        })}
    </div>
  );
}

export default Comments;
