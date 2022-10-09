import { drawMap } from "./drawMap";
import { Cell, CellManager } from "./gameLogic";


export function createGameOfLife(
    sizeX: number,
    sizeY: number,
    htmlElement: HTMLElement
) {
    let gameIsRunning = false;
    let timer: number;

    //FIXME: Переписать через функцию и appendchild
    htmlElement.innerHTML = `<div class="field-wrapper">
    </div><button id='start-btn'>Start</button>
    <input type="range" value="1000" min="100" max="1000" step="50">
    </input>
    <label>speed</label>
    </div class="field-wrapper">`;
    const fieldWrapper = htmlElement.querySelector(".field-wrapper");

    // Создать поле заданного размера
    let field = Array.from({ length: sizeY }).map(() =>
        Array.from({ length: sizeX }).fill(0)
    );
    fieldWrapper?.appendChild(drawMap({ x: sizeX, y: sizeY }))

    var btnsCollection = Array.prototype.slice.call(document.getElementsByClassName('btn-cell'));

    let liveCells: any = [];
    btnsCollection.forEach(item => {
        item.addEventListener("click", (event: any) => {
            let cell = event.currentTarget;
            if (!cell.classList.contains("btn-cell-live")) {
                liveCells.push(cell.name)
                let x = Number(cell.name.split('x')[0]);
                let y = Number(cell.name.split('x')[1]);
                console.log("x = " + x + "y = " + y)
                field[x][y] = 1
            }
            else {
                liveCells.splice(liveCells.indexOf(cell.name))
            }
            cell.classList.toggle("btn-cell-live")
        }, false)
    });

    let startBtn = document.getElementById('start-btn')
    
    startBtn?.addEventListener('click', () => {
        let cellManager: CellManager = new CellManager();
        let cellsArr = cellManager.initializeArrayCells(field);
        cellsArr.forEach((cell) => {
            cell.neighbours = cellManager.getNeighbours(cell, cellsArr)
        })
        console.log(cellsArr)
    })

}