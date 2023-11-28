import React, { useEffect, useState } from 'react'
import './NavNNew.css'
import { Play, Info, VolumeX, Volume2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Facebook, Instagram, Twitter, Youtube,Copyright } from 'lucide-react'
import { API_KEY, instance, image_url } from '../key and firebase/Apikey_instance'
import Newitem from './Newitem'
import Navbar from './Navbar'
function NavNNew() {
    const [movies, setMovies] = useState()
    const [cutmovies, setCutmovies] = useState([])
    const [mute, setMute] = useState(true)
    const [movieid, setMovieid] = useState()
    const [ids, setIds] = useState()
    const [maxv, setMaxv] = useState(6)
    const [minv, setMinv] = useState(0)

    const unmutebtn = () => {
        if (mute) {
            setMute(false)

            // console.log(ids)
            // console.log(cutmovies)

        }
        else {

            setMute(true)
        }
    }

    useEffect(() => {
        // console.log('useEffect executed');
        instance.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then(res => {

            setMovies(res.data.results)
            // console.log(res.data.results)
            // setIds(res.data.results.map(obj => obj.id))
            setCutmovies([])
            // console.log(minv+"   "+maxv)
            for (let i = minv; i <= maxv; i++) {

                // console.log(res.data.results[i])

                setCutmovies(obj => [...obj, res.data.results[i]]);

            }
            // console.log(cutmovies)
        })
        if (movieid) {

            instance.get(`movie/${movieid}/videos?api_key=${API_KEY}`).then(res => {
                // console.log(res.data)
                // console.log(res.data.results[0].key)
                setIds(res.data.results[0].key)
            }).catch(err => console.log(err))

        }


    }, [maxv, movieid])

    const goleft = () => {
        // console.log(minv + " " + maxv)
        // console.log(cutmovies)
        if (minv >= 6) {
            setCutmovies([])
            setMinv(obj => obj - 6)
            setMaxv(obj => obj - 6)
            for (let i = minv; i <= maxv; i++) {
                // console.log(movies[i])
                setCutmovies(obj => [...obj, movies[i]]);

            }
        }
        if (minv < 6) {
            setMinv(obj => 0)
            setMaxv(obj => 6)
        }


    }

    const goright = () => {


        // console.log(minv + " " + maxv)

        if (movies.length - maxv < 5) {
            setCutmovies([])
            setMinv(obj => movies.length - 7)
            setMaxv(obj => movies.length - 1)


            for (let i = minv; i <= maxv; i++) {

                console.log(movies[i])
                setCutmovies(obj => [...obj, movies[i]]);

            }

        }
        else {
            setCutmovies([])
            setMinv(obj => obj + 6)
            setMaxv(obj => obj + 6)
            for (let i = minv; i <= maxv; i++) {

                // console.log(movies[i])
                setCutmovies(obj => [...obj, movies[i]]);

            }




        }
    }


    return (
        <div className='frontpage'>

            <div className='fullplace'>

                {/* <div className='navbar'>

                    <div className='firstnav'>

                        <div className='netflixlogo'>
                            <img src={require('../Allimages/1200px-Logonetflix.png')}></img>
                        </div>

                        <div className='browse'>
                            <h5>Browse <ChevronDown /></h5>

                        </div>
                        <div className='navlist'>
                            <div className='arrownline'><ChevronUp className='chevronup' /><hr /></div>
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>TvShows</a></li>
                                <li><a>Movies</a></li>
                                <li><a>News & Popular</a></li>
                                <li><a>Mylist</a></li>
                                <li><a>BrowseByLanguage</a></li>
                            </ul>

                        </div>

                    </div>

                    <div className='secnav'>

                        <a><Search className='topicon' /></a>
                        <a>Children</a>
                        <a><Bell className='topicon' /></a>
                        <a> <User className='topicon' /></a>
                        <a><ChevronDown className='topicon' /></a>



                    </div>

                </div> */}
                
                <Navbar />

                <div className='firstmovie'>
                    <div className='moviediv'>
                        <p>{movies ? movies[0].title : <></>}</p>
                        <span>{movies ? movies[0].overview : <></>}</span>
                        <div className='playbtn'>
                            <button><Play className='btnicon' />Play</button>
                            <button><Info size={28} className='btnicon' />More Info</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className='spacediv'>
            </div> */}

            <div className='firstvideo'>
                <div className='videosize '>
                    <video width="1800" className='videolen' autoPlay={true} muted={mute} loop>
                        <source src={require('../Allimages/Oppenheimer_New_Trailer_uYPbbksJxIg_136.mp4')} type='video/mp4' />
                    </video>
                </div>
            </div>


            <div className='mutebtn'>
                <button onClick={unmutebtn}>{mute ? <VolumeX className="volumebtn" color="#ffffff" /> : <Volume2 className="volumebtn" color="#ffffff" />}</button>
            </div>

            <div className='popularmovies'>
                <h3>Popular on Netflix</h3>


                <div className='movielist'>
                    {cutmovies ? cutmovies.map(obj => {
                        return (
                            <div key={obj.id} className='moviedetails'
                                onMouseEnter={() => { setMovieid(obj.id) }} //really not needed just used thats it
                                onMouseLeave={() => setMovieid(null)}>


                                <div className='popularlist'>
                                    <img src={image_url + obj.backdrop_path} alt={obj.title}></img>


                                    <div className='popup '>
                                        {/* <iframe width="500" height="200" src={`https://www.youtube.com/embed/${ids}?autoplay=1&loop=1&mute=1`} frameborder="0" allowfullscreen></iframe> */}
                                        <img src={image_url + obj.backdrop_path}></img>
                                        <div className='poinside'>

                                            <h4>{obj.title}</h4>
                                            <h2>{obj.overview}</h2>
                                        </div>
                                    </div>



                                </div>



                            </div>
                        )
                    }) : <></>}
                </div>

                <div className='leftright'>
                    <button onClick={goleft}><ChevronLeft className="Bleft" strokeWidth={1.75} /></button>
                    <button onClick={goright}><ChevronRight className="Bright" strokeWidth={1.75} /></button>
                </div>

            </div>


            <Newitem movieheading={'Action Movies'} genreid={28} />
            <Newitem movieheading={'Adventure Movies'} genreid={12} />
            <Newitem movieheading={'Animation Movies'} genreid={16} />
            <Newitem movieheading={'Comedy Movies'} genreid={35} />
            <Newitem movieheading={'Crime Movies'} genreid={80} />
            <Newitem movieheading={'Documentry Movies'} genreid={99} />
            <Newitem movieheading={'Drama Movies'} genreid={18} />
            <Newitem movieheading={'Thriller Movies'} genreid={53} />
            <Newitem movieheading={' Science Fiction'} genreid={878} />
            <Newitem movieheading={'Western'} genreid={37} />


            <div className='socialmediaicons'>
                <Facebook className='Sicons'/>
                <Instagram className='Sicons' />
                <Twitter className='Sicons' />
                <Youtube className='Sicons' />
            </div>

            <div className='footer'>

                <div className='f1' >
                    <a>Audio Description</a>
                    <a>Investor Relations</a>
                    <a>Legal Notices</a>
                </div>

                <div className='f2'>
                    <a>Help centre</a>
                    <a>Jobs</a>
                    <a>Cookie Preferences</a>

                </div>
                
                <div className='f3'>
                    <a>Gift Cards</a>
                    <a>Terms of Use</a>
                    <a>Corporate Information</a>


                </div>

                <div className='f4'>
                    <a>Meda Centre</a>
                    <a>Privacy</a>
                    <a>Contact Us</a>

                </div>
            </div>

            <div className='servicecode'>
                <a>Service Code</a>
                <span><Copyright className='copyright'/>1997-2023 Netflix,Inc</span>
            </div>



        </div>
    )
}

export default NavNNew