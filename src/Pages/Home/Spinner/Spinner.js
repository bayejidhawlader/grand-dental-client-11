import React, { useEffect, useState } from "react";
import axios from "axios";
import Services from "../Services/Services";

const Spinner = () => {
  const [loader, setLoader] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://lawyer-website-server.vercel.app/services`)
      .then((res) => {
        setLoader(res.data);
        setLoading(true);
      });
  }, []);
  console.log(loader);
  console.log(loading);

  return (
    <div>
      {loading
        ? loader.map((loader) => {
            return <sss key={loader.id} loader={loader}></sss>;
          })
        : loading}
    </div>
  );
};

export default Spinner;
