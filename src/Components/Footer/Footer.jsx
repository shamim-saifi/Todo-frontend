import React from 'react'
import './Footer.css'
import fotter from '../../Img/footer.png'
import {BiLogoInstagram,BiLogoFacebook,BiLogoGithub,} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

const Footer = () => {
  return (
    <div className='Footer'>       
        <div>
            <h1>Shamim Saifi</h1>
            <p>TODO.</p>
        </div>
        <div className='logo'>
            <img src={fotter} alt="logo" />
        </div>
        <div>
            <p>Social Media</p>
            <div className='mediaIcons'>
                <a id='icon1' href="https://www.instagram.com/shamim_raees" target='_blank'><BiLogoInstagram /></a>
                <a id='icon2' href="https://www.facebook.com/shamim.raees.505" target='_blank'><BiLogoFacebook /></a>
                <a id='icon3' href="https://github.com/shamim-saifi" target='_blank'><BiLogoGithub /></a>
                <a id='icon4' href="https://shamim-saifi.vercel.app" target='_blank'><CgProfile /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer