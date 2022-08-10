function Home(props){

  return (
    <>
        <div className="container-fluid">
          <p className="page-head">Welcome to BADBANK</p>
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
    </>
  );
}
