import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";


import { productItem } from "../../models/productItem";
import { person } from "../../models/person";
import { cartItem } from "../../models/cartItem";
import { getEmailHtml } from "../../utility/emailUtil";


let pushCart = [];
const Shop = (props) => { 
    let productList = [];

    const [cards, setCards] = useState([]);
    const [modalBody, setModalBody] = useState(null);


    const validate = () => {
        
        let firstNameTxt = document.getElementById('txtfname');
        let lastNameTxt = document.getElementById('txtlname');
        let contactTxt = document.getElementById('txtcontact');
        let emailTxt = document.getElementById('txtemail');

        let cust = {...JSON.parse(sessionStorage.getItem("cust")) ?? new person()};
        if (!cust.firstName || cust.firstName == ''){
            alert('Please enter your first name');
            firstNameTxt.focus();
            return false;
        }
        if (!cust.lastName || cust.lastName == ''){
            alert('Please enter your last name');
            lastNameTxt.focus();
            return false;
        }
        if (!cust.contact || cust.contact == ''){
            alert('Please enter your contact number');
            contactTxt.focus();
            return false;
        }
        if (!cust.email || cust.email == ''){
            alert('Please enter your email address');
            emailTxt.focus();
            return false;
        }
        if (!cust.deladdress || cust.deladdress == ''){
            alert('Please enter your delivery address');
            return false;
        }
        return true;
    }
    
    const sendEmail = () => {        
        let firstNameTxt = document.getElementById('txtfname');
        let lastNameTxt = document.getElementById('txtlname');
        let contactTxt = document.getElementById('txtcontact');
        let emailTxt = document.getElementById('txtemail');

        if (!validate()){
            return;
        }
        let cust = {...JSON.parse(sessionStorage.getItem("cust"))};
        const htmlContent = getEmailHtml(pushCart, cust);
        var templateParams = {
            body: htmlContent,
            cc_email: cust.email,
            subject: `${cust.firstName} ${cust.lastName} is asking for the quote`,
          };
          
        window.emailjs.send('service_hr5xfh5', 'template_ld0wkcx', templateParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your request has been successfully sent. Please wait for our call in 2-3 days');
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    
    
        var myModalEl = document.getElementById('filloutModal')
        var modal = window.bootstrap.Modal.getInstance(myModalEl)
        modal.hide();
    
        cust = new person();
        firstNameTxt.value = "";
        lastNameTxt.value = "";
        contactTxt.value = "";
        emailTxt.value = "";
    }

    // increment quantity in the cart
    let incCartItem = (productId) => {
        const updatedCart = pushCart.map((element) => {
            if (element.productId === productId) {
                return { ...element, qty: element.qty + 1 };
            }
            return element;
        });
        pushCart = updatedCart;
        showModal();
    };

    // decrementing the qty of product in the cart
    let decCartItem = (productId) => {
        const updatedCart = pushCart.map((element) => {
            if (element.productId === productId) {
                if (element.qty === 1) {
                    if (window.confirm("Are you sure you want to remove this item?")) {
                        return null; // Remove the item from the cart
                    }
                    return element; // Keep the item in the cart
                } else {
                    return { ...element, qty: element.qty - 1 };
                }
            }
            return element;
        }).filter(Boolean); // Filter out null values (removed items)
        pushCart = updatedCart;
        showModal();
    };


    // modal
    let showModal = () => {
        let cartCount = pushCart.length;
        let modalBody = document.getElementById("modalBody");
        let cartContent = [];
        let totalAmount = 0;
        pushCart.map((element) => {
            totalAmount += element.price * element.qty;
            var uniq = 'tr' + Date.now().toString(36) + Math.random().toString(36).substring(2);
            cartContent.push( 
            <tr key={uniq}>
                <td className="w-50">
                {element.name}
                </td>
                <td className="w-50 text-end">
                {element.qty} x PHP {parseFloat(element.price).toFixed(2)}
                <button onClick={() => incCartItem(element.productId)}>+</button>
                <button onClick={() => decCartItem(element.productId)}>-</button>
                </td>
            </tr>
            );
        });


        let cartTableList = 
            <table className="table">
                <tbody>
                    {cartContent}
                </tbody>
            </table>;
        let total = 
            <table className="table">
                <tbody>
                <tr>
                    <td className="w-50 fw-bold">
                    Total Price
                    </td>
                    <td className="w-50 fw-bold text-end">
                    PHP {parseFloat(totalAmount).toFixed(2)}
                    </td>
                </tr>
                </tbody>
            </table>;
        setModalBody(<>
        <div>
            <h4>Order Qoutation:</h4>
            <h5>Item({cartCount})</h5>
        </div>
        <div className="mdl-content"> 
            {cartTableList}
        </div>
        <div className="mdl-line"></div>
        <div className="mdl-gtotal">
            {total}
        </div></>);
    }

    // card
    let addCardProduct = (productItem) => {
        let id = productItem.id;
        let image = productItem.image;
        
        var uniq = 'card' + Date.now().toString(36) + Math.random().toString(36).substring(2);
        return (
        <div className="card" key={uniq}>
            <div className="card-img-c" data-id={id}>
                <img src={image} className="card-img-top img-fluid" alt="..." />
            </div>
            <div className="card-body">
            <p className="card-text text-center product-name">{productItem.name}</p>
            <p className="card-text text-center">{productItem.weight}</p>
            <p className="card-text text-center">PHP {parseFloat(productItem.price).toFixed(2)}</p>
            <button className="addToCartbtn card-text text-center product-action" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={() => addToCart(id)}>
                Add to Cart
            </button>
            </div>
        </div>);
    }

    // add product to cart
    const addToCart = (id) => {
        const productSelected = productList.find((element) => element.id == id);
        const isInCart = pushCart.find((element) => +element.productId == productSelected.id);
        
        if (isInCart){
            console.log('in cart');
            const updatedCart = pushCart.map((element) => {
                if (element.productId == productSelected.id) {
                    return { ...element, qty: element.qty + 1 }; // Updating quantity
                }
                return element;
            });
            pushCart = updatedCart;
        } else {
            console.log('not in cart');
            const newItem = {
                productId: productSelected.id,
                qty: 1,
                name: productSelected.name,
                price: productSelected.price
            };
            const updatedCart = [...pushCart, newItem];
            pushCart = updatedCart;
        }
        showModal();
    }

    // async function fetches data from JSON
    const getProduct = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        return data;
    }
    
    useEffect(() => {
        async function run() {
            let data = await getProduct();
            let _cards = [];
            console.log(data, 'ess');
            if (data){
                data.forEach(element => {
                    let product = new productItem();
                    product.id = element.id;
                    product.name = element.name;
                    product.image = element.image;
                    product.weight = element.weight;
                    product.price = element.price;
                    productList.push(product);
                    _cards.push(addCardProduct(product));
                });
                setCards(_cards);
                console.log(_cards, 'adad')
            }
        };
        run();
        
        let firstNameTxt = document.getElementById('txtfname');
        let lastNameTxt = document.getElementById('txtlname');
        let contactTxt = document.getElementById('txtcontact');
        let emailTxt = document.getElementById('txtemail');
    
        firstNameTxt.addEventListener('input', function(event) {
            let cust = {...JSON.parse(sessionStorage.getItem("cust"))};
            cust.firstName = firstNameTxt.value;
            sessionStorage.setItem("cust", JSON.stringify(cust));
        });
    
        lastNameTxt.addEventListener('input', function(event) {
            let cust = {...JSON.parse(sessionStorage.getItem("cust"))};
            cust.lastName = lastNameTxt.value;
            sessionStorage.setItem("cust", JSON.stringify(cust));
        });
    
        contactTxt.addEventListener('input', function(event) {
            let cust = {...JSON.parse(sessionStorage.getItem("cust"))};
            cust.contact = contactTxt.value;
            sessionStorage.setItem("cust", JSON.stringify(cust));
        });
    
        emailTxt.addEventListener('input', function(event) {
            let cust = {...JSON.parse(sessionStorage.getItem("cust"))};
            cust.email = emailTxt.value;
            sessionStorage.setItem("cust", JSON.stringify(cust));
        });
    }, []);

    return (<>
    <div className="shop-main">
        <Header currentPage={props.currentPage}></Header>
        <div className="shop-title">
            <div className="shop-logo">
                <img src="./../assets/image/logo.png" />
            </div>
            <div className="shop-title1">
                Shop
            </div>  
        </div>
        <div className="shop-title2">
            <div className="shop-title3">
                Quality. Premium. Affordable
            </div>
        </div>
        <div className="shop-cards d-flex" id="shopList">
            {cards}
        </div>
    </div>
    <div className="modal fade"  id="exampleModalCenter">
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
                    {modalBody}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="quote" type="button" className="button-qoute" data-bs-toggle="modal" data-bs-target="#filloutModal">Ask to Qoute</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade"  id="filloutModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <img className="mdl-logo" src="../assets/image/logo.png" />
                    <div>
                        <div className="left-cred">123 Main Street, Metro Manila, Philippines, Mycro Inc.</div>
                        <div className="left2-cred">myrcro.customer.service@gmail.com | +6395314794236</div>
                    </div>
                </div>
                <div className="modal-body" id="filloutModalBody">
                    <form>
                        <fieldset>
                            <input id="txtfname" type="text" name="firstname" placeholder="First Name" className="w-100 mb-3 p-2"/>
                        </fieldset>
                        <fieldset>
                            <input id="txtlname" type="text" name="firstname" placeholder="Last Name" className="w-100 mb-3 p-2"/>
                        </fieldset>
                        <fieldset>
                            <input id="txtcontact" type="tel" name="contact" placeholder="Mobile Number" className="w-100 mb-3 p-2"/>
                        </fieldset>
                        <fieldset>
                            <input id="txtemail" type="email" name="email" placeholder="Email Address" className="w-100 mb-3 p-2"/>
                        </fieldset>
                        <fieldset id="mapSearch">
                            <span>Find your delivery address below: </span>
                        </fieldset>
                    </form>
                    <div id="map"></div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Back</button>
                    <button type="button" className="button-qoute" onClick={sendEmail}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    {/* <script src="/assets/js/product.js"></script> */}
    <script src="/assets/js/map.js"></script>
    <script src="/assets/js/email.js"></script>
    </>)
}
export default Shop;