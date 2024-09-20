import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <h2 className="text-center py-5">Fetch Data</h2>
          <div className="row">
            {userInfo.map((user) => {
              const {
                id,
                name,
                email,
                company: { name: companyName, bs },
              } = user;

              return (
                <>
                  <div className="col-4 my-2" key={id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{companyName}</p>

                        <Link to={`/details/${id}`} className="card-link">
                          User Details
                        </Link>
                        <Link to="#" className="card-link text-uppercase">
                          Album
                        </Link>
                      </div>
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
