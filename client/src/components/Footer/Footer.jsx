import { logoLight, paymentLogo } from '../../assets'
import './Footer.css'
function Footer() {
  return (
    <div className='footer-container relative'>
      <div className='footer '>
        <div className='col1 '>
          <ul className='list-none flex flex-column gap-20 '>
            <li><img src={logoLight} alt='logo light' /></li>
            <li>&copy;React</li>
            <li><img src={paymentLogo} alt='logo light' /></li>
            <li className='flex gap-10'>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
        <div className='col2'>
          <ul className='list-none flex flex-column  gap-20 font-m'>
            <li><h3 className='color-white'>locate us</h3></li>
            <li><p>Aroub.Hebron.Palestine</p></li>
            <li><p>Mobile: +970569470288</p></li>
            <li><p>mostafa.wardeh2000@gmail.com</p></li>
          </ul>
        </div>
        <div className='col3'>
          <ul className='list-none flex flex-column  gap-15 font-m'>
            <li className='flex gap-10 align-center'><h3 className='color-white'>profile</h3></li>
            <li className='flex gap-10 align-center'><i className="fa-solid fa-user"></i><p>my account</p></li>
            <li className='flex gap-10 align-center'><i className="fa-solid fa-receipt"></i><p>checkout</p></li>
            <li className='flex gap-10 align-center'><i className="fa-solid fa-house"></i><p>order tracking</p></li>
            <li className='flex gap-10 align-center'><i className="fa-solid fa-question"></i><p>help&support</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer