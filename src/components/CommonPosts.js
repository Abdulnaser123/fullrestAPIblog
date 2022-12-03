import React, {useEffect, useState} from 'react';
import styles from './CommonPosts.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const CommonPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const res = await axios.get(
        'https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json'
      );
      const newArray = res.data.posts.slice(0, 10);
      setPosts(newArray.sort(compareLikes));
    };

    axiosPosts();
  }, []);
  function compareLikes(a, b) {
    return b.numComments - a.numComments;
  }
  console.log(posts);

  return (
    <>
      {posts.map((item) => (
        <Link to={`/Profile/${item.id}`}>
          <div className={styles.container}>
            <div className={styles.likes}>
              <a href="#-">{item.title}</a>
              <a href="#-">
                {new Date(item.datePublished).toLocaleDateString()}
              </a>
              <a href="#-">Comments {item.numComments}</a>
            </div>
            {/* <div className={styles.comments}>
            <Comments details={allData} id={item.id} />
          </div> */}
          </div>
        </Link>
      ))}
    </>
    // <div className="layout">
    //   <div className="Container">
    //     {posts.map((post) => {
    //       return (
    //         <div key={post.id} className="lines">
    //           <h3 className="title">{post.title}</h3>
    //           <p className="date">{post.datePublished}</p>
    //           <p className="comments">{post.numComments} comments</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default CommonPosts;
