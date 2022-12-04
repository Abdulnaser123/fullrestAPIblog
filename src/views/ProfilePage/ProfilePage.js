import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import UserCard from "../../components/UserCard";
import styles from "./style.module.css";
import Filter from "../../components/Filter";
import PostCard from "../../components/PostCard";
import PostsList from "../../components/PostsList";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState([]);
  const [activeButton, setActiveButton] = useState("");

  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get(
      "https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json"
    );
    // console.log(response, "res");

    setData(response.data);
    setAuthor(response.data.authors);
    setPosts(response.data.posts);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // Sorting By Assending Date
  const ascDate = useCallback(() => {
    setActiveButton("ascDate");
    let data = posts;

    // bubble sort for shorting time complexity = O(n * n)
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].datePublished > data[j + 1].datePublished) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }

    setPosts([...data]);
  }, [posts]);
  // Sorting By decending Date
  const dscDate = useCallback(() => {
    setActiveButton("dscDate");
    let data = posts;

    // bubble sort for shorting time complexity = O(n * n)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].datePublished > data[j + 1].datePublished) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
    setPosts([...data.reverse()]);
  }, [posts]);

  // Sorting By Assending Like
  const ascLike = useCallback(() => {
    setActiveButton("ascLike");
    let data = posts;

    // bubble sort for shorting time complexity = O(n * n)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].numLikes > data[j + 1].numLikes) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }

    setPosts([...data]);
  }, [posts]);

  // Sorting By decending Like
  const dscLike = useCallback(() => {
    setActiveButton("dscLike");
    let data = posts;

    // bubble sort for shorting time complexity = O(n * n)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].numLikes > data[j + 1].numLikes) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }

    setPosts([...data.reverse()]);
  }, [posts]);

  const location = useLocation();
 const authorId=location.pathname.split("/")[2];

  if (isFetch) {
    return "Data is Loading ...";
  }

  console.log("posts", posts.slice(0, 2));
  console.log("author", author.slice(0, 2));
  // console.log("iddddd",author.id);
const item = author.find((i) => i.id === authorId);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.authorCardContainer}>
        <UserCard {...item} />
      </div>
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.filterContainer}>
        <Filter
          activeButton={activeButton}
          ascDate={ascDate}
          dscDate={dscDate}
          ascLike={ascLike}
          dscLike={dscLike}
        />

        <PostsList authorId={item.id} posts={posts} />
      </div>
    </div>
  );
};

export default ProfilePage;
