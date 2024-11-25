const Home = () => { 
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top d-lg-none d-xxl-none d-xl-none">
            <nav className="container-fluid">
                <a className="navbar-brand" href="#"><img id="logo" src="https://diethbas.github.io/PP3/assets/image/logo.png"/></a>
                <button className="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/howto/">HOW TO</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/shop/">SHOP</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/about/">ABOUT</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/#contact">CONTACT</a>
                            </li>
                        </ul>
                </nav>
        </nav>
    </nav> 
    <main className="home-page">
        <div className="back">
            <div className="nav-bar">
                <div className="left d-lg-block d-sm-none d-none"> 
                    <img id="logo" src="https://diethbas.github.io/PP3/assets/image/logo.png"/>
                </div>
                <div className="middle d-lg-flex d-sm-none d-none"> 
                    <nav className="home active">                         
                        <a href="#">HOME</a>
                    </nav>
                    <nav className="menu"> 
                        <a href="/howto/">HOW TO</a>
                    </nav>
                    <nav className="menu"> 
                        <a href="/shop/">SHOP</a>
                    </nav>
                    <nav className="menu"> 
                        <a href="/about/">ABOUT</a>
                    </nav>
                    <nav className="menu"> 
                        <a href="/#contact">CONTACT</a>
                    </nav>
                </div>
                <section className="right d-lg-flex d-sm-none d-none">     
                    <nav className="nav-phone">
                        <i className="fa-solid fa-phone"></i>
                    </nav>
                    <article className="call">+63926348951</article>
                    <nav className="chat">
                        <i className="fa-regular fa-comment-dots"></i>
                    </nav>
                </section>  
                <div className="back-design">
                    <section>
                        <img src="https://diethbas.github.io/PP3/assets/image/back-design.png"/>
                        <div className="main-title">
                            <div className="upper-title">Quality</div>
                            <div className="title">Laboratory <span id="tools">Tools</span> &</div>
                            <div className="title-2">Supplies</div>
                            <div className="button"> 
                                <a className="button-1" type="button" href="./how to">Watch Demo</a>
                                <a className="button-2" type="button" href="./shop">Buy now</a>
                            </div> 
                        </div> 
                    </section>
                </div>
            </div>
        </div>
        <div className="offer d-lg-flex d-sm-none d-none"> 
            <div className="promo"> 
                <div className="symbol">
                    <i className="fa-solid fa-truck"></i>
                </div>
                <div className="desc"> 
                    <div className="type">Free Shipping</div>
                    <div className="type-desc">Php. 1,000 minimun spend</div>
                </div>
            </div> 
            <div className="promo"> 
                <div className="symbol">
                    <i className="fa-solid fa-percent"></i>
                </div>
                <div className="desc"> 
                    <div className="type">Promo & Discount</div>
                    <div className="type-desc">Save for you next  product</div>
                </div>
            </div>   <div className="promo"> 
                <div className="symbol">
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className="desc"> 
                    <div className="type">24/7 Hotline</div>
                    <div className="type-desc">Assistance</div>
                </div>
            </div> 
        </div>
        <div className="reel d-none d-sm-none d-lg-block">
            <div id="carouselExampleFade" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                        <div className="row">
                            <div className="col">
                                <div className="img-item img1"></div>
                            </div>
                            <div className="col">
                                <div className="img-item img2"></div>
                            </div>
                            <div className="col">
                                <div className="img-item img3"></div>
                            </div>
                        </div>
                  </div>
                  <div className="carousel-item">
                        <div className="row">
                            <div className="col">
                                <div className="img-item img2"></div>
                            </div>
                            <div className="col">
                                <div className="img-item img3"></div>
                            </div>
                            <div className="col">
                                <div className="img-item img1"></div>
                            </div>
                        </div>
                  </div>
                  <div className="carousel-item">
                        <div className="row">
                            <div className="col">
                                <div className="img-item img3"></div>
                            </div>
                            <div className="col">
                                <div className="img-item img1"></div>
                            </div>
                            <div className="col">
                                <div className="img-item img2"></div>
                            </div>
                        </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                
            </div>
        </div>
        <div className="reel mt-1 mb-lg-5 mb-sm-3">

            <div className="under" > 
                <div className="under-desc">Quality. Premium. Affordable</div>
                <div className="under-desc2">Laboratory Tools and Equipment</div>
            </div>
        </div>
        <div className="reel d-lg-none shop-section mt-3 d-block">
            <div className="d-flex w-100 mb-3">
                <div className="shop-desc">SHOP | MEDIA</div>
                <div className="img-item img1 d-inline w-40"></div>
            </div>
            <div className="d-flex w-100 mb-5">
                <div className="img-item img3 d-inline w-40"></div>
                <div className="shop-desc">SHOP | REAGENTS</div>
            </div>
        </div>
        <div className="reel mt-1" id="contact">
            <div className="con pb-5">
                <div className="con1" > 
                    <div className="con2">Welcome To Our Support. Dedicated In Assisting You.</div>
                    <div className="con3">Count on us to be by your side whenever you require assistance, 24/7.</div>
                </div>
                <div className="boxes d-none d-lg-flex">
                    <div className="phone-call">
                        <div className="con-phone">
                            <div className="con-phone1">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="phone-call1"> 
                                <div className="det-phone">Contact Us</div>
                                <div className="det-phone2">Have any Questions? </div>
                            </div>    
                        </div>
                        <div className="phone-call2">
                            <div className="phone-details">
                                <div className="">This  number is toll free</div>
                                <div>+639112345698</div>
                            </div>
                        </div>                        
                    </div>
                    <div className="phone-call">                      
                        <div className="con-phone">
                            <div className="con-phone1">
                                <i className="fa-regular fa-comment-dots"></i>
                            </div>
                            <div className="phone-call1"> 
                                <div className="det-phone">Online Chat</div>
                                <div className="det-phone2">Chat with us live now</div>
                            </div>    
                        </div>
                        <div className="phone-call2">
                            <div className="phone-details">
                                <div className="">Our team is here to help you in real-time</div>
                                <div>with any questions or concerns</div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        <div className="reel mt-4 mobile-contact-section flex-column d-flex d-lg-none">
            <div className="accordion w-100 border-0 rounded-0 shadow-none" id="accordionExample">
                <div className="accordion-item rounded-0 shadow-none border-0">
                  <h2 className="accordion-header rounded-0 shadow-none border-0">
                    <button className="accordion-button border-0 shadow-none rounded-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="con-phone">
                            <div className="con-phone1">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="phone-call1"> 
                                <div className="det-phone">Contact Us</div>
                                <div className="det-phone2">Have any Questions? </div>
                            </div>    
                        </div>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">                    
                        <div className="phone-call2">
                            <div className="phone-details">
                                <div className="">This  number is toll free</div>
                                <div>+639112345698</div>
                            </div>
                        </div>   
                    </div>
                  </div>
                </div>
            </div>
            <div className="accordion w-100 border-0 rounded-0 shadow-none" id="accordionExample">
                <div className="accordion-item rounded-0 shadow-none border-0">
                  <h2 className="accordion-header rounded-0 shadow-none border-0">
                    <button className="accordion-button border-0 shadow-none rounded-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <div className="con-phone">
                            <div className="con-phone1">
                                <i className="fa-regular fa-comment-dots"></i>
                            </div>
                            <div className="phone-call1"> 
                                <div className="det-phone">Online Chat</div>
                                <div className="det-phone2">Chat with us live now</div>
                            </div>    
                        </div>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">                     
                        <div className="phone-call2">
                            <div className="phone-details">
                                <div className="">Our team is here to help you in real-time</div>
                                <div>with any questions or concerns</div>
                            </div>
                        </div>    
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <footer> 
            <div>All Rights Reserved © 2024 |</div>
            <div className="footer-logo"> 
                <img src="https://diethbas.github.io/PP3/assets/image/logo.png"/>
            </div>
        </footer>        
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
    </>);
}

export default Home;