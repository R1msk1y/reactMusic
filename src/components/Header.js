function Header () {

    return <header className="header">
        <div className="header__left">
            <img className="header__left-img" src="/img/header/header-logo.jpg"/>
            <div className="header__left-box">
                <h2 className="header__left-title">React Music</h2>
                <h3 className="header__left-descr">Магазин моднейшей музыки</h3>
            </div>
        
        </div>
        <div className="header__right">
            <div className="header__right-box">
                <img src="./img/header/cart.svg" alt="cart"/>
                <p className="header__right-text">1205<span className="header__right-span">руб.</span></p>
            </div>

            <button>
            <img src="./img/header/like.svg" alt="like"/>
            </button>

            <button>
            <img src="./img/header/user.svg" alt="user"/>
            </button>
   
        </div>
        
        
    </header>

};

export default Header