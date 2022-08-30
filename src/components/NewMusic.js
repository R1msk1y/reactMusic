import React from "react";

function NewMusic (props){


    const [toggleImgBtn, setValue] = React.useState(false);

    function toggleImgOnCard(){
       return setValue(!toggleImgBtn);
    }
    

    
     
   
    return  <div className="newMusic__productList-item">

        <div className="newMusic__productList-imgBox">

        <img src="./img/newMusic/addFavoriteDone.svg" alt="addFavoriteDone"/>

        </div>

            <div className="newMusic__productList-imgBox">

            <img className="newMusic__productList-img" src={props.imgUrl} alt="addFavoriteDone"/>

            </div>

         
            <p className="newMusic__productList-artistName">{props.artistName}</p>
            <p className="newMusic__productList-albumName">{props.albumName}</p>
            <div className="newMusic__productList-priceBox">

                <div>
                <p  className="newMusic__productList-text">Цена:</p>
                <p className="newMusic__productList-price">{props.price} <span>руб.</span></p>
                </div>

                <button onClick={toggleImgOnCard}>
                <img className="newMusic__productList-addCart" src={toggleImgBtn ? './img/newMusic/addCartDone.svg' : './img/newMusic/addCart.svg'}/>
                </button>
            
                

               

          

            </div>
            
            
            
        </div>




  

};

export default NewMusic