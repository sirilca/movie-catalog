import React, { useState ,useEffect } from 'react';
import './Newitem.css';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { API_KEY, instance, image_url } from '../key and firebase/Apikey_instance'

const Newitem = ({genreid , movieheading}) => {
    
    const [movies, setMovies] = useState()
    const [cutmovies, setCutmovies] = useState([])
    const [ids, setIds] = useState()
    const [movieid, setMovieid] = useState()
    const [maxv, setMaxv] = useState(6)
    const [minv, setMinv] = useState(0)
    useEffect(() => {
        // console.log('useEffect executed');

        instance.get(`discover/movie?api_key=${API_KEY}&with_genres=${genreid}`).then(res => {

            setMovies(res.data.results)
            // console.log(res.data.results)
            setCutmovies([])

            for (let i = minv; i <= maxv; i++) {



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
            setMinv(obj => obj - 2)
            setMaxv(obj => obj - 2)
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

                // console.log(movies[i])
                setCutmovies(obj => [...obj, movies[i]]);

            }

        }
        else {
            setCutmovies([])
            setMinv(obj => obj + 2)
            setMaxv(obj => obj + 2)
            for (let i = minv; i <= maxv; i++) {


                setCutmovies(obj => [...obj, movies[i]]);

            }




        }
    }




    return (
        <div className='popularmovies-2'>
            <h3>{movieheading}</h3>
            <div className='movielist-2'>
                {cutmovies ? cutmovies.map(obj => {
                    return (
                        <div key={obj.id} className='moviedetails-2'

                            onMouseEnter={() => { setMovieid(obj.id) }} 
                            onMouseLeave={() => setMovieid(null)}>


                            <div className='popularlist-2'>
                                <img src={image_url + obj.backdrop_path} alt={obj.title}></img>




                                <div className='popup-2'>
                                    {/* <iframe width="500" height="200" src={`https://www.youtube.com/embed/${ids}?autoplay=1&loop=1&mute=1`} frameborder="0" allowfullscreen></iframe> */}
                                    <img src={image_url + obj.backdrop_path} ></img>
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

            <div className='leftright-2'>
                <button onClick={goleft}><ChevronLeft className="Bleft-2" strokeWidth={1.75} /></button>
                <button onClick={goright}><ChevronRight className="Bright-2" strokeWidth={1.75} /></button>
            </div>

        </div>


    );
};

export default Newitem;
