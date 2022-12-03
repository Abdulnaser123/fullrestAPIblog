import React, {useEffect, useState} from 'react';
import './CommonPosts.css';
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
    <div className="layout">
      <div className="Container">
        {posts.map((post) => {
          return (
            <div key={post.id} className="lines">
              <h3 className="title">{post.title}</h3>
              <p className="date">{post.datePublished}</p>
              <p className="comments">{post.numComments} comments</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonPosts;
