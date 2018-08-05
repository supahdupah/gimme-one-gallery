import React, { Component } from 'react'; 
import { I18n, Trans } from 'react-i18next';
import logo from './logo.svg';
import Menu from './Header/Menu';
import './App.css';
//import BasicExample from './Header/BasicExample';

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">
              {/* <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{t('title')}</h2>

              </div> */}
              <div className="App-intro">
              <button onClick={() => i18n.changeLanguage('es')}>de</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <Trans i18nKey="description.part1">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </Trans>
              </div>
              <div>{t('description.part2')}</div>
              <div class="container" id="main">
              </div>
              <div class="demo" id="demo3">
                  <h4 class="title">Submenu Appear below</h4>
                  <div class="demo-container">
                  <Menu menuData={t('menuData', { returnObjects: true })} submenuDirection="below" />
                  </div>
              </div>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
