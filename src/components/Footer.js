import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Twitter from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon /><FacebookIcon /><YouTubeIcon /><Twitter />
        </div> 
        <p>&copy; 2023 bambinospizza.com</p>
        
    </div>
  )
}

export default Footer