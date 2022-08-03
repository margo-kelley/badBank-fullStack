// Works Ok, needs improvement
// take withdraw off of logged out navbar - only access after login

function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

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
        props.setStatus('');
      }}>
        GET MORE CASH
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserCtx);

  function handle(){
    fetch(`/account/update/${email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
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
      {/* {ctx.user ? ( */}
        <div>
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
            GET CASH
          </button>
        </div>
      {/* ) : ( */}
        <div>
          Enter Email
          <br />
          <input
            type="input"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
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
      {/* )} */}
    </>
  );
}
