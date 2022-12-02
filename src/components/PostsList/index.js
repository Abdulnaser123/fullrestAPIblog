import React,{useEffect} from 'react'
import styles from './style.module.css'
import PostCard from '../PostCard';

const PostsList = ({ authorId, posts }) => {
    // console.log("first",authorId);
    const up = posts.filter((item) => {
      if (item.authorId === authorId) {
        console.log("user posts: ", item.authorId);
        return item.authorId;
      }
    });
    
  // get individual user by userId
  const getPostAuthor = (authorId) => {
    posts.filter((item) => {
      if (item.authorId === authorId) {
        console.log("user posts: ",item.authorId);
        return item.authorId;
      }
    });
    };
    // const id = getPostAuthor(authorId);
    const userPosts = posts.slice(0, 10);
    console.log("userrrrrrrr:",userPosts);
  return (
    <div className={styles.postCardsContainer}>
      <ul >
        {posts.length === 0 ? (
          <h1 >loading.... </h1>
        ) : (
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                numLikes={post.numLikes}
                date={post.datePublished}
                id={post.id}
              />
            );
          })
        )}
      </ul>
    </div>
  );
}

export default PostsList