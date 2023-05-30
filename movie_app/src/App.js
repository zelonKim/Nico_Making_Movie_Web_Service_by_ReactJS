import React from 'react';

/* 
function Food({names, picture}) {
  return (
        <>
        <h1>I like {names}</h1>
         <img src={picture} />
        </>
  )
}

const foodILike = [
  {
  id:1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
  id:2,
  name: "bulgogi", 
  image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM"
  },
  {
  id:3,
  name: "kimbap",
  image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM"
  },
  {
  id:4,  
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }

]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} names={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}
export default App; 
*/

//////////////////


/*
 class App extends React.Component {
  render() {
    return <h1> This is class Component </h1>
  }
}
export default App; 
*/

////////////////

/* class App extends React.Component {

  state = {
    count: 0
  }
  
  plus = () => {
    this.setState({ count: this.state.count + 1 }) // 객체 매개변수
  }

  minus = () => {
    this.setState(current => ({count: current.count -1})) // 함수 매개변수
  }

  render() {

    return (
    <div>
      <h1>The number is: {this.state.count} </h1>
      <button onClick={this.plus}>plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}
export default App;  */


////////////////


/* class App extends React.Component {

  constructor(){
    super()
    console.log("hello")
  }
  
  state = {
    count: 0
  }
  
  plus = () => {
    this.setState({ count: this.state.count + 1 }) 
  }

  minus = () => {
    this.setState(current => ({count: current.count -1})) 
  }

  componentDidMount(){
    console.log("whatsUp")
  }

  componentDidUpdate() {
    console.log("niceToMeetYou")
  }

  componentWillUnmount() {
    console.log("Goodbye")
  }

  render() {
    console.log("hi")
    return (
    <div>
      <h1>The number is: {this.state.count} </h1>
      <button onClick={this.plus}>plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}
export default App;
// 처음에 컴포넌트가 마운트되면 다음의 순서로 콘솔창에 출력됨.
// hello
// hi
// whatsUp


// 버튼을 클릭하여 컴포넌트를 업데이트하면 콘솔창에 다음의 순서대로 출력됨.
// hi
// niceToMeetYou */


////////////


class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }
  
  componentDidMount() {
    setTimeout(()=> {
      this.setState({ isLoading: false})
    }, 3000)
  }

  render() {
    const {isLoading} = this.state;

    return (
        <div>{isLoading ? "Loading.." : "we are ready"}</div>
      ) 
}
}
export default App;
