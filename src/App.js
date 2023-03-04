import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import PersonalCard from './components/PersonalCard';
import  { TableStyle} from "./components/FooterStyles";
function App() {

  let personalData = [{
    "perID": 100,
    "email": "arash@tar.edu",
    "firstName": "arash",
    "lastName": "F",
    "imageReference": " http://localhost:3001/a.png "
    } ,
    {
      "perID": 200,
      "email": "aria@tar.edu",
      "firstName": "aria",
      "lastName": "F",
      "imageReference": " http://localhost:3001/b.png "
      }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div>
      <TableStyle>
        {personalData.map((object, index)=>{
            return (
              
                <PersonalCard item={object} key={index} />
             
            )
        })}
      </TableStyle>
      </div>
      <Footer />
    </div>
  );
}

export default App;
