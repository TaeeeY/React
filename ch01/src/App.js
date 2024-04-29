import logo from './logo.svg';
import './App.css';



/*
  날짜 : 2024/04/29
  이름 : 정태영
  내용 : ch01. 리엑트 개요와 개발환경 구축

  개발환경 구축
  1) Node.js 설치
      - npm install -g create-react-app

  2) 프로젝트 생성
      - npx create-react-app 앱이름

  3) 프로젝트 실행
      - npm start (npm run start)


*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
