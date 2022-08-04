function AllData(){
  const [data, setData] = React.useState([]);
  const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setData(JSON.stringify(data));
              setUsers(Object.entries(data));
            });
    }, []);

    return (
      <>
        <div className="container-fluid">
          <p className="header">User Dashboard</p>
          <div className="card-body">

            <div className="container text-center">
              <div className="row row-cols-3">
                <div className="col">
                {users.map((users, index) => {
                return (
                  <ul>
                    <li><strong>Name:</strong> {users.name}</li>
                    <li key={index}><strong>Email:</strong> {users.email}</li>
                    <li><strong>Password:</strong> {users.password}</li>
                    <li><strong>Balance:</strong> {users.balance}</li>
                  </ul>
                );
              })}
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          {data}
        </div>
      </>
    );
}
