function Home(){
  return (
    <div className="container-fluid">
      <p className="page-head">Welcome to BADBANK</p>
      <p className="page-subtitle">Bad to the Bone</p>
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
