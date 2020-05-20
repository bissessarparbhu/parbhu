import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="body_wrapper">
        <header className="header_area">
          <nav className="navbar navbar-expand-lg menu_seven menu_nine">
            <div className="container">
              <a className="navbar-brand sticky_logo" href="#">
                <img src="img/logo2.png" alt="logo" />
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ml-auto">
                  <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <div className="mega_menu_inner">
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <ul className="dropdown-menu scroll">
                            <li className="nav-item">
                              <a href="home-chat.html" className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src="img/mega-menu-img/home-chat.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Home Chat</span>
                              </a>
                            </li>

                            <li className="nav-item">
                              <a href="home-company.html" className="item">
                                <span className="img">
                                  <img
                                    src="img/mega-menu-img/home2.jpg"
                                    alt="home2"
                                  />
                                </span>
                                <span className="text">Company</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <a
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="#"
                    >
                      Pages
                    </a>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="dropdown submenu nav-item">
                        <a
                          title="Service"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Service <span className="arrow_carrot-right"></span>{" "}
                        </a>
                        <ul className=" dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Service 01"
                              className="nav-link"
                              href="service-1.html"
                            >
                              Service 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Service 02"
                              className="nav-link"
                              href="service-2.html"
                            >
                              Service 02
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Service 03"
                              className="nav-link"
                              href="service-3.html"
                            >
                              Service 03
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Service Details"
                              className="nav-link"
                              href="service-details.html"
                            >
                              Service Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          title="Thank You"
                          className="nav-link"
                          href="thanks.html"
                        >
                          Thank You
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          title="Coming Soon"
                          className="nav-link"
                          href="coming-soon.html"
                        >
                          Coming Soon
                        </a>
                      </li>
                      <li className="dropdown submenu nav-item">
                        <a
                          title="404"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          404<span className="arrow_carrot-right"></span>{" "}
                        </a>
                        <ul className=" dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="404 01"
                              className="nav-link"
                              href="404.html"
                            >
                              404 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="404 02"
                              className="nav-link"
                              href="404-two.html"
                            >
                              404 02
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <a className="btn_get btn_get_radious" href="#get-app">
                  Sign In
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
