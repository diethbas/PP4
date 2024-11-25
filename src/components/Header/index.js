import { validate } from "../../utility/securityUtil";

const Header = (props) => {
    const classHome = props.currentPage === "home"  ? "active" : "";
    const classHowTo = props.currentPage === "howto" ? "active" : "";
    const classShop = props.currentPage === "shop" ? "active" : "";
    const classAbout = props.currentPage === "about" ? "active" : "";
    const classContact = props.currentPage === "contact" ? "active" : "";

    const classNav = "nav-link ";

    const signIn = (e) => {
        if (sessionStorage.getItem("cred")){
            if (validate()){
                e.preventDefault();
                e.stopPropagation();
                var myModalEl = document.getElementById('adminMaintenanceModal')
                var modal1 = new window.bootstrap.Modal(myModalEl)
                modal1.show();
                return;
            }
        }
        var myModalEl = document.getElementById('adminLoginModal')
        var modal1 = new window.bootstrap.Modal(myModalEl)
        modal1.show();
    }

    const navMobileMarkup = <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top d-lg-none d-xxl-none d-xl-none">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img id="logo" src="/assets/image/logo.png" alt="Logo" /></a>
                <button className="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item text-center">
                            <a className={classNav + classHome} aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className={classNav + classHowTo} href="/howto/">HOW TO</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className={classNav + classShop} href="/shop/">SHOP</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className={classNav + classAbout} href="/about/">ABOUT</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className={classNav + classContact} href="/#contact">CONTACT</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className={classNav + classContact}><i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;&nbsp;LOGIN AS ADMIN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;

    const navWebMarkup = <>
        <div className="nav-bar d-lg-flex d-sm-none d-none">
            <div className="background-nav">
                <div className="middle"> 
                    <nav className={"menu " + classHome}>                         
                        <a href="/">HOME</a>
                    </nav>
                    <nav className={"menu " + classHowTo}> 
                        <a href="/howto">HOW TO</a>
                    </nav>
                    <nav className={"menu " + classShop}> 
                        <a href="/shop">SHOP</a>
                    </nav>
                    <nav className={"menu " + classAbout}> 
                        <a href="/about">ABOUT</a>
                    </nav>
                    <nav className={"menu " + classContact}> 
                        <a href="/#contact">CONTACT</a>
                    </nav>
                    <nav className="menu"> 
                        <a href="https://mike-of-mycro.zapier.app/chat">INQUIRE</a>
                    </nav>
                    <div className="signIn-Admin" onClick={signIn}>
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                    </div>
                </div>
            </div>
        </div>
    </>;
    
    return (<>
        {navMobileMarkup}
        {navWebMarkup}
    </>);
}

export default Header;