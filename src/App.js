import Header from './components/Header';
import Item from './components/Item';
function App() {
  return (
    <div className='page'>

      <Header/>

      <section className='main'>
        <div className='container'>

        <h1 className='main-title'>Дикие новинки</h1>

        <div className='main__cards'>
          <Item />


        </div>

        </div>
        

      </section>

  
  

    </div>
 
  );
}

export default App;
