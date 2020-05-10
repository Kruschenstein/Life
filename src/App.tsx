import * as React from 'react';
import './App.css';
import CellView from './CellView';
import Grid from './engine/Grid';
import { iterate } from './utils/util';

class App extends React.Component<{}, {}> {
  static readonly HEIGHT = 4;
  static readonly WIDTH = 4;
  private grid = new Grid(App.WIDTH, App.HEIGHT);

  render() {
    const cells = new Array(App.HEIGHT * App.WIDTH);
    iterate(this.grid.cells, (cell, x, y, i) => {
      cells[i] = <CellView key={i} cell={cell} />;
    })
    
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
