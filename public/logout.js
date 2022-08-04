function Logout(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  // conditional render: cards
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
  // conditional render: navbar logged out
  React.useEffect(() => {
    const createaccount = document.getElementById("nav-createaccount");
    const login = document.getElementById("nav-login");
    const logout = document.getElementById("nav-logout");
    const deposit = document.getElementById("nav-deposit");
    const withdraw = document.getElementById("nav-withdraw");
    const alldata = document.getElementById("nav-alldata");

    createaccount.style.display = "block";
    login.style.display = "block";
    logout.style.display = "none";
    deposit.style.display = "none";
    withdraw.style.display = "none";
    alldata.style.display = "none";
  }, []);

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
  // firebase sign out
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