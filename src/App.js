
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <table>
          <tbody>
          
            <tr>
              <td>
              <div className = "left">
                <img className="image" ></img>
                  <p>this is colom</p>
                  <table>
                    <tfoot>
                      <td className="footer">
                        4 Read
                      </td>
                      <td className="footer">
                        55 view
                      </td>
                      <td className="footer">
                        77 comments
                      </td>
                    </tfoot>
                  </table>
                </div>

              </td>

              <td>
              <div className = "right">
                  <p>this is colom</p>
                </div>
              </td>
                
          
                

            </tr>
          </tbody>
        </table>
        
        


      
       
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
