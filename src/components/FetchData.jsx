import axios from "axios";
import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setUserInfo(res.data);
    };

    getData();
  }, []);

  const renderedData = userInfo.slice(0, 10)?.map((item) => {
    const { id, title, url, albumId, thumbnailUrl } = item;

    return (
      <div className="col-4" key={id}>
        <div className="card">
          <img src={thumbnailUrl} alt={title} height="300" />
          <div className="card-body">
            <h5 className="card-title">Album ID: {albumId}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{title}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {/* Render the mapped data */}
            {renderedData}
          </div>
        </div>
      </section>
    </>
  );
};
