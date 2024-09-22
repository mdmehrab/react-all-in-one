import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { userDetails: userId } = useParams(); // Destructure params for clarity
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      setError(false); // Reset error before fetching data
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserData(res.data);
      } catch (error) {
        setError(true); // Set error state if request fails
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [userId]);

  if (error) {
    return (
      <div
        className="text-danger d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        Something went wrong!
      </div>
    );
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h2 className="my-3 pb-5 text-center">User Details</h2>
              <div className="card border-0 bg-black p-5 text-white">
                <div className="card-title">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    ID
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {userId}
                    </span>
                  </button>
                </div>

                <h5 className="card-title">{userData.name}</h5>
                <h6 className="card-subtitle mb-2 text-danger">
                  {userData.username}
                </h6>
                <p className="card-text">{userData.email}</p>
                {userData.address && <p>{userData.address.street}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
