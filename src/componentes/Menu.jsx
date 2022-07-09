import { useState } from 'react';

export const Menu = ({value}) => {
    
    const [ touch, setCounter ] = useState( value )
    const clickNabIcon = () => {
        setCounter( <div className="header__menu">
                        <a href="#" class="header__link">Home</a>
                        <a href="#" class="header__link">About</a>
                        <a href="#" class="header__link">Services</a>
                        <a href="#" class="header__link">Portfolio </a>
                        <a href="#" class="header__link">Pages <i class="fa fa-caret-down"></i></a>
                        <a href="#" class="header__link">Contact</a>
                    </div>);
    }
  return (
        <header className="header">
                <div className="header__logo">
                    <i className="fa-solid fa-trophy fa-2x" id="iconsm"></i>
                    <div className="header__title">
                        <h1>Retro</h1>
                        <p>Consultancy</p>
                    </div>
                </div>
                <div className="header__links">
                    <div onClick={clickNabIcon}>
                        {touch}
                    </div>
                </div>
        </header>
  )
}


