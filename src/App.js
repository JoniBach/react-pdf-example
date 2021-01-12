import logo from './logo.svg';
import './App.css';
import {MyDocument} from './MyDocument'
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  return (
    <div style={{height: '100vh'}}>
      {/* <header className="App-header"> */}
      <PDFViewer height="100%" width='100%'>
      <MyDocument />
</PDFViewer>
      {/* </header> */}
    </div>
  );
}

export default App;
