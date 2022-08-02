function NavBar(){
  const ctx = React.useContext(UserCtx);
  const [user, setUser] = React.useState('');

  return (
    <>
      {/* {ctx.user ? ( */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BADBANK
          </a>
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <a className="nav-link" href="#/logout/">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="user-email" href="#/dash/">
                {/* {user.email} */}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* ) : ( */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand mb-1" href="#">
            BADBANK
          </a>
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* )} */}
    </>
  );
}

