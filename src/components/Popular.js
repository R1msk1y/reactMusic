import React from "react";

function Popular (props){


    const [toggleImgBtn, setValue] = React.useState(false);

    function toggleImgOnCard(){
       return setValue(!toggleImgBtn);
    }
    

    
     
   
    return  <div className="popularMusic__productList-item">

        <div className="popularMusic__productList-imgBox">

        <img src="./img/popularMusic/addFavoriteDone.svg" alt="addFavoriteDone"/>

        </div>

            <div className="popularMusic__productList-imgBox">

            <img className="popularMusic__productList-img" src={props.imgUrl} alt="addFavoriteDone"/>

            </div>

         
            <p className="popularMusic__productList-artistName">{props.artistName}</p>
            <p className="popularMusic__productList-albumName">{props.albumName}</p>
            <div className="popularMusic__productList-priceBox">

                <div>
                <p  className="popularMusic__productList-text">Цена:</p>
                <p className="popularMusic__productList-price">{props.price} <span>руб.</span></p>
                </div>

                <button onClick={toggleImgOnCard}>
                <img className="popularMusic__productList-addCart" src={toggleImgBtn ? './img/popularMusic/addCartDone.svg' : './img/popularMusic/addCart.svg'}/>
                </button>
            
                

               

          

            </div>
            
            
            
        </div>




  

};

export default Popular