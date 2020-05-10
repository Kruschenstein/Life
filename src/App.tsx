import * as React from 'react';
import './App.css';
import CellView from './CellView';
import Grid from './engine/Grid';
import { iterate } from './utils/util';

class App extends React.Component<{}, { isPaused: boolean, grid: Grid }> {
  static readonly HEIGHT = 64;
  static readonly WIDTH = 64;
  static readonly STYLE: React.CSSProperties = {
    gridTemplateColumns: `repeat(${App.WIDTH}, 1fr)`,
  };
  private timeId?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      isPaused: false,
      grid: new Grid(App.WIDTH, App.HEIGHT),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      if (this.state.isPaused) {
        return;
      }
      this.state.grid.nextGen();
      this.setState((state) => ({ grid: state.grid }));
    }, 1000);
    document.addEventListener("keydown", this.keyDownSwapPause);
  }

  componentWillUnmount() {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
    document.removeEventListener("keydown", this.keyDownSwapPause);
  }

  keyDownSwapPause = (event: KeyboardEvent) => {
    if (event.keyCode === 80) {
      this.swapPause();
    }
  }

  swapPause = () => {
    this.setState((state) => ({ isPaused: !state.isPaused }))
  }

  render() {
    const cells = new Array(App.HEIGHT * App.WIDTH);
    iterate(this.state.grid.cells, (cell, x, y, i) => {
      cells[i] = <CellView key={i} cell={cell} />;
    })

    return (
      <div>
        <input id="pause" type="checkbox" checked={this.state.isPaused} onChange={this.swapPause} />
        <label htmlFor="pause">Pause</label>
        <div className="container" style={App.STYLE}>
          {cells}
        </div>
      </div>
    );
  }
}

export default App;
