import React, { Component } from 'react';
import "./Navbar.css";
import avatar from '../../assets/img/faces/avatar.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import face from '../../assets/img/faces/face.jpg'





const Navbar = ( {sidebarOpen, openSidebar}) =>{
  return (

    <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
      <div className='nav_icon' onClick={() => openSidebar()}>
          <i className='fa fa-bars'></i>
      </div>

      {/* topbar navbar*/}
      <ul className='navbar-nav ml-auto'>
          <div className='navbar__left'>
              <li>
                  <h2 className='my-3 ' href='#'>Home</h2>
              </li>
              </div>
              <div className='topbar-divider d-none d-sm-block'></div>

              <li className='nav-item dropdpwn  my-3 mr-5'>
                   <a className='nav-link dropdown-toggle ' href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <span className="mr-2 d-none d-lg-inline text-grey-600  font-bold">Eyimisan Abusomwan</span>
                             <img className='img-profile rounded-circle' src={face} alt='face' width='40px' />
                       </a>

                       {/* drop down information*/}
                       <div className='dropdown-menu dropdown-menu-right shadow animated--grow-in' aria-labelledby='userDropdown'>
                           <a className='dropdown-item' href='#'>
                               <i className='fa fa-user fa-sm fa-fw mr-2 text-grey-400'></i>
                               Profile
                           </a>
                           <div className='dropdown-divider'></div>

                           <a className='' href='#' data-toggle='modal' data-target='#logoutModal'>
                               <i className='fa fa-sign-out fa-sm fa-fw mr-2 text-grey-400'></i>
                               Logout
                           </a>
                       </div>

                </li>

                {/* nav item for alert*/}

                <li class="nav-item dropdown">
                  <a class="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                  </a>
                    <ul class="dropdown-menu">
                      <li class="head text-light bg-dark">
                        <div class="row">
                          <div class="col-lg-12 col-sm-12 col-12">
                            <span>Notifications (3)</span>
                            <a href="" class="float-right text-light">Mark all as read</a>
                          </div>
                      </li>
                      <li class="notification-box">
                        <div class="row">
                          <div class="col-lg-3 col-sm-3 col-3 text-center">
                            <img src="/demo/man-profile.jpg" class="w-50 rounded-circle">
                          </div>    
                          <div class="col-lg-8 col-sm-8 col-8">
                            <strong class="text-info">David John</strong>
                            <div>
                              Lorem ipsum dolor sit amet, consectetur
                            </div>
                            <small class="text-warning">27.11.2015, 15:00</small>
                          </div>    
                        </div>
                      </li>
                      <li class="notification-box bg-gray">
                        <div class="row">
                          <div class="col-lg-3 col-sm-3 col-3 text-center">
                            <img src="/demo/man-profile.jpg" class="w-50 rounded-circle">
                          </div>    
                          <div class="col-lg-8 col-sm-8 col-8">
                            <strong class="text-info">David John</strong>
                            <div>
                              Lorem ipsum dolor sit amet, consectetur
                            </div>
                            <small class="text-warning">27.11.2015, 15:00</small>
                          </div>    
                        </div>
                      </li>
                      <li class="notification-box">
                        <div class="row">
                          <div class="col-lg-3 col-sm-3 col-3 text-center">
                            <img src="/demo/man-profile.jpg" class="w-50 rounded-circle">
                          </div>    
                          <div class="col-lg-8 col-sm-8 col-8">
                            <strong class="text-info">David John</strong>
                            <div>
                              Lorem ipsum dolor sit amet, consectetur
                            </div>
                            <small class="text-warning">27.11.2015, 15:00</small>
                          </div>    
                        </div>
                      </li>
                      <li class="footer bg-dark text-center">
                        <a href="" class="text-light">View All</a>
                      </li>
                    </ul>
                </li>

                <li className='nav-item mx-1 my-3'> 
                <a className='nav-link' href="#" role='button' aria-haspopup='true' aria-expanded='false'>
                    <i className='fa fa-sign-out  fa-2x'></i>
                    </a>
                </li>
          {/* </div> */}
      </ul>
      </nav>

    {/* // <nav className='navbar'>
    //     <div className='nav_icon' onClick={() => openSidebar()}>
    //         <i className='fa fa-bars'></i>
    //         </div>
    //         <ul className='navbar-nav ml-auto'>
    //         <div className='navbar__left'>
    //             <li>
    //             <h2 className='mx-3'>Home</h2>
    //             </li>
    //             {/* <a href='#'>Subscribers</a>
    //             <a href='#'>video managment</a>
    //             <a className='active_link' href='#'>admin</a> */}
    //         </div>
    //         <div className='navbar__right'>
    //             <li className='nav-item dropdpwn'>
    //                 <a className='nav-link dropdown-toggle' href="#" id="userDropdown" role="button"
    //                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                         <span className="mr-2 d-none d-lg-inline text-grey-600 small">Eyimisan Abusomwan</span>
    //                     </a>

    //             </li>
    //             <a href='#'>
    //                 <i className='fa fa-search'></i>
    //             </a>
    //             <a href='#'>
    //                 <i className='fa fa-clock-0'></i>
    //             </a>
    //             <a href='#'>
    //                 <img src={avatar} alt='userpic'  width='30px'/>
    //             </a>
    //         </div>
    //         </ul>
        
    // </nav> */}

  );
}


export default Navbar;