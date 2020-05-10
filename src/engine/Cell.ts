import CellState from "./CellState";

class Cell {
    private _state: CellState = CellState.DEAD;
    private nextState: CellState = CellState.DEAD;
    private aliveSince: number = 0;
    public neighboors: Cell[] = [];

    get state(): CellState {
        return this.state;
    }

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
        if (this._state === this.nextState && this._state === CellState.ALIVE) {
            this.aliveSince++;
        } else {
            this.aliveSince = 0;
        }
        this._state = this.nextState;
        this.nextState = CellState.DEAD;
    }
}

export default Cell;