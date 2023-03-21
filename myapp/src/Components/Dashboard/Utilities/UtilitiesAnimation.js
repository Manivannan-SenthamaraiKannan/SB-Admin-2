import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import Image2 from '../../Assets/IMG/Image2.png'

const UtilitiesAnimation = () => {
    const componentHeading = "Animation Utilities";
    return (
        <div ClassNameName='page-top'>
            <div id='wrapper'>
                <ul ClassNameName='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar'>
                    <Link ClassName="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                        <div ClassName="sidebar-brand-icon rotate-n-15">
                            <i ClassName="fas fa-laugh-wink"></i>
                        </div>
                        <div ClassName="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </Link>
                    <hr ClassName="sidebar-divider my-0" />
                    <li ClassName="nav-item">
                        <Link ClassName="nav-link" to="/">
                            <i ClassName="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <hr ClassName="sidebar-divider" />
                    <div ClassName="sidebar-heading">
                        Interface
                    </div>
                    <li ClassName="nav-item">
                        <a ClassName="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i ClassName="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" ClassName="collapse" aria-labelledby="headingOne" data-parent="#accordionSidebar">
                            <div ClassName="bg-white py-2 collapse-inner rounded">
                                <h6 ClassName="collapse-header">Custom Components:</h6>
                                <Link ClassName="collapse-item" to="/buttons">Buttons</Link>
                                <Link ClassName="collapse-item" to="/cards">Cards</Link>
                            </div>
                        </div>
                    </li>
                    <li ClassName="nav-item">
                        <a ClassName="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i ClassName="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" ClassName="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div ClassName="bg-white py-2 collapse-inner rounded">
                                <h6 ClassName="collapse-header">Custom Utilities:</h6>
                                <Link ClassName="collapse-item" to="/colors">Colors</Link>
                                <Link ClassName="collapse-item" to="/borders">Borders</Link>
                                <Link ClassName="collapse-item" to="/animations">Animations</Link>
                                <Link ClassName="collapse-item" to="/others">Other</Link>
                            </div>
                        </div>
                    </li>
                    <hr ClassName="sidebar-divider"></hr>
                    <div ClassName="sidebar-heading">
                        Addons
                    </div>
                    <li ClassName="nav-item">
                        <a ClassName="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true"
                            aria-controls="collapsePages">
                            <i ClassName="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" ClassName="collapse" aria-labelledby="headingPages"
                            data-parent="#accordionSidebar">
                            <div ClassName="bg-white py-2 collapse-inner rounded">
                                <h6 ClassName="collapse-header">Login Screens:</h6>
                                <Link ClassName="collapse-item" to="/login">Login</Link>
                                <Link ClassName="collapse-item" to="/register">Register</Link>
                                <Link ClassName="collapse-item" to="/forgotpassword">Forgot Password</Link>
                                <div ClassName="collapse-divider"></div>
                                <h6 ClassName="collapse-header">Other Pages:</h6>
                                <Link ClassName="collapse-item" to="/notfound">404 Page</Link>
                                <Link ClassName="collapse-item active" to="/blank">Blank Page</Link>
                            </div>
                        </div>
                    </li>
                    <li ClassName="nav-item">
                        <Link ClassName="nav-link" to="/charts">
                            <i ClassName="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span>
                        </Link>
                    </li>
                    <li ClassName="nav-item">
                        <Link ClassName="nav-link" to="/tables">
                            <i ClassName="fas fa-fw fa-table"></i>
                            <span>Tables</span></Link>
                    </li>
                    <hr ClassName="sidebar-divider d-none d-md-block"></hr>
                    <div ClassName="text-center d-none d-md-inline">
                        <button ClassName="navbar-toggler rounded-circle border-0" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            id="sidebarToggle"></button>
                    </div>
                </ul>
                {/* End of Side Bar */}

                <div id="content-wrapper" ClassName="d-flex flex-column">
                    <div id='content'>
                        <nav ClassNameName="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" ClassName="btn btn-link d-md-none rounded-circle mr-3">
                                <i ClassName="fa fa-bars"></i>
                            </button>
                            <form
                                ClassName="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div ClassName="input-group">
                                    <input type="text" ClassName="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div ClassName="input-group-append">
                                        <button ClassName="btn btn-primary" type="button">
                                            <i ClassName="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul ClassNameName='navbar-nav ml-auto'>
                                <li ClassName="nav-item dropdown no-arrow d-sm-none">
                                    <a ClassName="nav-link dropdown-toggle" href="#!" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i ClassName="fas fa-search fa-fw"></i>
                                    </a>
                                    <div ClassName="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form ClassName="form-inline mr-auto w-100 navbar-search">
                                            <div ClassName="input-group">
                                                <input type="text" ClassName="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div ClassName="input-group-append">
                                                    <button ClassName="btn btn-primary" type="button">
                                                        <i ClassName="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li ClassName="nav-item dropdown no-arrow mx-1">
                                    <a ClassName="nav-link dropdown-toggle" href="#!" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i ClassName="fas fa-bell fa-fw"></i>
                                        <span ClassName="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    <div ClassName="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 ClassName="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="mr-3">
                                                <div ClassName="icon-circle bg-primary">
                                                    <i ClassName="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div ClassName="small text-gray-500">December 12, 2019</div>
                                                <span ClassName="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="mr-3">
                                                <div ClassName="icon-circle bg-success">
                                                    <i ClassName="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div ClassName="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="mr-3">
                                                <div ClassName="icon-circle bg-warning">
                                                    <i ClassName="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div ClassName="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item text-center small text-gray-500" href="#!">Show All Alerts</a>
                                    </div>
                                </li>
                                <li ClassName="nav-item dropdown no-arrow mx-1">
                                    <a ClassName="nav-link dropdown-toggle" href="#!" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i ClassName="fas fa-envelope fa-fw"></i>
                                        <span ClassName="badge badge-danger badge-counter">7</span>
                                    </a>
                                    <div ClassName="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 ClassName="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="dropdown-list-image mr-3">
                                                <img ClassName="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div ClassName="status-indicator bg-success"></div>
                                            </div>
                                            <div ClassName="font-weight-bold">
                                                <div ClassName="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div ClassName="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="dropdown-list-image mr-3">
                                                <img ClassName="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div ClassName="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div ClassName="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div ClassName="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="dropdown-list-image mr-3">
                                                <img ClassName="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="..." />
                                                <div ClassName="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div ClassName="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div ClassName="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item d-flex align-items-center" href="#!">
                                            <div ClassName="dropdown-list-image mr-3">
                                                <img ClassName="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div ClassName="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div ClassName="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div ClassName="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a ClassName="dropdown-item text-center small text-gray-500" href="#!">Read More Messages</a>
                                    </div>
                                </li>
                                <div ClassName="topbar-divider d-none d-sm-block"></div>
                                <li ClassName="nav-item dropdown no-arrow">
                                    <a ClassName="nav-link dropdown-toggle" href="#!" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span ClassName="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img ClassName="img-profile rounded-circle"
                                            src={Image2} alt='posting' />

                                    </a>
                                    <div ClassName="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a ClassName="dropdown-item" href="#!">
                                            <i ClassName="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a ClassName="dropdown-item" href="#!">
                                            <i ClassName="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a ClassName="dropdown-item" href="#!">
                                            <i ClassName="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div ClassName="dropdown-divider"></div>
                                        <a ClassName="dropdown-item" href="#!" data-toggle="modal" data-target="#logoutModal">
                                            <i ClassName="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content  */}
                        <div ClassName="container-fluid">
                            {/* Page Heading  */}
                            <h1 ClassName="h3 mb-1 text-gray-800">{componentHeading}</h1>
                            <p ClassName="mb-4">Bootstrap's default utility ClassNamees can be found on the official <a
                                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                                below were created to extend this theme past the default utility ClassNamees built into Bootstrap's
                                framework.
                            </p>
                            <div ClassNameName='row'>
                                {/* Grow in utility */}
                                <div ClassName="col-lg-6">
                                    <div ClassName="card position-relative">
                                        <div ClassName="card-header py-3">
                                            <h6 ClassName="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                                        </div>
                                        <div ClassName="card-body">
                                            <div ClassName="mb-3">
                                                <code>.animated--grow-in</code>
                                            </div>
                                            <div ClassName="small mb-1">Navbar Dropdown Example:</div>
                                            <nav ClassName="navbar navbar-expand navbar-light bg-light mb-4">
                                                <a ClassName="navbar-brand" href="#!">Navbar</a>
                                                <ul ClassName="navbar-nav ml-auto">
                                                    <li ClassName="nav-item dropdown">
                                                        <a ClassName="nav-link dropdown-toggle" href="#!" id="navbarDropdown"
                                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            Dropdown
                                                        </a>
                                                        <div ClassName="dropdown-menu dropdown-menu-right animated--grow-in"
                                                            aria-labelledby="navbarDropdown">
                                                            <a ClassName="dropdown-item" href="#!">Action</a>
                                                            <a ClassName="dropdown-item" href="#!">Another action</a>
                                                            <div ClassName="dropdown-divider"></div>
                                                            <a ClassName="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <p ClassName="mb-0 small">Note: This utility animates the CSS transform property,
                                                meaning it will override any existing transforms on an element being animated!
                                                In this theme, the grow in animation is only being used on dropdowns within the
                                                navbar.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Fade in Utility */}
                                <div ClassName="col-lg-6">
                                    <div ClassName="card position-relative">
                                        <div ClassName="card-header py-3">
                                            <h6 ClassName="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                                        </div>
                                        <div ClassName="card-body">
                                            <div ClassName="mb-3">
                                                <code>.animated--fade-in</code>
                                            </div>
                                            <div ClassName="small mb-1">Navbar Dropdown Example:</div>
                                            <nav ClassName="navbar navbar-expand navbar-light bg-light mb-4">
                                                <link ClassName="navbar-brand" href="#">Navbar</link>
                                                <ul ClassName="navbar-nav ml-auto">
                                                    <li ClassName="nav-item dropdown">
                                                        <a ClassName="nav-link dropdown-toggle" href="!" id="navbarDropdown"
                                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            Dropdown
                                                        </a>
                                                        <div ClassName="dropdown-menu dropdown-menu-right animated--fade-in"
                                                            aria-labelledby="navbarDropdown">
                                                            <link ClassName="dropdown-item" href="#">Action</link>
                                                            <link ClassName="dropdown-item" href="#">Another action</link>
                                                            <div ClassName="dropdown-divider"></div>
                                                            <link ClassName="dropdown-item" href="#">Something else here</link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div ClassName="small mb-1">Dropdown Button Example:</div>
                                            <div ClassName="dropdown mb-4">
                                                <button ClassName="btn btn-primary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <div ClassName="dropdown-menu animated--fade-in"
                                                    aria-labelledby="dropdownMenuButton">
                                                    <a ClassName="dropdown-item" href="#!">Action</a>
                                                    <a ClassName="dropdown-item" href="#!">Another action</a>
                                                    <a ClassName="dropdown-item" href="#!">Something else here</a>
                                                </div>
                                            </div>
                                            <p ClassName="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                                                it will override any existing opacity on an element being animated!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Main Content  */}
                        {/* Footer  */}
                        <footer ClassName="sticky-footer bg-white">
                            <div ClassName="container my-auto">
                                <div ClassName="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2020</span>
                                </div>
                            </div>
                        </footer>
                        {/* End of Footer */}
                    </div>
                    {/* End of Content Wrapper */}
                </div>
                {/* End of Page Wrapper */}
                {/* Scroll to Top */}
                <a ClassName="scroll-to-top rounded" href="#page-top">
                    <i ClassName="fas fa-angle-up"></i>
                </a>
                {/* Logout Model */}
                <div ClassName="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div ClassName="modal-dialog" role="document">
                        <div ClassName="modal-content">
                            <div ClassName="modal-header">
                                <h5 ClassName="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button ClassName="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div ClassName="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div ClassName="modal-footer">
                                <button ClassName="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a ClassName="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default UtilitiesAnimation;