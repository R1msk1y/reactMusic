function Drawer (){
    return <div className="overlay">
        <div className="drawer">
            <h2 className="drawer__title">Корзина</h2>
            <div className="drawer__column">
                <div className="drawer__column-item">
                  
                        <img className="drawer__column-img" src="./img/newMusic/kish.jpg" />
                    
                    <div className="drawer__column-descrBox">
                        <p className="drawer__column-textOne">Король и шут</p>
                        <p className="drawer__column-textTwo">Бунт на корабле</p>
                        <p className="drawer__column-textThree">1000 <span>руб.</span></p>
                    </div>
             
                        <img className="drawer__column-btn" src="./img/newMusic/addCart.svg"/>

                    
                </div>

              
            </div>
            <div className="drawer__price">
                            <p className="drawer__price-totalPrice">Итого: <span>10000 руб.</span></p>
                          
                            <p className="drawer__price-tax">Налог 20%: <span>2000 руб.</span></p>
                        </div>

                        <button className="drawer__btn">Оформить заказ</button>


            </div>

           
    </div>

}

export default Drawer