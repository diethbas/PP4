import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Howto = (props) => { 

    const [experiments, setExperiments] = useState([]);
    // async function fetches data from JSON
    const getExperiment = async () => {
        const response = await fetch("http://localhost:8080/mycrohowto");
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        (async() => {
            let data = await getExperiment();
            setExperiments(data);
        })();
    }, []);


    return (<>
        <div className="howto-main">
            <Header currentPage={props.currentPage}></Header>
            <div className="howto-title">
                <div className="howto-logo">
                    <img src="https://diethbas.github.io/PP3/assets/image/logo.png" />
                </div>
                <div className="howto-title1">How to</div>  
            </div>
            <div className="howto-title2">
                <div className="howto-title3">LABORATORY MANUAL</div>
            </div>
            <div className="howto-body">
                {experiments.map((v, i) => {
                return (<div className="howto-material d-flex mb-5">
                    <div className="howto-image">
                        <img className="d-none d-md-block d-lg-block" src={v.image} />
                    </div>
                    <div className="howto-details">
                        <div className="howto-unitname">{v.chapter}</div>
                        <div className="howto-lesson">{v.title}</div>
                        <div className="howto-date">{v.date}</div>
                        <div className="howto-info">
                        {v.description}
                        </div>
                        <div className="howto-readmore">
                            <button className="button-1" type="button">Read More</button>
                        </div>
                    </div>
                </div>);
                })}
            </div>
    </div>
    <Footer />
    </>)
}
export default Howto;