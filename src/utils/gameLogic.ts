class Cell {
    public cellState_: boolean
    public cellHtmlElement: any;
    public neighbours!: Cell[];
    public nextState_!: boolean
    public x: number
    public y: number
    constructor(cellState: boolean, x_pos: number, y_pos: number) {
        this.cellState_ = cellState;
        this.x = x_pos;
        this.y = y_pos
    }
}

class CellManager {

    initializeArrayCells(map: any) {
        var cells: Cell[] = new Array<Cell>
        for (let i: number = 0; i < map.length; i++) {
            for (let j: number = 0; j < map[i].length; j++) {
                cells.push(new Cell(map[i][j] == 1, i, j))
            }
        }
        return cells
    }
    getNeighbours(cell: Cell, map: Cell[]) {
        var neighbours: Cell[] = new Array<Cell>

        neighbours = map.filter(cellMap => cellMap.cellState_ == true && (
            (cellMap.x == cell.x + 1 && cellMap.y == cell.y) ||
            (cellMap.x == cell.x && cellMap.y == cell.y + 1) ||
            (cellMap.x == cell.x + 1 && cellMap.y == cell.y + 1) ||
            (cellMap.x == cell.x + 1 && cellMap.y == cell.y - 1) ||
            (cellMap.x == cell.x - 1 && cellMap.y == cell.y + 1) ||
            (cellMap.x == cell.x - 1 && cellMap.y == cell.y - 1) ||
            (cellMap.x == cell.x - 1 && cellMap.y == cell.y) ||
            (cellMap.x == cell.x && cellMap.y == cell.y - 1)))

        return neighbours;
    }

    makeNextGeneration(cells: Cell[]) {
        cells.forEach(cell => {
            let filterLifeCell = cell.neighbours.filter((item) => item.cellState_ == true);
            cell.nextState_ = filterLifeCell.length > 3 ? true : false
        })
    }

    toNextGeneration(cells: Cell[]) {
        cells.forEach(cell => {
            cell.cellState_ = cell.nextState_
        })
    }

}

export { Cell, CellManager }