import React, { useEffect, useState } from 'react'
import { ChevronUp, Search, Bell, ChevronDown, User } from 'lucide-react'
function Navbar() {

    const [scrolled,setScrolled] =useState()


    useEffect(()=>{

        window.addEventListener('scroll',handscroll)

        return ()=>{
            window.addEventListener('scroll',handscroll)
        }


    },[])

    const handscroll=()=>{
       const scrolly= window.scrollY
       const threshold=50
        // console.log(scrolly)
       if(scrolly>threshold){
        setScrolled(true)
       }
       else{
        setScrolled(false)
       }
    }
    return (

        <div>
            <div className={scrolled?'navbar scrollcolor':'navbar'}>

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

            </div>
        </div>
    )
}

export default Navbar