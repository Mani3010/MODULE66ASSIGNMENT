//ASSUMING ALL IMPORT ARE DONE
/*QUESTION 1
function Person(props) {
    return (
      <p>
        {props.name} is {props.age} years old.
      </p>
    );
  }  
//inside app.js
const App = () => {
    return (
      <div>
        <h1>Person Information</h1>
        <Person name="ramesh" age={30} />
      </div>
    );
  };
  */
 /* QUESTION 2
  function Button(props) {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    );
  }
  function handleClick() {
    console.log('Button clicked');
  }
  <Button text="Click Me" onClick={handleClick} />
  */
 /*QUESTION 3
 function Header(props) {
  return <h1>{props.title}</h1>;
}
  return (
    <>
      <Header title="Welcome to My Website" />
    </>
  );
 */
/*QUESTION 4
function List(props) {
  const listItems = props.items.map((item) =>
    <li key={item}>{item}</li>
  );
  
  return <ul>{listItems}</ul>;
}
<List items={['EARPHONE', 'SMARTPHONE', 'LAPTOP']} />
*/
