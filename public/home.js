function Home(){
  const ctx = React.useContext(UserCtx);
  return (
    <>
      {/* {ctx ? ( */}
        <div className="container-fluid">
          <p className="page-head">Welcome to BADBANK</p>
          <br />
          <div className="options">
            <Link to="/logout/">
            <button className="btn btn-light">LOGOUT</button>
            </Link>
          </div>
          <br />
          <br />
          <Card
            body={
              <img
                src="bank.png"
                className="rounded mx-auto d-block"
                alt="Responsive image"
              />
            }
          />
        </div>
       {/* ) : ( */}
        <div className="container-fluid">
          <p className="page-head">Welcome to BADBANK</p>
          <br />
          <br />
          <div className="options">
            <Link to="/login/">
              <button className="btn btn-light">LOGIN</button>
            </Link>
            <p id="p">or</p>
            <Link to="/createaccount/">
              <button className="btn btn-light">CREATE ACCOUNT</button>
            </Link>
          </div>
          <br />
          <Card
            body={
              <img
                src="bank.png"
                className="rounded mx-auto d-block"
                alt="Responsive image"
              />
            }
          />
        </div>
      {/* )} */}
    </>
  );
}
