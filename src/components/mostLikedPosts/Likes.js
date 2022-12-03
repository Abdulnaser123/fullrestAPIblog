import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './Likes.module.css';
import Comments from './comments/comments';
import {Link} from 'react-router-dom';

function Likes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const likes = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json'
      );
      // console.log(response.data);
      let newArray = response.data.posts.slice(0, 10);

      setData(newArray.sort(compareLikes));
    };
    likes();
  }, []);

  function compareLikes(a, b) {
    return b.numLikes - a.numLikes;
  }

  // console.log(data.sort(compareLikes));

  // console.log(data);
  // console.log('all data : ', allData);
  return (
    <>
      {data.map((item) => (
        <Link to={`/Profile/${item.id}`}>
          <div className={styles.container}>
            <div className={styles.likes}>
              <a href="#-">{item.title}</a>
              <a href="#-">
                {new Date(item.datePublished).toLocaleDateString()}
              </a>
              <a href="#-">Likes {item.numLikes}</a>
            </div>
            {/* <div className={styles.comments}>
            <Comments details={allData} id={item.id} />
          </div> */}
          </div>
        </Link>
      ))}
    </>
  );
}

export default Likes;
