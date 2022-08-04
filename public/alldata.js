function AllData(){
  const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setData(Object.entries(data));
              console.log(data[0].name);
            });
    }, []);

    // render page
    return (
      <>
        <div className="container-fluid">
          <p className="header">User Dashboard</p>
          <div className="card-body">
            <div className="container text-center">
              <div className="row row-cols-3">
                <div className="col">
                {data.map((data, index) => {
                return (
                  <ul>
                    <li key={index.name}>
                      <strong>Name:</strong> {index.name}
                    </li>
                    <li key={index.email}>
                      <strong>Email:</strong> {index.email}
                    </li>
                    <li key={index.password}>
                      <strong>Password:</strong> {index.password}
                    </li>
                    <li key={index.balance}>
                      <strong>Balance:</strong> ${index.balance}
                    </li>
                  </ul>
                );
              })}
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </>
    );
}
