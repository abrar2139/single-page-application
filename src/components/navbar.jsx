import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import logo from '../images/logo1.png'

const NavbarComponent = () => {
  return (
    <header class="text-gray-600 body-font sticky z-10 top-0 bg-white">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={logo} alt="logo" className='w-16 h-16' />
        <span class="ml-3 text-xl">Tech hub</span>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' class="mr-5 hover:text-yellow-500">Home</Link>
      <Link to='/about' class="mr-5 hover:text-yellow-500">About</Link>
      <Link to='/services' class="mr-5 hover:text-yellow-500">Services</Link>
      <Link to='/Pricing' class="mr-5 hover:text-yellow-500">Pricing</Link>
      <Link to='/contact' class="mr-5 hover:text-yellow-500">Contact</Link>
    </nav>
    <Link to='/cart' class="mr-5 text-yellow-500 hover:text-gray-900"><FaCartShopping style={{fontSize:"35px"}}/></Link>
  </div>
</header>
  )
}

export default NavbarComponent