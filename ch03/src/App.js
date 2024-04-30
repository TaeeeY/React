import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassTypeComponent';
import FunctionComponent from './components/FunctionComponent';
import ParentComponent from './components/ParentComponent';
import PropsComponent from './components/PropsComponent';
import ChildrenComponent from './components/ChildrenComponent';

/*
    날짜 : 2024/04/30
    이름 : 정태영
    내용 : ch03. 리엑트 컴포넌트 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch03. React component</h3>
      <ClassComponent />
      <FunctionComponent />
      <ParentComponent/>
      <PropsComponent subject="props 컴포넌트" message="속성을 갖는 컴포넌트" />
      <ChildrenComponent>
        <p>ChildrenComponent 내용 입니다.</p>
      </ChildrenComponent>
    </div>
  );
}

export default App;
