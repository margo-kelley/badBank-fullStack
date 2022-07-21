function NavBar(){
  return (
    <>
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
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/">
                  All Data
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}