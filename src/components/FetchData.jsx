import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchData() {
  const [document, setDocuments] = useState([]);

  console.log(document);

  useEffect(() => {
    const fetchDocument = async () => {
      const realData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      setDocuments(realData.data);
    };

    fetchDocument();
  }, []);

  return (
    <>
      <h1>Fetch data </h1>
      <div className="container">
        <div className="row">
          {document.map((item) => {
            return (
              <>
                <div className="col-4">
                  <div
                    className="card"
                    style={{
                      width: "300px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.body}</p>
                      <Link
                        to={`/details/${item.id}`}
                        className="btn btn-primary"
                      >
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
