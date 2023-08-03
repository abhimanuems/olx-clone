import React ,{useContext,useState}from 'react';
import {FirebaseContext}from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';




function Login() {
  const navigate=useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const {firebase} =useContext(FirebaseContext)

  const handleSubmit=(e)=>{
    setError('');
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     
        navigate("/");

      }).catch((error)=>{
        setError("invalid credentials")
        console.log(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <p style={{color:"red" , marginTop:"10px"}}>{error}</p>
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>
          <Link to='/signup'>Signup</Link>
        </a>
      </div>
    </div>
  );
}

export default Login;
