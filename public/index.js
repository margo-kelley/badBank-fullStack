function Spa() {
  const Route = ReactRouterDOM.Route;
  const HashRouter = ReactRouterDOM.HashRouter;

  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              id: 1,
              name: "peter",
              email: "peter@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/dash/" component={Dash} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
