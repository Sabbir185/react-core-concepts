import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const heros = [
    {hero:'Salman' , heroin:'Katrina'},
    {hero:'Sharuk K.' , heroin:'Madori'},
    {hero:'Ronobir' , heroin:'Dipika P.'},
    {hero:'Hrithik', heroin: 'Piyanka'},
  ];
  
  const products = [
    {name:'adobe photoshop', price:'$80.99'},
    {name:'adobe illustrator', price:'$69.99'},
    {name:'adobe InDesign', price:'$49.99'},
    {name:'PDF Reader', price:'$9.99'},
  ];


  return (
    <div className="App">

      <header className="App-header">

        {/* state */}
        <section className="react-hook">
          <Counter></Counter>
        </section>


        {/* api calling */}
        <section className="user-api">
            <UserData></UserData>
        </section>


        {/* HeroList component */}
        <section className="heroList">
            <HeroList hero="Alomgir" nayika="Bobita"></HeroList>
            <HeroList hero='Razzak' nayika='Shabana'></HeroList>
            <HeroList hero='Elliyas K.' nayika='Rojina'></HeroList>

            {
              // create dynamic component , using array of object
              heros.map( hr => <HeroList hero={hr.hero} nayika={hr.heroin}></HeroList>)
            }

            {
            /* // manually create component , using array
              <HeroList hero={heros[0]} nayika={heros[1]}></HeroList>
              <HeroList hero={heros[2]} nayika={heros[3]}></HeroList>
              <HeroList hero={heros[4]} nayika={heros[5]}></HeroList>
              */
            }
        </section>


        {/* product component */}
        <section>

          {
            // create dynamic component , using array of object
            products.map( pd => <Product item={pd}></Product> )
          }

          {
            /* // manually create component , using array
              <Product item={products[0]}></Product>
              <Product item={products[1]}></Product>
              <Product item={products[2]}></Product> 
            */
          }
        </section>

      </header>

    </div>
  );
}


// Dynamic HeroList component
function HeroList(props){
  return(
    <div style={{border:'yellow',backgroundColor:'lightgray',margin:'10px',padding:'15px',color:'black'}}>
      <h1>Name of Hero : {props.hero}</h1>
      <h3>Nayika : {props.nayika}</h3>
    </div>
  );
}


// object base component
function Product(props){
  const style = {
    backgroundColor:'lightgreen',
    border:'1px solid red',
    borderRadius:'10px',
    color: 'tomato',
    height:'250px',
    width:'250px',
    margin:'10px',
    float:'left'
  }
  // console.log(props.item.name);
  const {name, price} = props.item;
  // console.log(name, price);  destructuring
  return (
    <div style={style}>
        <h3>{name}</h3>
        <h5 style={{color:'green'}}>{price}</h5>
        <p><em><a href="https://www.google.com" target='_blank'>For more details</a></em></p>
        <button>Buy Now</button>
    </div>
  );
}


// state
function Counter(){
  const [count, setCount] = useState(10);
  const increaseBtn = () =>{
      let cnt = count + 1;
      setCount(cnt);
  };
  return(
    <div>
      <h1>Count : {count}</h1> {/* short form setCount() */}
      <button onClick={()=>setCount(count - 1)}>decrease</button>
      <button onClick={increaseBtn}>increase</button>
    </div>
  );
}


// api calling 
function UserData(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return(
    <div>
      <h3>Total user : {users.length}</h3>
      <ul>
      {
        users.map( user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
