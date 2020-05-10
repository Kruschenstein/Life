import CellState from './CellState';

class Cell {
    private state: CellState = CellState.DEAD;
    private nextState: CellState = CellState.DEAD;
    private _aliveSince: number = 0;
    public neighboors: Cell[] = [];

    computeNextGeneration() {
        const numberOfAliveNeighboors = this.neighboors
            .filter(cell => cell.state === CellState.ALIVE)
            .length;

        if (numberOfAliveNeighboors === 3) {
            this.nextState = CellState.ALIVE;
        } else if (numberOfAliveNeighboors !== 2) {
            this.nextState = CellState.DEAD;
        } else {
            this.nextState = this.state;
        }
    }

    mutateToNextGen() {
        if (this.state === this.nextState && this.state === CellState.ALIVE) {
            this._aliveSince++;
        } else {
            this._aliveSince = 0;
        }
        this.state = this.nextState;
        this.nextState = CellState.DEAD;
    }

    isAlive() {
        return this.state === CellState.ALIVE;
    }

    swapState() {
        this.state = this.isAlive() ? CellState.DEAD : CellState.ALIVE;
    }

    get aliveSince(): number {
        return this._aliveSince;
    }
}

export default Cell;