import React,{useRef,useState} from "react";
import Subscribed from "./Subscribed";

function FormComp() {
  const name = useRef(null);
  const email = useRef(null);
  const [isSubscribed,setSubscribed] = useState("false");
  const [personDetails,setPersonDetails] = useState({
    pname: "",
    pemail: ""
  }); 

  function clickHandler(event) {
    //user is subscribed
    setSubscribed("true");
    event.preventDefault();
    setPersonDetails({pname:name.current.value,pemail:email.current.value});

    //get input values from here
    console.log(name.current.value);
    console.log(email.current.value);
  }

  return (
    <div>
    {isSubscribed === "true" ? <Subscribed n={personDetails.pname} e={personDetails.pemail} />:
    <form onSubmit={clickHandler}>
      <div style={{display:"block"}}>
        <label style={{marginRight:"4px"}} for="name">Name: </label>
        <input ref={name} type="text" id="name" name="name" size="30" required />
      </div>
      <div style={{display:"block",margin:"0.3rem 0"}}>
        <label style={{marginRight:"9px"}} for="email">Email:  </label>
        <input ref={email} type="email" id="email" name="email" size="30" required />
      </div>
      <button style={{marginLeft:"2.1rem",width:"16rem"}} class="form-submit-button" type="submit" size="50">Get A Free Subscription</button>
    </form>
    }
    </div>
  );
}

export default FormComp;
