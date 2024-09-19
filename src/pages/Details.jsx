import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [data, setData] = useState({});
  const { userDetails } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const mainData = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userDetails}`
        );
        setData(mainData.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [userDetails]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h2 className="my-3 pb-5 text-center">User Details : </h2>
              <div className="card border-0 bg-black p-5 text-white">
                <div className="card-title">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    ID
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {userDetails}
                    </span>
                  </button>
                </div>

                <h5 className="card-title">
                  {data?.name || "Name not available"}
                </h5>
                <h6 className="card-subtitle mb-2 text-danger">
                  {data?.email || "Email not available"}
                </h6>
                <p className="card-text">
                  {data?.address?.suite || "Address not available"}
                </p>
                <p className="card-text">
                  {data?.phone || "Phone not available"}
                </p>
                <p className="card-text">
                  {data?.company?.bs || "Company not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
