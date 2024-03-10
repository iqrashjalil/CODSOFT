import React, { useState } from 'react'
import { Context } from '../../main';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[role, setRole] = useState("");

    const[isAuthorized, setIsAuthorized, user, setUser] = useState(Context);


    const handleRegister = async (e) =>{
      e.preventDefault();
      try{
        const { data } =await axios.post("http://localhost:4000/api/v1/user/register", {
          name,
          email,
          password,
          phone,
          role
        }, {withCredentials:true, headers:{
          'Content-Type': 'application/json',
        }})
        toast.success(data.message);
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setRole("");
        setIsAuthorized(true);
      } catch(error){
        toast.error(error.response.data.message);
      }     
    }
    if(isAuthorized) {
      return <Navigate to={"/"} />
    }

  return (
    <>
    
    <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Responsive Registration Form</h2>
    </div>
    <div className="row clearfix">
      <div className="">
        <form>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="phone" name="phone" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
          </div>
          
          
            
              <div className="input_field select_option">
                <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
                  <option value="">Select Type</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <div className="select_arrow"></div>
              </div>

              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
              
          <input className="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Register