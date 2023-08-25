import React from 'react';
import './App.module.css';
import s from './App.module.css';
import {BiLogoGithub, BiLogoFacebook, BiLogoTelegram} from "react-icons/bi";
import Car from './assets/image/BlueCar.png';

function App() {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <a href="#" className={s.logo}>Cars.</a>
                <nav className={s.navbar}>
                    <a href="#" className={s.active}>Home</a>
                    <a href="#">About</a>
                    <a href="#">Review</a>
                    <a href="#">Featured</a>
                    <a href="#">Contact</a>
                </nav>
                <div className={s.socialMedia}>
                    <a href="#"><BiLogoGithub className={s.icon}/></a>
                    <a href="#"><BiLogoFacebook className={s.icon}/></a>
                    <a href="#"><BiLogoTelegram className={s.icon}/></a>
                </div>
            </header>
            <div className={s.home}>
                <div className={s.homeContent}>
                    <h1>
                        Car Dealing Experience.
                    </h1>
                    <h3>
                        Redefined!
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus ad at atque delectus dolore eveniet explicabo fuga
                        illum iure minus mollitia nesciunt nulla, vero.
                        Cupiditate distinctio id itaque?
                    </p>
                    <a href="#" className={s.btn}>Explore Cars</a>
                </div>
                <div className={s.homeImg}>
                    <div className={s.rHomeCar}>
                        <img src={Car} alt=""/>
                    </div>
                </div>
                <div className={s.rHomeCar2}></div>
            </div>
        </div>
    );
}

export default App;
