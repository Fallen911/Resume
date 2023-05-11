
import Home from './Components/Home';
import '../src/style.scss/index.scss';
import Background from './Components/Background';
import MyDescription from './Components/MyDescription';
import MyStack from './Components/MyStack';
function App() {
  return (
    <div className="App">
      <Home />
      <MyDescription />
      <MyStack />
      <Background />
    </div>
  );
}

export default App;
