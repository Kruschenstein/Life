import Cell from './Cell';
import { iterate } from '../utils/util';

class Grid {
    private readonly width: number;
    private readonly height: number;
    private grid: Cell[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.grid = new Array(height);
        for (let y = 0; y < height; ++y) {
            this.grid[y] = new Array(width);
            for (let x = 0; x < width; ++x) {
                this.grid[y][x] = new Cell();
            }
        }

        this.initCellsNeighboors();
    }

    private initCellsNeighboors() {
        iterate(this.grid, (cell, x, y) => {
            cell.neighboors = [
                this.getNeighboor(x - 1, y + 1),
                this.getNeighboor(x, y + 1),
                this.getNeighboor(x + 1, y + 1),
                this.getNeighboor(x - 1, y),
                this.getNeighboor(x + 1, y),
                this.getNeighboor(x - 1, y - 1),
                this.getNeighboor(x, y - 1),
                this.getNeighboor(x + 1, y - 1),
            ].filter((e): e is Cell => e !== undefined);
        });
    }

    private getNeighboor(x: number, y: number): Cell | undefined {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return undefined;
        }
        return this.grid[y][x];
    }

    nextGen() {
        iterate(this.grid, cell => cell.computeNextGeneration());
        iterate(this.grid, cell => cell.mutateToNextGen());
    }

    get cells(): Cell[][] {
        return this.grid;
    }
}

export default Grid;