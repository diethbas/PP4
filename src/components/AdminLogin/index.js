import { useState } from "react";
import { login } from "./../../utility/securityUtil";

const AdminLogin = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = () => {
        if (login(username, password)){
            hideModal();
        }
        else{
            alert("Invalid username or password.");
        }
        
    }

    const hideModal = () => {
        var myModalEl = document.getElementById('adminLoginModal')
        var modal1 = new window.bootstrap.Modal(myModalEl)
        modal1.hide();

        var adminModal = document.getElementById('adminMaintenanceModal');
        var modal2 = new window.bootstrap.Modal(adminModal)
        modal2.show();
    }
    const modal = (<div className="modal fade"  id="adminLoginModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <img className="mdl-logo" src="../assets/image/logo.png" />
                    <div>
                        <div className="left-cred">123 Main Street, Metro Manila, Philippines, Mycro Inc.</div>
                        <div className="left2-cred">myrcro.customer.service@gmail.com | +6395314794236</div>
                    </div>
                </div>
                <div className="modal-body" id="modalBody">
                    <input type="text" name="username" placeholder="Enter username" onChange={(v) => setUsername(v.target.value)} defaultValue={username}/>
                    <input type="password" name="password" placeholder="Password" onChange={(v) => setPassword(v.target.value)} defaultValue={password}/>
                    <button value="Login" onClick={() => {onSignIn()}}>Sign In</button>
                </div>
            </div>
        </div>
    </div>);
    return (<>{modal}</>);
}

export default AdminLogin;