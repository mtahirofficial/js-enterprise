import React, { Component } from 'react';
import './Slider.css';
// import one from "../Image/Add User Male_75px.png"
// import two from "../Image/Add-New-Stock_50px.png"
// import three from "../Image/Add-New-Stock_75px.png"
// import four from "../Image/Cell Phone_50px.png"
import one from "../Image/candies.jpg"
import two from "../Image/cup-kake-dabba.jpg"
import three from "../Image/maxresdefault.jpg"
import four from "../Image/pastry.jpg"

import $ from "jquery";
class Slider extends Component {
    componentDidMount() {
        $(".slideshow > div:gt(0)").hide();

        setInterval(function () {
            $('.slideshow > div:first')
                .fadeOut(2000)
                .next()
                .fadeIn(2000)
                .end()
                .appendTo('.slideshow');
        }, 5000);
    }
    render() {


        return (
            <div>
                <div className="container out">
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-12"> */}
                            <div className="slideshow">
                                <div>
                                    <img className="img-fluid" src={one} alt="" />
                                </div>
                                <div>
                                    <img className="img-fluid" src={two} alt="" />
                                </div>
                                <div>
                                    <img className="img-fluid" src={three} alt="" />
                                </div>
                                <div>
                                    <img className="img-fluid" src={four} alt="" />
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }

}

export default Slider;