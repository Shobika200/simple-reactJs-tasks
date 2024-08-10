import React from "react";

function Home(){
    let checkuser = () =>{
        let username = document.getElementById('user').value
        alert("hai"+ username)
    }
    return(
        <>
       
        <div>
            <center>
                <h1>Getting Alert message</h1>
            <label>username</label>
            <input type="text" id="user" name="username"/>
            <input type="button" value="Login" onClick={checkuser}/>
            </center>


        </div>
        </>
    )
}
export default Home;
