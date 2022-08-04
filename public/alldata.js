function AllData(){
  const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
              // console.log(data);
              setData(data);
            });
    }, []);

    // render page
    return (
      <>
        <div className="container-fluid">
          <p className="header">User Dashboard</p>
          <div className="card-body">
            <div className="container text-center">
              <div className="row row-col">
                <div className="col">
                  {data.map((x, index) => {
                    return (
                      <ul>
                        <li key={index.name}>
                          <strong>Name:</strong> {data[index].name}
                        </li>
                        <li key={index.email}>
                          <strong>Email:</strong> {data[index].email}
                        </li>
                        <li key={index.password}>
                          <strong>Password:</strong> {data[index].password}
                        </li>
                        <li key={index.balance}>
                          <strong>Balance:</strong> ${data[index].balance}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );
}
