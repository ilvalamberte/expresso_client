import React , { useContext, useRef } from 'react';
import GuestContext from '../../context/packageContext/packageContext.js'
import { FcSearch } from 'react-icons/fc'
import PackageContext from '../../context/packageContext/packageContext.js';


const Header = () => {
    const { searchPackages, clearSearch } = useContext(PackageContext)
    const searchValue = useRef('');


    const handleChange = e => {

        if (searchValue.current.value!== '') {
            searchPackages(e.target.value)
        } else {
            clearSearch()
        }

    }

    return(

    <header>
    <div className="search-wrapper">
            <span className="ti-search"><FcSearch /></span>
            <input ref={searchValue} type="search" onChange={handleChange} placeholder="search"></input>
        </div>

    </header>
    )
}


export default Header;