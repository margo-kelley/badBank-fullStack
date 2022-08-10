function NavBar(props){
  const ctx = React.useContext(UserCtx);

  // conditional render: navbar logged out
  React.useEffect(() => {
    const createaccount = document.getElementById('nav-createaccount');
    const login = document.getElementById('nav-login');
    const logout = document.getElementById('nav-logout');
    const deposit = document.getElementById('nav-deposit');
    const withdraw = document.getElementById('nav-withdraw');
    const alldata = document.getElementById('nav-alldata');

    createaccount.style.display = "block";
    login.style.display = "block";
    logout.style.display = "none";
    deposit.style.display = "none";
    withdraw.style.display = "none";
    alldata.style.display = "none";
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BADBANK
          </a>
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-createaccount"
                href="#/CreateAccount/"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-login" href="#/login/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-logout" href="#/logout/">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-deposit" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-withdraw" href="#/withdraw/">
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-alldata" href="#/alldata/">
                All Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

