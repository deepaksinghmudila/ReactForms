import React,{useState} from 'react';


const App = () => {
         
    const [fullname, setName] = useState({
        fname: "",
        lname:"",
        pass: "",
        email: "",
        phone:"",
    });    
           
    const inputEvent = (event) => {         
        
       /* const value = event.target.value;
        const name = event.target.name;*/

        const { value, name } = event.target;

        setName( (preValue) => {           
            if (name === 'fname') {               
                return {
                    fname: value,  
                    lname:preValue.lname,
                    pass: preValue.pass,
                    email: preValue.email,
                    phone: preValue.phone
                }; 
            }
            else if (name === 'lname') {                
                return {
                    fname:preValue.fname,
                    lname: value,  
                    pass: preValue.pass,
                    email: preValue.email,
                    phone: preValue.phone,                    
                };
            }
            else if (name === 'pass') {
                return {
                    fname:preValue.fname,
                    lname: preValue.lname,  
                    pass: value,
                    email: preValue.email,
                    phone: preValue.phone,                      
                };                
            }
            else if (name === 'email') {
                return {
                    fname:preValue.fname,
                    lname: preValue.lname,  
                    pass: preValue.pass,
                    email:value,
                    phone: preValue.phone,                      
                };                
            }
            else if (name === 'phone') {
                return {
                    fname:preValue.fname,
                    lname: preValue.lname,  
                    pass: preValue.pass,
                    email: preValue.email,
                    phone:value,                      
                };                
            }

        });  // end of setName

    };

    
    const inputShow = (event) => {
        event.preventDefault();  
        console.log("Submit Button Clicked");
    }

    return (
        <>
            <form onSubmit={inputShow}> 
              <div>
                    <h2>First Name: {fullname.fname} </h2>
                    <h2>Last Name: {fullname.lname}</h2>
                    <h2>Password: {fullname.pass}</h2>
                    <h2>Email: {fullname.email}</h2>
                    <h2>Phone: {fullname.phone}</h2>
                    <input
                        type="text"
                        name="fname"
                        placeholder="Enter Your First Name"
                        onChange={inputEvent} 
                        value={fullname.fname}
                    /> <br/>
                    <input
                        type="text"
                        name="lname" 
                        placeholder="Enter Your Last Name"
                        onChange={inputEvent}
                        value={fullname.lname}
                   /> <br/>
                    <input
                        type="password"
                        name="pass"
                        placeholder="Enter your Password"
                        onChange={inputEvent}
                        value={fullname.pass}
                    /> <br /> 
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        onChange={inputEvent}
                        value={fullname.email}
                        autoComplete="off"
                    /> <br /> 
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter your Mobile no"
                        onChange={inputEvent}
                        value={fullname.phone} 
                    /><br/>  
                    
                  <button type="submit" > Click Me  </button>
              </div>
            </form>   
        </>
    );    
};

export default App;