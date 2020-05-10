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

    render() {
        return (
            <div className={this.props.cell.isAlive() ? 'alive' : 'dead'} onClick={this.swapState}></div>
        );
    }
}

export default CellView;