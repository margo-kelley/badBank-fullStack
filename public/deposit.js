// display balance && take email off - user already logged in

function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [user, setUser] = React.useState('');
  const ctx = React.useContext(UserCtx);

  React.useEffect(() => {

    fetch(`/account/findOne/${ctx.user.email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setUser(user);
          setBalance(data.balance);
          console.log("JSON:", data);
        } catch (err) {
          console.log("err:", text);
        }
      });
  })

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
  const [name, setName] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserCtx);


  function handle(){
    fetch(`/account/update/${ctx.user.email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.amount));
            setBalance(ctx.user.balance);
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
        Balance: ${ctx.user.balance}
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