import './App.css'
import React, { useState } from 'react'
import swal from 'sweetalert'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import login from './login.png'
function App() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user == 'javascript@gmail.com' && pass == 123456)
      swal("Successful login", "Welcome Javascript", "success")
    else
      swal("Wrong Credentials", "Please try again", "error")
  }


  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      <div className="row">
        <div className="col-md-6">
          <img className="float-right" src={login} width="600" />
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" value={user} className="form-control"
                placeholder="Enter email" onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={pass} className="form-control" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
