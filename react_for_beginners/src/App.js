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



import { useState, useEffect } from 'react';

function App() {
  const [keyword, setKeyword] = useState("");
  const changed = (event) => setKeyword(event.target.value);
  useEffect(()=> console.log("search for", keyword), [keyword])
  
  return (
    <div>
      <input value={keyword} onChange={changed} type="text" placeholder="Search"></input>
    </div>
  )
}
export default App; 
// input창에서 내용을 입력하여 onChange 이벤트가 발생하면서 'keyword' state의 변화가 생기면 search for ~는 계속 출력됨.
