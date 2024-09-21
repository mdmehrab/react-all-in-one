import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUserInfo(res.data);
    };

    getData();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {userInfo.map((user) => {
              return (
                <>
                  <div className="col-4 py-5">
                    <div className="card">
                      <div className="card-header">Featured</div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{user.id}</li>
                        <li className="list-group-item">{user.name}</li>
                        <li className="list-group-item">{user.username}</li>
                        <li className="list-group-item">{user.email}</li>
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FetchData;
