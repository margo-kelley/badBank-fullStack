function Spa() {
  const Route = ReactRouterDOM.Route;
  const HashRouter = ReactRouterDOM.HashRouter;
  const [user, setUser] = React.useState({});

  return (
    <HashRouter>
      {/* <UserCtx.Provider value={UserCtx}> */}
        <NavBar setUser={setUser} user={user} />
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/logout/" component={Logout} />
          {/* <Login setUser={setUser}/> */}
        <Route path="/deposit/" component={Deposit} />
          {/* <Deposit user={user}/> */}
        <Route path="/withdraw/" component={Withdraw} />
          {/* <Withdraw user={user} /> */}
        <Route path="/dash/" component={Dash} />
      {/* </UserCtx.Provider> */}
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));