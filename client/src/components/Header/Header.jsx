import { Link } from 'react-router-dom'
import { cartImg, githubLogo, logoDark } from '../../assets'
import './Header.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
function Header() {

  const product = useSelector(state => state.bazar.productData)
  const user = useSelector(state => state.bazar.userInfo)

  const [MenuState, SetMenuState] = useState('hide')
  const [HideMenuButton, SetHideMenuButton] = useState('show')
  const menuhandler = () => {
    document.getElementById('menuBtn').style.display = 'none'

    document.getElementById('header').style.display = 'block'
    document.getElementById('closeBtn').style.display = 'block'
  }

  const closemenu = () => {
    document.getElementById('menuBtn').style.display = 'block'

    document.getElementById('header').style.display = 'none'
    document.getElementById('closeBtn').style.display = 'none'
  }

  return (
    <div className='relative'>
      <div className=' cintainer-header flex align-center gap-30'>
        <div className="header flex align-center justify-between ">
          <Link to={'/'}>
            <div className="logo">
              <img src={logoDark} alt="image" />
            </div>
          </Link>
          <div id='menuBtn' className={` menu-icon`}>
            <i onClick={menuhandler} className="fas fa-bars font-l pointer"></i>
          </div>
          <div id='header' className={` header-content flex gap-40 align-center`}>
            <ul className='header-list list-none flex align-center gap-20 font-m'>
              <Link className='link-home flex justify-center' to={'/'}>
                <li className='header-list-item home-first font-500 text-decoration color-black'>Home</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>
                <li className='header-list-item font-500 text-decoration color-black'>Pages</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>
                <li className='header-list-item font-500 text-decoration color-black'>Shop</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>

                <li className='header-list-item font-500 text-decoration color-black'>Element</li>
              </Link>
              <Link className='link-home flex justify-center' to={'/'}>

                <li className='header-list-item font-500 text-decoration color-black'>Blog</li>
              </Link>
              <Link to={'/cart'}>
                <div className='header-image cart font-m'>
                  <img src={cartImg} alt='cc' />
                  <span>{product.length}</span>
                </div>
              </Link>
            </ul>
            <Link to={'/login'}>
            <p id='closeBtn' onClick={() => closemenu()} className='x-close'>x</p>
              {user ?
                <div className=' flex justify-center'>
                  <div className='user-info flex gap-10 align-center'>
                    <img className='user-image' src={user.image} />
                    <p className='userName'>{user.name}</p>
                  </div>
                </div>
                : <img className='user-image' src={githubLogo} alt='cc' />
              }
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header