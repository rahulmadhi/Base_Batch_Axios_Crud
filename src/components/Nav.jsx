import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <nav>
        <div className='logoblock'>
            <div>
                 <img className='logoimg' src="https://static.wixstatic.com/media/cc63a1_f87cfa95acd348e8921a8014d45c24e5~mv2.png/v1/fill/w_480,h_960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cc63a1_f87cfa95acd348e8921a8014d45c24e5~mv2.png" alt="" />
            </div>
            <div>
                  <i>MONK STORE</i>
            </div>
        </div>
        <div>
            <Link to={"/"}>PRODUCT</Link>
        </div>
        <div>
            <Link to={"/cart"}>CART</Link>
        </div>
        
   </nav>
  )
}

export default Nav