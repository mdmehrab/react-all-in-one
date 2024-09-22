import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function FetchData() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
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
          <h2 className="text-center py-5" data-aos="slide-right">
            Fetch Data Fetch Data Fetch Data Fetch Data Fetch Data Fetch Data
            Fetch Data Fetch Data Fetch Data
          </h2>
          <div className="row">
            {userInfo.map((user) => {
              const { id, title, body } = user;
              return (
                <div className="col-4 my-2" key={id} data-aos="flip-right">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Company: {body}
                      </h6>
                      <p className="card-text">{id}</p>
                      <Link to={`/details/${id}`} className="card-link">
                        User Details
                      </Link>
                      <Link to="#" className="card-link text-uppercase">
                        Album
                      </Link>
                    </div>
                    <div className="card-header">Featured</div>
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
