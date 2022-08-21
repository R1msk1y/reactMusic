function Header (){

 return (
    <header className='header'>
    <div className='container'>
    <div className='header__inner'>
      <div className='header__left'>
        <img className='header__left-img' width={60} height={60} src='./img/header/header-logo.jpg' alt='header-logo'/>
        <div className='header__left-flex'>
          <h2>React Music</h2>
          <p>Магазин моднейшей музыки</p>
        </div>

      </div>
      <div className='header__right'>

        <div className='header__right-box'>
        <img className='header__left-img' width={18} height={12} src='./img/header/cart.svg' alt='cart'/>
      <span>1000 руб.</span>
      
        </div>
      
      <img className='header__left-img' width={18} height={12} src='./img/header/like.svg' alt='like'/>
      <img className='header__left-img' width={18} height={12} src='./img/header/user.svg' alt='user'/>
      </div>
       
    </div>
    </div>
    </header>
 );

};

export default Header