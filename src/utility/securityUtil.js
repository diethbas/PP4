const uKey = process.env.REACT_APP_ADMIN_USERNAME;
const pKey = process.env.REACT_APP_ADMIN_PASSWORD;
const salt = process.env.REACT_APP_ADMIN_SALT;
export function login(username, password){
    if (window.btoa(username+salt) === uKey
    && window.btoa(password+salt) === pKey)
    {
        sessionStorage.setItem("cred", window.btoa(username+";;"+password));
        return true;
    }
    else return false;
}

export function validate(){
    let cred = window.atob(sessionStorage.getItem("cred")).split(";;");
    if (login(cred[0], cred[1]))
        return true;
    else return false;
}
