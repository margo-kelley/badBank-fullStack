function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [acctID, setAcctID] = React.useState(null);

  function getID() {
    const acctID = function() {
      return Math.random().toString().slice(2, 11);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className="header">Create Account</h1>
        <Card
          bgcolor="grey"
          txtcolor="black"
          status={status}
          body={
            show ? (
              <CreateForm setShow={setShow} />
            ) : (
              <CreateMsg setShow={setShow} />
            )
          }
        />
      </div>
    </>
  );
}

function CreateMsg(props){
  return (
    <>
      <div className="container-fluid">
        <h2 className="success-head">
          Success! Welcome to BADBANK. Your Account ID number is -acctID-
        </h2>
        <br/>
        <br/>
        <Link to ="/login/">
        <button className="btn btn-light">LOGIN</button>
        </Link>
      </div>
    </>
  );
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserCtx);

  function handle(){
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log(`${user}`);
    })
    .catch((error) => {
      console.log(error);
    })

    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();
        console.log(data);
    })();
    ctx.user = {name: name, email: email };
    props.setShow(false);

    // setTimeout(() => {
    //   window.location.replace('/login/');
    // }, 5000);
  }

  return (
    <>
        Name
        <br />
        <input
          type="input"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <br />
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          id="email"
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
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <button type="submit" className="btn btn-light" onClick={handle}>
        CREATE ACCOUNT
        </button>
    </>
  );
}