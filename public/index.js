function Spa(props) {
  const Route = ReactRouterDOM.Route;
  const HashRouter = ReactRouterDOM.HashRouter;

  // router
  return (
    <HashRouter>
      <UserCtx.Provider value={{user: [{name:"", email:"", password:""}]}}>
        <NavBar/>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/logout/" component={Logout} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      </UserCtx.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));