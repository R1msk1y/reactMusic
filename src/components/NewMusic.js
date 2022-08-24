function NewMusic (){

    return   <section className="newMusic">
    <h1 className="newMusic__title">Моднейшие новинки</h1>
    <div className="newMusic__productList">
        <div className="newMusic__productList-item">

        <div className="newMusic__productList-imgBox">

        <img src="./img/newMusic/addFavoriteDone.svg" alt="addFavoriteDone"/>

        </div>

            <div className="newMusic__productList-imgBox">

            <img className="newMusic__productList-img" src="./img/newMusic/maloPolovin.jpg" alt="addFavoriteDone"/>

            </div>

            
            
         
            <p className="newMusic__productList-artistName">Ольга Бузова</p>
            <p className="newMusic__productList-albumName">Под звуки поцелуев</p>
            <div className="newMusic__productList-priceBox">

                <div>
                <p  className="newMusic__productList-text">Цена:</p>
                <p className="newMusic__productList-price">12 999 <span>руб.</span></p>
                </div>

                
                <img className="newMusic__productList-addCart" src="./img/newMusic/addCart.svg"/>
                

               

          

            </div>
            
            
            
        </div>
    </div>

    </section>

  

};

export default NewMusic