function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [balance, setBalance] = React.useState("");
  const [status, setStatus] = React.useState('');
  const [user, setUser] = React.useState("");
  const ctx = React.useContext(UserCtx);

  React.useEffect(() => {
    // get user from db
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
  });

  return (
    <div className="container-fluid">
      <div className="header">Withdraw</div>
      <Card
      bgcolor="grey"
      txtcolor="black"
      status={status}
      body={show ?
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
      />
    </div>
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success!</h5>
    <button type="submit"
      className="btn btn-light"
      onClick={() => {
        props.setShow(true);
      }}>
        GET MORE CASH
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState("");
  const ctx = React.useContext(UserCtx);

  function handle(){
    // api to update user balance
    fetch(`/account/update/${ctx.email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.amount));
            setBalance(ctx.balance);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Withdraw failed')
            console.log('err:', text);
        }
    });
  }

  return (
    <>
      <div>
        {ctx.email}
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
