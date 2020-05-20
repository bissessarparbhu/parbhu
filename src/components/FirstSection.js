import React, { Component } from "react";

class FirstSection extends Component {
  render() {
    return (
      <div>
        <section className="saas_banner_area_three owl-carousel">
          <div className="slider_item">
            <div className="container">
              <div className="slidet_content">
                <h2>
                  <span>SaasLand</span>
                  <br /> Find the Best Solution in Seconds
                </h2>
                <p>If debugging is the process of removing software bugs.</p>
                <a href="#" className="slider_btn btn_hover">
                  Get Started
                </a>
                <a href="#" className="slider_btn btn_hover">
                  Try For Free
                </a>
              </div>
              <div className="image_mockup">
                <img className="watch" src="img/new/mockup/Watch.png" alt="" />
                <img
                  className="laptop"
                  src="img/new/mockup/Laptop.png"
                  alt=""
                />
                <img className="phone" src="img/new/mockup/Iphone.png" alt="" />
              </div>
            </div>
          </div>
          <div className="slider_item slider_item_two">
            <div className="container">
              <div className="slidet_content_two text-center">
                <h2>
                  SaasLand is digital agency
                  <br /> for pioneering brands.
                </h2>
                <a href="#" className="slider_btn btn_hover">
                  Learn More
                </a>
              </div>
              <div className="image_mockup">
                <img class="laptop" src="img/new/mockup/dashboard.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FirstSection;
