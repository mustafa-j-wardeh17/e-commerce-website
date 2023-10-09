import { Link } from 'react-router-dom';
import { cartImg, githubLogo, logoDark } from '../../assets';
import './Header.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Header() {
  const product = useSelector(state => state.bazar.productData);
  const user = useSelector(state => state.bazar.userInfo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='relative'>
      <div className='cintainer-header flex align-center gap-30'>
        <div className="header flex align-center justify-between">
          <Link to={'/'}>
            <div className="logo">
              <img src={logoDark} alt="image" />
            </div>
          </Link>
          <div id='menuBtn' className={`${isMenuOpen ? 'hide' : 'menu-icon'} `} onClick={toggleMenu}>
            <i className="fas fa-bars font-l pointer"></i>
          </div>

          <div id='header' className={`header-content flex gap-40 align-center ${isMenuOpen === true ? 'mobile' : 'hide'}`}>
            <p id='closeBtn' onClick={() => closeMenu()} className={` x-close`}>
              <i className="x-close-icon fa-solid fa-xmark"></i>
            </p>
            <ul className='header-list list-none flex align-center gap-20 font-m'>
              <Link className='link-home flex justify-center' to={'/'}>
                <li onClick={() => closeMenu()} className='header-list-item home-first font-500 text-decoration color-black'>Home</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>
                <li onClick={() => closeMenu()} className='header-list-item font-500 text-decoration color-black'>Pages</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>
                <li onClick={() => closeMenu()} className='header-list-item font-500 text-decoration color-black'>Shop</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>

                <li onClick={() => closeMenu()} className='header-list-item font-500 text-decoration color-black'>Element</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>

                <li onClick={() => closeMenu()} className='header-list-item font-500 text-decoration color-black'>Blog</li>
              </Link>
              <Link to={'/cart'}>
                <div className='header-image cart font-m'>
                  <img src={cartImg} alt='cc' />
                  <span>{product.length}</span>
                </div>
              </Link>
            </ul>

            <Link to={'/login'}>
              {user ?
                <div className=' flex justify-center'>
                  <div className='user-info flex gap-10 align-center' onClick={() => closeMenu()}>
                    <img className='user-image' src={user.image} />
                    <p className='userName' >{user.name}</p>
                  </div>
                </div>
                :
                <div className='user-info flex gap-10 align-center' onClick={() => closeMenu()}>
                  <div className='user-icon'>
                    <i className='fa-solid fa-user user-i-icon' onClick={() => closeMenu()} ></i>
                  </div>
                  <p className='userName' >Login Please</p>
                </div>

              }
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header