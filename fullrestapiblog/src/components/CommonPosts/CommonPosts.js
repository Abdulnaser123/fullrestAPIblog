import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CommonPosts.css";

const CommonPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json"
      )
      .then((res) => {
        const result = res.data.posts.slice(0, 20);
        console.log(result);
        setPosts([result]);
      })
      .catch((err) => console.log("there is an error", err));
  }, []);

  return (
    <div className="Container">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.datePublished}</p>
            <p>{post.numComments}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommonPosts;
