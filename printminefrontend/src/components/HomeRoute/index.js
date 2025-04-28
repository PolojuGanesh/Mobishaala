import { Component } from "react";
import NavbarRoute from "../NavbarRoute";
import FooterRoute from "../FooterRoute";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class HomeRoute extends Component {
  render() {
    return (
      <>
        <NavbarRoute />
        <div className="home-main-container">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://printmine.in/cdn/shop/files/4_54b28ee2-0ebc-4e83-961c-e2833a836a3f.jpg?v=1736945653&width=2000"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://printmine.in/cdn/shop/files/PrintMine.in_and_PrintMine.co.in.jpg?v=1738577569&width=2000"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://printmine.in/cdn/shop/files/Premium_Metal_Pen_Best_Corporate_Gift_8.jpg?v=1740469885&width=2000"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="similar-to-nav-links-images-container">
            <div>
              <img
                className="home-link-each-image"
                src="https://printmine.in/cdn/shop/files/PREMIUM_METAL_KEYCHAINS_5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="home-link-each-image"
                src="https://printmine.in/cdn/shop/files/Customized_Magnetic_Badge_Wear_Your_Brand_9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="home-link-each-image"
                src="https://printmine.in/cdn/shop/files/WhatsApp_Image_2025-03-01_at_18.36.22_afe48b0b.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="home-link-each-image"
                src="https://printmine.in/cdn/shop/files/Premium_Metal_Pen_Best_Corporate_Gift_6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="home-link-each-image"
                src="https://printmine.in/cdn/shop/files/Premium_Visiting_Card_Holders_Best_Corporate_Gift_5.jpg"
                alt=""
              />
            </div>
          </div>
          <FooterRoute />
        </div>
      </>
    );
  }
}

export default HomeRoute;
