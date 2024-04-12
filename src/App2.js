import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';





function App2({ gen }) {
    const [a, b] = useState();



    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://ott-details.p.rapidapi.com/advancedsearch',
                params: {
                    start_year: '1970',
                    end_year: '2020',
                    min_imdb: '6',
                    max_imdb: '7.8',
                    genre: `${gen}`,
                    language: 'telugu',
                    type: 'movie',
                    sort: 'latest',
                    page: '1'
                },
                headers: {
                    // 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
                    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                b(response.data.results)
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [gen]);





















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
                                    <li><a class="dropdown-item" href="#" >MARATHI</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                    <div className='col-lg-2' >
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>





                </div>
            </div>










            <div className='container-fluid'>
                <h2 className='text-center mt-5 mb-5 text-primary'>MOVIES</h2>
                <div className='row ms-5 ps-5'>
                    {
                        a && a.map(data =>
                            <div className='col-lg-3 pb-5  text-center'>
                                <div class="card" style={{ width: "20rem", height: "100%" }}>
                                    <div class="card-body ">
                                        <h2 className='card-title'>TITLE:{data.title}</h2>
                                        <img src={data.imageurl[0]} />
                                        <h5 className='card-text'>GENRE:{data.genre[0]},{data.genre[1]},{data.genre[2]}</h5>
                                        <h5 class="card-text">IMDBID:{data.imdbid}</h5>
                                        <h5 className='card-text'>IMDBRATING{data.imdbrating}</h5>
                                        <h5 class="card-title mt-2">Realease Date:{data.released}</h5>
                                        <h6 className='card-text'>TYPE:{data.type}</h6>
                                        <p className='card-description'>DECRIPTION:{data.synopsis}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default App2;
































































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function App2({ gen }) {
//     const [movies, setMovies] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedLanguage, setSelectedLanguage] = useState('');



//     useEffect(() => {
//         fetchData();
//     }, [gen, searchQuery, selectedLanguage]); 



//     const fetchData = async () => {
//         try {
//             const options = {
//                 method: 'GET',
//                 url: 'https://ott-details.p.rapidapi.com/advancedsearch',
//                 params: {
//                     start_year: '1970',
//                     end_year: '2020',
//                     min_imdb: '6',
//                     max_imdb: '7.8',
//                     genre: gen,
//                     language: selectedLanguage, 
//                     type: 'movie',
//                     sort: 'latest',
//                     title: searchQuery,
//                     page: '1'
//                 },
//                 headers: {
//                     // 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
//                     'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
//                 }
//             };
//             const response = await axios.request(options);
//             setMovies(response.data.results);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleLanguageChange = (language) => {
//         setSelectedLanguage(language);
//     };

//     return (
//         <div>
//             <div className='container-fluid'>
//                 <div className='row pt-4 ps-4 pb-4  fw-bolder'>
//                     <div className='col-lg-1'>
//                         <Link to="/"><h6>ACTION</h6></Link>
//                     </div>
//                     <div className='col-lg-1'>
//                         <Link to="/come"><h6>COMEDY</h6></Link>
//                     </div>
                   
//                     <div className='col-lg-2'>
//                         <input
//                             type="text"
//                             placeholder="Search for Movies"
//                             value={searchQuery}
//                             onChange={handleSearchChange}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className='col-lg-2'>
//                         <select
//                             className="form-select"
//                             value={selectedLanguage}
//                             onChange={(e) => handleLanguageChange(e.target.value)}>
//                             <option value="">Select Language</option>
//                             <option value="malayalam">Malayalam</option>
//                             <option value="telugu">telugu</option>
//                             <option value="tamil">tamil</option>

//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <div className='container-fluid'>
//                 <h2 className='text-center mt-5 mb-5 text-primary'>MOVIES</h2>
//                 <div className='row ms-5 ps-5'>
//                     {movies.map((data, index) => (
//                         <div key={index} className='col-lg-3 pb-5 text-center'>
//                             <div className="card" style={{ width: "20rem", height: "100%" }}>
//                                 <div className="card-body">
//                                     <h2 className='card-title'>TITLE: {data.title}</h2>
//                                     <img src={data.imageurl[0]} alt={data.title} />
//                                     <h5 className='card-text'>GENRE: {data.genre.join(', ')}</h5>
//                                     <h5 className="card-text">IMDB ID: {data.imdbid}</h5>
//                                     <h5 className='card-text'>IMDB Rating: {data.imdbrating}</h5>
//                                     <h5 className="card-title mt-2">Release Date: {data.released}</h5>
//                                     <h6 className='card-text'>TYPE: {data.type}</h6>
//                                     <p className='card-description'>DESCRIPTION: {data.synopsis}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App2;








