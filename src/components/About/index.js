import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const About = (props) => { 
    return (<>
    <div className="about-main">
        <Header currentPage={props.currentPage}></Header>
        <div class="about-title">
            <div class="about-title1">
                About
            </div>
            <div class="about-logo">
                <img src="./../assets/image/logo.png" />
            </div>
        </div>
        <div class="about-title2">
            <div class="about-title3">
                Quality. Premium. Affordable
            </div>
        </div>
        <div class="about-body-mobile w-100 d-flex justify-content-center pt-5 pb-5 d-flex d-sm-flex d-lg-none">
            <div class="types-mobile">
                <div class="quality type">
                    <div class="circle-bg"></div>
                    <img src="./../assets/image/quality.png" />
                    <div class="desc-details d-none">
                        <h3>QUALITY</h3>
                        The premium quality of our laboratory tools and equipment is evident in meticulous design and superior performance. Crafted with precision and attention to detail, we meet the demands of advanced scientific research with reliability and accuracy.                    
                    </div>
                </div>
                <div class="premium type">
                    <div class="circle-bg"></div>
                    <img src="./../assets/image/premium.png" />
                    <div class="desc-details  d-none">
                        <h3>PREMIUM</h3>
                        Our laboratory tools and supplies uphold the highest standards, rigorously tested for accuracy and reliability in scientific experiments. With a focus on durability and precision, we ensure consistent performance to support the integrity of research endeavors.
                    </div>
                </div>
                <div class="afford type">
                    <div class="circle-bg"></div>
                    <img src="./../assets/image/affordable.png" />
                    <div class="desc-details d-none">
                        <h3>AFFORDABLE</h3>
                        Our laboratory tools and equipment combine premium quality with affordability, ensuring accessibility without compromising precision. By offering cost-effective solutions, we empower researchers to pursue scientific endeavors effectively.                    
                    </div>
                </div>
                <div class="whole-bg"></div>
            </div>
            <div class="whole-bg d-none"></div>
            <div class="circle-div"></div>
            <div class="about-profile-mobile">
                <div class="about-profile">
                    <img src="./../assets/image/about-me.png" />
                    <div class="about-profile-details">
                        <div class="name">Diether Daniel A. Bas </div>
                        <div class="name-type">Business Owner</div>
                        <a class="button-1" type="button" href="http://localhost/diethbas.github.io/PP1/#me" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-body d-none d-lg-flex">
            <div class="about-profile">
                <img src="./../assets/image/about-me.png" />
                <a class="button-1" type="button" href="http://localhost/diethbas.github.io/PP1/#me" target="_blank">Read More</a>
                <div class="name">Diether Daniel A. Bas </div>
                <div class="name-type">Business Owner</div>
            </div>
            <div class="details">
                <div class="about-quality">
                    <div class="quality-logo">
                        <img src="./../assets/image/quality.png" />
                        <div class="quality">Quality</div>
                    </div>
                    <div class="line"></div>
                    <div class="quality-det2">
                        Our laboratory tools and supplies uphold the highest standards, rigorously tested for accuracy and reliability in scientific experiments. With a focus on durability and precision, we ensure consistent performance to support the integrity of research endeavors.
                    </div>
                    <div class="quality-logo">
                        <img src="./../assets/image/premium.png" />
                        <div class="quality">Premium</div>
                    </div>
                    <div class="line"></div>
                    <div class="quality-det2">
                        The premium quality of our laboratory tools and equipment is evident in meticulous design and superior performance. Crafted with precision and attention to detail, we meet the demands of advanced scientific research with reliability and accuracy.                    
                    </div>
                </div>
                <div class="quality-logo">
                    <img src="./../assets/image/affordable.png" />
                    <div class="quality">Affordable</div>
                </div>
                <div class="line"></div> 
                <div class="quality-det2">
                    Our laboratory tools and equipment combine premium quality with affordability, ensuring accessibility without compromising precision. By offering cost-effective solutions, we empower researchers to pursue scientific endeavors effectively.                    
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>);
}
export default About;