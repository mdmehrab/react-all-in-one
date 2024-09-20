import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchData() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-center py-5">Fetch Data</h2>
          <div className="row">
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">[]</h6>
                  <p className="card-text">asfhlf</p>
                  <p className="card-text">dskjflk</p>
                  <p className="card-text">asjclk</p>
                  <Link to={`/details/`} className="card-link">
                    User Details
                  </Link>
                  <Link to="#" className="card-link text-uppercase">
                    Album
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FetchData;
