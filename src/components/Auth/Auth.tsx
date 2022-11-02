import React,{useState} from "react";
import "../Auth/Auth.css";

type Props = {};

const Auth = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEmail = (e:any) => {
        const email = e.target.value
        setEmail(email)
    }

    const hanldePassword = (e:any) => {
        const password = e.target.value
        setPassword(password)
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log(email,password);
    }

  return (
    <div className="auth__body">
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__banner">
            <img src="https://routemobile.com/wp-content/uploads/2021/06/Login-illustration.svg" />
          </div>
          <form onSubmit={onSubmit} className="auth__form">
            <img
              src="https://i.pinimg.com/236x/4d/a8/bb/4da8bb993057c69a85b9b6f2775c9df2.jpg"
              alt="profile"
            />
            <h3>Login</h3>
            {/* <input type="text" placeholder="Username" /> */}
            <input type="email" value={email} placeholder="Email" onChange={handleEmail} />
            <input type="password" value={password} placeholder="Password" onChange={hanldePassword} />
            <div className="auth__checkme ">
              <div className="auth__checkbox">
                <label>
                  <input type="checkbox" checked /> Remember me
                </label>
              </div>    
              <div className="auth__forget">
                <label>Forgot Password</label>
              </div>
            </div>
            <button type = "submit" className="auth__button">Sign In</button>

            <div className="auth__or">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <button className="auth__button2">Sign In with Google</button>
            <h6>Not registered yet ? Create an account</h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
