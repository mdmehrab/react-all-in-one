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
            {userInfo?.length > 0 ? (
              userInfo?.map((user) => (
                <>
                  <div className="col-4 my-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">{user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          {user.email}
                        </h6>
                        <p class="card-text">{user.address.street}</p>
                        <p class="card-text">{user.address.suite}</p>
                        <p class="card-text">{user.phone}</p>
                        <p class="card-text">
                          {user.company.bs || "any company"}
                        </p>
                        <Link to={`/details/${user.id}`} class="card-link">
                          User Details
                        </Link>
                        <Link to="#" class="card-link text-uppercase">
                          Album
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <p className="text-center text-danger">No Data Found!</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FetchData;
