import React, {useState, useEffect} from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

import Pic1 from '../../images/rochelle_2.jpg'
import Pic2 from '../../images/rochelle_3.jpg'
// import Pic3 from '../../images/rochelle_4.jpg'
import Pic4 from '../../images/rochelle_5.jpg'
import Pic5 from '../../images/rochelle_6.jpg'
import Pic6 from '../../images/rochelle_7.jpg'
import Pic7 from '../../images/rochelle_8.jpg'
import Pic8 from '../../images/rochelle_9.jpg'
import Pic9 from '../../images/rochelle_10.jpg'
import Pic10 from '../../images/rochelle_11.jpg'
import Pic11 from '../../images/rochelle_12.jpg'
import Pic12 from '../../images/rochelle_13.jpg'
import Pic13 from '../../images/rochelle_14.jpg'
// import Pic14 from '../../images/rochelle_15.jpg'
import Pic15 from '../../images/rochelle_16.jpg'
import Pic16 from '../../images/rochelle_17.jpg'
import Pic17 from '../../images/rochelle_18.jpg'



const Sidebar = () => {
    const [index, setIndex] = useState(0);
    const imgs = [Pic1, Pic2, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12, Pic13, Pic15, Pic16, Pic17]
    

    useEffect(() => {
        const interval = setInterval(()=> {
            if(index === imgs.length - 1){
                setIndex(0);
            }else{
                setIndex(index + 1)
            }
            
        }, 5000)
        return () => clearInterval(interval); 
    }, [index, imgs.length])
    
    
    return (
        <div className="center-align">
            <h3 className="hack">.</h3>
            
            {/* <div className="card-panel black-text">
                <h5 className="blue-text">Service of Songs</h5>
                <p>Service of songs will be held at All Saints Church Bletchley, Milton Keynes Buckinghamshire, MK3 3AN, on the 16th of November at 1pm.</p>
                <h5 className="blue-text">Wake Keeping Service</h5>
                <p>There will be a Wake Keeping service on the 21st on November, 2019 at his residence in Enugu State.</p>
                <h5 className="blue-text">Burial Ceremony</h5>
                <p>Burial ceremony will be on 29th November, 2019, at his hometown in Imo State.</p>
            </div> */}
            
            <div className="card-panel">
                <Gallery index={index} 
                
                onRequestChange={(i)=> {
                    setIndex(i);
                }}
                
                >
                    {imgs.map(image => {
                        return (
                            <GalleryImage key={image} objectFit="contain" src={image} />
                        )
                    })}
                </Gallery>
            </div>

        </div>
    )
}

export default Sidebar
