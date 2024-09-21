import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchData() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUserInfo(res.data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-center py-5">Fetch Data</h2>
          <div className="row">
            {userInfo.map((user) => {
              const {
                id,
                name,
                email,
                company: { name: companyName },
              } = user;
              return (
                <div className="col-4 my-2" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Company: {companyName}
                      </h6>
                      <p className="card-text">{email}</p>
                      <Link to={`/details/${id}`} className="card-link">
                        User Details
                      </Link>
                      <Link to="#" className="card-link text-uppercase">
                        Album
                      </Link>
                    </div>
                    <div className="card-header">Featured</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{user.id}</li>
                      <li className="list-group-item">{user.name}</li>
                      <li className="list-group-item">{user.username}</li>
                      <li className="list-group-item">{user.email}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FetchData;
