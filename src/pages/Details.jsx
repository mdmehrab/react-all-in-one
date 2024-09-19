export default function Details() {
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
                      12
                    </span>
                  </button>
                </div>

                <h5 className="card-title">dfgfd</h5>
                <h6 className="card-subtitle mb-2 text-danger">dsfds</h6>
                <p className="card-text">sdfds</p>
                <p className="card-text">sdfds</p>
                <p className="card-text">sdfdsf</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
