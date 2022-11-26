import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './Likes.module.css';

function Likes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const likes = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json'
      );
      console.log(response.data);

      let newArray = response.data.posts.slice(0, 10);
      setData(newArray);
    };
    likes();
  }, []);

  function compareLikes(a, b) {
    return b.numLikes - a.numLikes;
  }

  console.log(data.sort(compareLikes));

  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div className={styles.likes}>
          <div>{item.title}</div>
          <div>{new Date(item.datePublished).toLocaleDateString()}</div>
          <div>Likes {item.numLikes}</div>
        </div>
      ))}
    </>
  );
}

export default Likes;
