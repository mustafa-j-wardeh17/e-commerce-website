import { useEffect, useState } from 'react'
import Products from '../../components/Products/Products'
import './Home.css'
import { useLoaderData } from 'react-router-dom'
function Home() {

  const [products, setProducts] = useState([]);


  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);


  const [Position,SetPosition] =useState(0)

  const lefthandler =()=>{
    SetPosition(Position===0?3:Position-1)
    console.log('left : '+Position)
  }
  const righthandler =()=>{
    SetPosition(Position===3?0:Position+1)
    console.log('right : '+Position)
  }


  const Imagesdata = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  return (
    <div className="home-container">
      <div className="relative home-banner flex flex-column">
        <div id='left' className="banner-images" style={{transform:`translateX(-${Position*100}vw)`}}>
          <div className="banner-item ">
            <img src={Imagesdata[0]} alt="" />
          </div>

          <div className="banner-item ">
            <img src={Imagesdata[1]} alt="" />
          </div>

          <div className="banner-item ">
            <img src={Imagesdata[2]} alt="" />
          </div>

          <div className="banner-item ">
            <img src={Imagesdata[3]} alt="" />
          </div>
        </div>
        <div className='absolute banner-buttons color-black flex gap-30 justify-between'>
          <i className="fa-solid fa-left-long" onClick={lefthandler}></i>
          <i className="fa-solid fa-right-long" onClick={righthandler}></i>
        </div>
      </div>
      <div className="home-products">
        <Products products={products}/>
      </div>
    </div>
  )
}

export default Home


