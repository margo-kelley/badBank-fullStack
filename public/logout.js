function Logout() {
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
      <h5>Username: Logged Out</h5>
        <button className="btn btn-light">LOGIN</button>
    </>
  );
}

function LogoutForm(props) {

  function handle() {
  firebase.auth().signOut();
  fetch( `/account/logout/:email/:password`)
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