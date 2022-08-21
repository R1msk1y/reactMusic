function Item (){

    return (
        <div className="main__cards-item">
            <div style={{backgroundImage:'url(/img/main/limpBizkit.jpg)'}}  className="main__cards-img"></div>
            <p className="main__cards-descr">STILL SUCKS</p>
          
                <div className="main__cards-box">

            <div>
                <p>Цена:</p>
                <strong>1200 руб.</strong>
             </div>

             <button>
                <img src="./img/main/add.svg" alt="add" />
             </button>


                </div>
               
                            
          
        </div>
    );

};


export default Item;