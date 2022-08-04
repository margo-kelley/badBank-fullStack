function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="header">Login</div>
        <Card
          bgcolor="grey"
          txtcolor="black"
          status={status}
          body={
            show ? (
              <LoginForm setShow={setShow} setStatus={setStatus} />
            ) : (
              <LoginMsg setShow={setShow} setStatus={setStatus} />
            )
          }
        />
      </div>
    </>
  );
}

function LoginMsg(props) {
  const ctx = React.useContext(UserCtx);

  React.useEffect(() => {
          const createaccount = document.getElementById("nav-createaccount");
          const login = document.getElementById("nav-login");
          const logout = document.getElementById("nav-logout");
          const deposit = document.getElementById("nav-deposit");
          const withdraw = document.getElementById("nav-withdraw");
          const alldata = document.getElementById("nav-alldata");

          createaccount.style.display = "none";
          login.style.display = "none";
          logout.style.display = "block";
          deposit.style.display = "block";
          withdraw.style.display = "block";
          alldata.style.display = "block";
        }, []);

  return (
    <>
      <h5>Success! Welcome back, {ctx.user.email}.</h5>
      <br />
      <Link to="/deposit/">
        <button className="btn btn-light">GO TO DEPOSIT</button>
      </Link>
      <br />
      <br />
      <Link to="/withdraw/">
        <button className="btn btn-light">GO TO WITHDRAW</button>
      </Link>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  const ctx = React.useContext(UserCtx);

  function handle() {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        ctx.user = user;
        setUser(user);
        props.setStatus("");
        props.setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // add google login???

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        LOGIN
      </button>
    </>
  );
}
