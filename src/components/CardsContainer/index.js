import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import AuthorCard from "../AuthorCard";
const CardsContainer = () => {
  const [Authors, setAuthors] = useState([]);
  const [AuthorsList, setAuthorsList] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(20);
  const [fullFlag, setFullFlag] = useState(false);

  useEffect(() => {
    console.log("inside use effect");
    let ignore = false;
    axios
      .get(
        "https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json"
      )
      .then((res) => {
        if (!ignore) {
          console.log(res.data.authors);
          setAuthors(res.data.authors);
          setAuthorsList(res.data.authors.slice(0, 20));
          console.log("!ignore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      ignore = true;
      console.log("ignore");
    };
  }, []);

  const LoadingMoreProducts = () => {
    setItemsNumber(itemsNumber + 9);
    let sliceArray = [...Authors].slice(0, itemsNumber + 20);
    setAuthorsList(sliceArray);
    console.log(sliceArray.length);
    if (sliceArray.length === Authors.length) {
      setFullFlag(true);
    }
  };
  return (
    <>
      <div className={styles.CardsContainer}>
        {AuthorsList.map((item) => {
          return (
            <>
              <AuthorCard firstName={item.firstName} lastName={item.lastName} />
            </>
          );
        })}
      </div>
      <button className={styles.ShowMore} onClick={LoadingMoreProducts} id={fullFlag? styles.hidden:""}>
        Show more authors
      </button>
    </>
  );
};

export default CardsContainer;
