function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [balance, setBalance] = React.useState('');
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserCtx);
  
  // get email
  React.useEffect(() => {
    fetch(`/account/findOne/${ctx.email}`)
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
      <div className="header">Withdraw</div>
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

function WithdrawMsg(props){
  return (
    <>
      <h5>Success!</h5>
      <br/>
    
    <button type="submit"
          className="btn btn-light"
          onClick={() => {
            props.setShow(true);
      }}>
      GET MORE CASH?
        </button>
  </>);
}

function WithdrawForm(props){
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const ctx = React.useContext(UserCtx);

  function handle(){
    // get user from db
    fetch(`/account/update/${ctx.email}/${amount}`)
    .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setShow(false);
          setBalance(data.balance);
        } catch (err) {
          props.setStatus("Deposit failed");
          console.log("err:", text);
        }
      })
    ctx.balance = Number(ctx.balance) + Number(amount);
  }

  return (
    <>
      <div>
        <strong>{ctx.email}</strong>
        <br />
        <br />
        Balance: ${ctx.balance}
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
          GET CASH
        </button>
      </div>
    </>
  );
}