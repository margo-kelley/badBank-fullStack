const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserCtx = React.createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBU-nWEb2C6TB9hwcJgl0oK5vDsm4b3Bjc",
  authDomain: "badbank-addf2.firebaseapp.com",
  projectId: "badbank-addf2",
  storageBucket: "badbank-addf2.appspot.com",
  messagingSenderId: "595019698861",
  appId: "1:595019698861:web:84ec7978189ca7d3d02c24",
};

// initialize Firebase
firebase.initializeApp(firebaseConfig);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "100vw" }}>
      <div className="card-body">
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
