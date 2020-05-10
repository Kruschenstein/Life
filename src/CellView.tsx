import * as React from 'react';
import './Cell.css';
import Cell from './engine/Cell';

interface CellViewProps {
    cell: Cell;
}

class CellView extends React.Component<CellViewProps, {}> {
    constructor(props: CellViewProps) {
        super(props);
        this.state = { type: this.computeState() }
    }

    computeState(): 'alive' | 'dead' {
        return this.props.cell.isAlive() ? 'alive' : 'dead';
    }

    swapState = () => {
        this.props.cell.swapState();
        this.setState({ type: this.computeState() });
    }

    computeColor(): React.CSSProperties {
        return {
            backgroundColor: this.props.cell.isAlive() ?
                `hsl(${(2 + this.props.cell.aliveSince) * 10}, 100%, 50%)` :
                `hsl(0, 100%, 90%)`,
        }
    }

    render() {
        return (
            <div className={this.props.cell.isAlive() ? 'alive' : 'dead'} onClick={this.swapState} style={this.computeColor()}></div>
        );
    }
}

export default CellView;