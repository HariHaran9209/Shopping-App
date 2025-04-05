import React from 'react'
import '../css/ExploreMenu.css'
import { menu_list } from '../assets/frontend_assets/assets'

const ExploreMenu = (categroy, setCategory) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our menu</h2>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate tempora expedita doloribus qui dolores saepe dolorum cumque libero praesentium maxime tenetur id nesciunt minus nisi quod, aliquid eum sunt?</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}


export default ExploreMenu
