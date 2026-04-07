import React from 'react'
import Menu from './menuApi';
import "./style.css";

const MenuCard = ({ menuData }) => {
    
    return (
        <>
            <section>
                {menuData.map((curElem) => {
                    const {id, name, category, image, description} = curElem;

                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                    <span className='card-number card-circle subtle'> {id} </span>
                                        <span className='card-author subtle'>{category}</span> <br />
                                        <span className='card-description subtle'>
                                            {description}                                            
                                        </span>
                                        <div className='card-read'> {name} </div>
                                    </div>
                                    <img src={image} alt="images" className='card-media' />
                                    <span className='card-tag subtitle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )

                })}
            </section>
        </>
    )
                    
}

export default MenuCard;