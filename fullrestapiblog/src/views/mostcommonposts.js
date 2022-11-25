import React, { useEffect } from "react";
import axios from "axios";
const Mostcommonposts = () => {
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/MohitSojitra/react-blog-website/master/src/utils/db.json"
      )
      .then((res) => {
        console.log(res.data);
      });
  });
  return <div>mostcommonposts</div>;
};

export default Mostcommonposts;
