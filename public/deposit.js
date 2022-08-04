// display balance

function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [balance, setBalance] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [user, setUser] = React.useState('');
  const ctx = React.useContext(UserCtx);

  // get email
  React.useEffect(() => {
    fetch(`/account/findOne/${ctx.user.email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setBalance(data.balance);
          console.log("JSON:", data);
        } catch (err) {
          console.log("err:", text);
        }
      });
  })

  // conditional render: cards
  return (
    <>
      <div className="container-fluid">
        <div className="header">Deposit</div>
        <Card
          bgcolor="grey"
          txtcolor="black"
          status={status}
          body={
            show ? (
              <DepositForm setShow={setShow} setStatus={setStatus} />
            ) : (
              <DepositMsg setShow={setShow} setStatus={setStatus} />
            )
          }
        />
      </div>
    </>
  );
}

function DepositMsg(props){
  return (<>
    <h5>Success!</h5>
    <button type="submit"
      className="btn btn-light"
      onClick={() => {
          props.setShow(true);
      }}>
      ADD MORE CASH
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserCtx);
  const balance = ctx.user.balance;


  function handle(){
    // get user from db
    fetch(`/account/update/${ctx.user.email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.amount));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  return (
    <>
      <div>
        {ctx.user.email}
        <br />
        <br />
        Balance: ${balance}
        <br />
        <br />
        Amount
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
        />
        <br />
        <button type="submit" className="btn btn-light" onClick={handle}>
          ADD CASH
        </button>
      </div>
    </>
  );
}