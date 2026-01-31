import React from 'react'
import dayjs from 'dayjs'
import { navLinks, navIcons } from '#constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt='logo'/>
            <p className='font-bold'>Charan's Portfolio</p>

            <ul>
                {navLinks.map(({id, name}) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}><img src={`${import.meta.env.BASE_URL}${img}`} alt="hover-icons" className='icon-hover'/></li>
                ))}
            </ul>
            <time>{dayjs().format('ddd D MMM h:mm A')}</time>
        </div>
    </nav>
  )
}

export default Navbar
