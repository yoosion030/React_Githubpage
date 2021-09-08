import React, {useState} from 'react'; // useState 선언 
import './App.css';

function App() {
  let [money, setMoney] = useState(0); // [state이름, state값을 변경해주는 함수]
  let [house, setHouse] = useState(0); // state를 쓰는 이유 : 데이터가 바뀌면 재렌더링이 자동으로 되기 때문
  let [car, setCar] = useState(0); // 변수의 값이 새로고침 없이 자동으로 업데이트가 되기때문

  function getMoney(){
  setMoney(money+1)
   // 돈 줍기 버튼 클릭 시 money를 변경해주는 setMoney함수에 현재 money의 값에 1을 더한 값으로 변경하게 함
  }

  function buyHouse(){
    if(money - 100 < 0){ // 구매 후 돈이 음수 이면 alert 창 실행
      alert('돈 더줘');
    }
    else{
      setMoney(money-100)
      setHouse(house+1)
    }
  }
  function buyCar(){
    if(money-50<0){
      alert('돈 더줘');
    }
    else{
      setMoney(money-50)
      setCar(car+1)
    }
  }
  return (
    <main className="App">
      <h1 className="title">거지 키우기</h1>
      <section className="items">
        <p>현재 돈 : {money} 억원</p> 
        <p>내가 산 집 : {house} 채</p>
        <p>내가 산 차 : {car} 대</p>
      </section>
      <div>
        <button className="btn" onClick={getMoney}>돈 줍기</button> 
        {/* 버튼 클릭 시 getMoney 함수 실행 */}
      </div>
      <div className="box">
        <button className="btn" onClick={buyHouse}>집 사기 : 100억원</button>
        <button className="btn" onClick={buyCar}>차 사기 : 50억원</button>
      </div>
    </main>
  );
}


export default App;
