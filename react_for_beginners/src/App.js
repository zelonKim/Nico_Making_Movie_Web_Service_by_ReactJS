/* import Button from "./Button";
import titleStyle from './title.module.css'
import buttonStyle from './Button.module.css'

function App() {
  return (
    <div>
      <h1 className={titleStyle.tit}>Welcom back</h1>
      <Button text="Continue" deco={buttonStyle.btn} />
      <Button text="Exit" deco={buttonStyle.out} />
    </div>
  );
}

export default App; */

////////////////////////


/* import { useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const clicked = () => setCounter(prev => prev +1)

  const callOnce = () => { console.log("call the API once")}

  callOnce()

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={clicked}>plus one</button>
    </div>
  )
}
export default App; 
// / 버튼을 클릭하여 state값이 변경될때마다 리렌더링 되면서 callOnec()함수가 계속 실행됨. (call the API Once가 계속 출력됨.) */



/* 
import { useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const clicked = () => setCounter(prev => prev +1)

  const callOnce = () => { console.log("call the API once")}

  useEffect(callOnce, [])

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={clicked}>plus one</button>
    </div>
  )
}
export default App; 
// 버튼을 클릭하여 state값이 변경되면서 리렌더링 되더라도 callOnec()함수가 한번만 실행됨. (call the API Once가 한번 출력됨.) 
*/


//////////////////////////////



/*
 import { useState, useEffect } from 'react';

function App() {
  const [keyword, setKeyword] = useState("");
  const changed = (event) => setKeyword(event.target.value);
  useEffect(()=> console.log("search for", keyword), [])
  
  return (
    <div>
      <input value={keyword} onChange={changed} type="text" placeholder="Search"></input>
    </div>
  )
}
export default App; 
// input창에서 내용을 입력하여 onChange 이벤트가 발생하면서 'keyword' state의 변화가 생기더라도 search for ~는 처음에 한번만 출력됨.
 */



/* import { useState, useEffect } from 'react';

function App() {
  const [keyword, setKeyword] = useState("");
  const changed = (event) => setKeyword(event.target.value);
  useEffect(()=> {
    if(keyword !== "" && keyword.length > 5) { // 조건 추가
      console.log("search for", keyword)
      }
    }, [keyword])
  
  return (
    <div>
      <input value={keyword} onChange={changed} type="text" placeholder="Search"></input>
    </div>
  )
}
export default App; 
// input창에서 내용을 입력하여 'keyword' state의 변화가 생기고, keyword가 5글자를 넘기고 공백이 아닐때만 search for ~를 출력함. */



/* import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed") // 클린업 함수
  }, []);
  return <h1>Hello</h1>;
}


function App() {
  const [showing, setShowing] = useState(false);
  const clicked = () => setShowing(prev => !prev)
  return (
  <div>
    {showing ? <Hello />: null}
    <button onClick={clicked}>{showing ? "Hide" : "Show"}</button>
  </div>
  )
}
export default App;
// Hide 버튼을 누르면 <Hello /> 컴포넌트가 소멸되면서 클린업 함수가 실행되어 콘솔창에 'destroyed'가 출력됨.
 */



/* 
import { useState, useEffect } from 'react';

function Hello() {

  function destroy() { // 클린업 함수
    console.log("destroyed")
  }

  function create() {
    console.log("created");
    return destroy // 클린업 함수를 return 해줌.
  }

  useEffect(create, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const clicked = () => setShowing(prev => !prev)
  return (
  <div>
    {showing ? <Hello />: null}
    <button onClick={clicked}>{showing ? "Hide" : "Show"}</button>
  </div>
  )
}
export default App; 
*/

//////////////////////

/* 
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const changed = (event) => setToDo(event.target.value)
  
  const submitted = (event) => {
    event.preventDefault() // form 요소가 submit되었을 때의 기본동작(화면 새로고침)을 방지해줌.
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]) // 매개변수인 currentArray에는 toDos의 현재 상태값이 담김.
    setToDo(""); 
  }
  console.log(toDos)
  // input 창에 입력 후, 제출 버튼을 누르면 입력한 내용들이 이전 배열과 합해져서 출력됨
  
  return (
    <div>
      <h1>My To Dos ({toDos.length}) </h1>
      <form onSubmit={submitted}>
        <input 
        onChange={changed} 
        value={toDo} 
        type="text"
        placeholder="write your To-do" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul> 
      {toDos.map( (item, index) => 
        <li> {item} </li> )} 
      </ul> 
   </div> // 같은 컴포넌트 내에서 <li>를 계속 렌더링 할때는 고유한 각각의 key 프로퍼티를 지정해줘야 함.
 ) // form태그의 자식으로서의 button태그는 submit기능을 가짐. 
}
export default App;
 */

////////////////////////

/* 
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false)

      console.log(coins)
    })
  }, [])

  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong> Loading... </strong>: null }
      <ul>
        {coins.map(coin => <li>{coin.name}({coin.symbol}):{coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  )
}
export default App;
*/

///////////////////

import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false)

      console.log(coins)
    })
  }, [])

  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong> Loading... </strong>:       
        (<select>
          {coins.map(coin =>
            <option>
            {coin.name}({coin.symbol}):{coin.quotes.USD.price} USD
            </option>
            )}
        </select> )}
    </div>
  )
}
export default App;


