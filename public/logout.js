function Logout(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="header">Logout</div>
        <Card
          bgcolor="grey"
          txtcolor="black"
          status={status}
          body={
            show ? (
              <LogoutForm setShow={setShow} setStatus={setStatus} />
            ) : (
              <LogoutMsg setShow={setShow} setStatus={setStatus} />
            )
          }
        />
      </div>
    </>
  )
}

function LogoutMsg(props) {
  return (
    <>
      <h5>Logged Out</h5>
      <Link to="/login/">
      <button className="btn btn-light">LOGIN</button>
      </Link>
        
    </>
  );
}

function LogoutForm(props) {
  const [user, setUser] = React.useState('');
  const ctx = React.useContext(UserCtx);

  function handle() {
  console.log("Logging Out...");
  firebase
  .auth()
  .signOut()
  .then(() => {
    ctx.email = "";
    setUser(null);
    props.setStatus("");
    props.setShow(false);
  })
  
  }

  return (
    <>
      <div className="logout-confirm">
        Do you wish to logout?
        </div>
        <br />
        <br/>
      <button type="submit" className="btn btn-light" onClick={handle}>
        LOGOUT
      </button>
    </>
  );
}