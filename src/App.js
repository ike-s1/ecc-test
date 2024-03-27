import logo from './logo.svg';
import './App.css';
import ecc from "eosjs-ecc";
import { useEffect } from 'react';


function App() {

  function initKeys(key) {
    const privateEncryptionKey = ecc.PrivateKey.fromSeed(key);
    const privateKey = privateEncryptionKey.toString();

    const publicEncryptionKey = privateEncryptionKey.toPublic();
    const publicKey = publicEncryptionKey.toString().replace('EOS', '');

    console.log({ privateKey, publicKey })

    return { privateKey, publicKey };
}

useEffect(() => {
  initKeys('wax.gd.d')
},[])
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
    </div>
  );
}

export default App;
