import Header from './components/Header'
import NewMusic from './components/NewMusic'
import Drawer from './components/Drawer';
import Popular from './components/Popular';
import React from 'react';
function App() {
  const newMusicArray = [
    {artistName: 'Ольга Бузова', albumName: 'Под звуки поцелуев', price: 2000, imgUrl: './img/newMusic/maloPolovin.jpg'},
    {artistName: 'Sum 41', albumName: '13 Voices', price: 3000, imgUrl: './img/newMusic/Voices.jpg'},
    {artistName: 'Green Day', albumName: '21st Century Breakdown', price: 5000, imgUrl: './img/newMusic/greenDay.jpg'},
    {artistName: 'limpBizkit', albumName: 'Golden Cobra', price: 8000, imgUrl: './img/newMusic/limpBizkit.jpg'}
  ];
  const popularMusicArray = [
    {artistName: 'Linkin Park', albumName: 'Meteora', price: 1400, imgUrl: './img/popularMusic/meteora.jpg'},
    {artistName: 'Noize MC', albumName: 'Царь горы', price: 1900, imgUrl: './img/popularMusic/kinfOfRock.jpg'},
    {artistName: 'Pantera', albumName: 'The best of Pantera', price: 1400, imgUrl: './img/popularMusic/pantera.jpg'},
    {artistName: 'Linkin Park', albumName: 'Резонанс', price: 1400, imgUrl: './img/popularMusic/splin.jpg'}

  ];

 

  return (

    <div className="page">
      <Drawer/>
      <Header/>
      <section className="newMusic">
    <h1 className="newMusic__title">Моднейшие новинки</h1>
    <div className="newMusic__productList">
     {newMusicArray.map(function(obj){

      return <NewMusic
      artistName = {obj.artistName}
      albumName = {obj.albumName}
      price = {obj.price}
      imgUrl = {obj.imgUrl}
      addToCard = {() => {'Добавили в корзину'}}
      />
     })};
     
    </div>
    </section>
    <section className='popularMusic'>
      <h1 className="popularMusic__title">Дико популярное</h1>

      <div className="popularMusic__productList">

        {popularMusicArray.map(function(obj){
          return <Popular
          artistName = {obj.artistName}
          albumName = {obj.albumName}
         price = {obj.price}
         imgUrl = {obj.imgUrl}
         addToCard = {() => {'Добавили в корзину'}}
          
          
          
          />

        })}

      </div>

    </section>

     
    </div>

    


  )

}

export default App;
