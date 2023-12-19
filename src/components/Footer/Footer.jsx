import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';

const Footer = () => {
const location = useLocation()
const getFooterStyles = ()=>{
  if(location.pathname === "/"){
    return "horizontal"
  }else if(location.pathname === "/about"){
    return "vertical"
  }else if (location.pathname === "/projects"){
return "vertical"
  }else if(location.pathname === "/contact"){
    return "middle"
  }
}
    return (
      <footer className={getFooterStyles()}>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} className='fa-lg'/>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} className='fa-lg'/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} className='fa-lg'/>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className='fa-lg'/>
        </a>
      </div>
      <div className="copyright">© Copyright 2023</div>
    </footer> 
    )
}

export default Footer