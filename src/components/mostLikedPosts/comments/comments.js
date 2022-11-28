import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import styles from './comments.module.css';

function Comments() {
  const [data, setData] = useState({});
  useEffect(() => {
    const likes = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json'
      );
      // console.log(response.data);
      setData(response.data);
    };
    likes();
  }, []);

  const location = useLocation();
  // Object.keys(data).length !== 0 && console.log(data);
  // console.log(location.pathname.split('/')[2]);

  return (
    <div>
      {Object.keys(data).length !== 0 &&
        data.posts.map((item) => {
          if (item.id === location.pathname.split('/')[2])
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
                  {/* <div className={styles.comments}> */}
                </div>
                <div className={styles.comment}>
                  Comments :
                  {Object.keys(data).length !== 0 &&
                    data.comments.map((comment) => {
                      if (comment.postId == item.id)
                        return (
                          <div>
                            <img
                              alt=""
                              src={data.authors.map((author) => {
                                if (author.id === comment.authorId) {
                                  return `https://joeschmoe.io/api/v1/${
                                    author.firstName + ' ' + author.lastName
                                  }`;
                                }
                              })}
                            />
                            {comment.text}
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
