import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const [fetchData, setFetchData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDocument = async () => {
      const realData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setFetchData(realData.data);
    };

    fetchDocument();
  }, []);

  const { title, body } = fetchData;

  return (
    <>
      <h1>Details page for post: {id} </h1>
      <div className="card">
        <div className="card-title">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}
