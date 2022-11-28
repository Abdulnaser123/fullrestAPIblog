import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";
import styles from "./style.module.css";
import Filter from "../../components/Filter";
import PostCard from "../../components/PostCard";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState([]);
  const [posts, setPosts] = useState([]); 
  const [author, setAuthor] = useState({}); 
  const [activeButton, setActiveButton] = useState(""); 

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get(
      "https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json"
    );
    // console.log(response, "res");

    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }
  const { authors, posts } = data;
  console.log(posts[0]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.authorCardContainer}>
        <UserCard
          firstName={authors[0].firstName}
          lastName={authors[0].lastName}
          phone={authors[0].phone}
          numPosts={authors[0].numPosts}
          numLikes={authors[0].numLikes}
        />
      </div>
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.filterContainer}>
        <Filter />
      </div>
      <div className={styles.postCardsContainer}>
        <PostCard
          title={posts[0].title}
          date={posts[0].datePublished}
          numLikes={posts[0].numLikes}
        />
      </div>
    </div>
  );
};;

export default ProfilePage;
