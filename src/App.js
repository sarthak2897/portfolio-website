import './App.css';
import {drawerImg} from '../images/drawerImg.JPG'

function App() {
  return (
    <div className="app">
      <div className="drawer">
        <Image src={drawerImg} alt="drawer-image"></Image>
      </div>
      <div className="content">Nagpal</div>
    </div>
  );
}

export default App;
