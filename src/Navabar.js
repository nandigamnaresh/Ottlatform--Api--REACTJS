import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    const [a, b]=useState('');

    const chinna=(e)=>{
        b(e.target.value)
    }


    return (
        <div>





            <div className='container-fluid'>


                <div className='row pt-4 ps-4 pb-4  fw-bolder'>


                    <div className='col-lg-1'>
                        <Link to="/" ><h6>ACTION</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/come"><h6>COMEDY</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/horr"><h6>HORROR</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/dram"><h6>DRAMA</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/thri"><h6>THRILLER</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/anim" ><h6>ANIMATION</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/roma" ><h6>ROMANCE</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/adve"><h6>ADVENTURE</h6></Link>
                    </div>



                    <div className='col-lg-2' >
                        <ul>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    LANGUAGES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">ENGLISH</a></li>
                                    <li><a class="dropdown-item" href="#">TELUGU</a></li>
                                    <li><a class="dropdown-item" href="#">TAMIL</a></li>
                                    <li><a class="dropdown-item" href="#">HINDI</a></li>
                                    <li><a class="dropdown-item" href="#">KANNADA</a></li>
                                    <li><a class="dropdown-item" href="#">MALAYALAM</a></li>
                                    <li><a class="dropdown-item" href="#">FRANCE</a></li>
                                    <li><a class="dropdown-item" href="#">CHINES</a></li>
                                    <li><a class="dropdown-item" href="#">JAPAN</a></li>
                                    <li><a class="dropdown-item" href="#">BENGALI</a></li>
                                    <li><a class="dropdown-item" href="#">URDU</a></li>
                                    <li><a class="dropdown-item" href="#">GUJARATI</a></li>
                                    <li><a class="dropdown-item" href="#">ITALIAN</a></li>
                                    <li><a class="dropdown-item" href="#">MARATHI</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                    <div className='col-lg-2' >
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={a}    onChange={chinna}/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>





                </div>
            </div>












            
        </div>
    )
}

export default Navbar