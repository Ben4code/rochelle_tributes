import React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/layout/sidebar'
import TributeList from '../components/tributes/tributeList'
import BgImg from '../images/candles.jpg'
import HomeImg from '../images/rochelle_01.png'


const Home = (props) => {
  
    return (
        <Layout>
        <div id="showcase" style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0,0,0, .2) 0%,
            rgba(0,0,0, .6) 70%,
            rgba(0,0,0, 1) 100%
          ), url('./${BgImg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: `100vh`,
          color: '#fff'
        }}>
          <div className="showcase " >
            <img src={HomeImg} alt="test" className="bg-img" />
            <div className="bg-text">
              <h1 className="bg-title">Uncle</h1>
              <h1 className="bg-title"> 1982 - 2021</h1>
              <h4 className="bg-title">"Your memory shall forever remain in our hearts"</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tributeLayout">
            <div className="tributeList">
              <TributeList history={props.history}/>
            </div>
            <div className="tributeSidebar">
              <Sidebar />
            </div>
          </div>
        </div>

      </Layout>
    )
}

export default Home
