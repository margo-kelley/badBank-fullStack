function AllData(){
    const [data, setData] = React.useState('');
    const ctx = React.useContext(UserCtx);

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });
    }, []);

    return (
      <>
        <div className="container-fluid">
          <p className="header">User Dashboard</p>
          {/* works until logged in? */}
          {ctx.user.map((user)=>{
            return (
              <div><li>{user.name}</li></div>
            )
          })}
          {data}
        </div>
      </>
    );
}
