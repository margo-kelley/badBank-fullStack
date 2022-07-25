function Home(){

  return (
    <div className="container-fluid">
      <p className="page-head">Welcome to BADBANK</p>
      <br/>
      <br/>
      <div className="options">
        <Link to="/login/"><button className="btn btn-light">Login</button></Link><p id="p">or</p><Link to="/createaccount/"><button className="btn btn-light">Create Account</button></Link>
      </div>
      <br/>
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
  );
}
