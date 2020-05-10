import * as React from 'react';
import './App.css';
import Cell from './Cell';

class App extends React.Component<{}, {}> {
  static HEIGHT = 4;
  static WIDTH = 4;

  render() {
    const cells = new Array(App.HEIGHT * App.WIDTH);
    for (let i = 0; i < App.HEIGHT * App.WIDTH; ++i) {
      cells[i] = <Cell key={i} />;
    }
    return (
      <div>
        <input id="pause" type="checkbox" />
        <label htmlFor="pause">Pause</label>
        <div className="container">
          {cells}
        </div>
      </div>
    );
  }
}

export default App;
