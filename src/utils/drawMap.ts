export function drawMap(size: any) {
    const map = document.createElement('div');
    for (let i = 0; i < size.x; i++) {
        let row = document.createElement('div');
        row.className = `row${i}`
        let rowElements = document.createElement('div');
        for (let j = 0; j < size.y; j++) {
            let cellButton = document.createElement('button');
            cellButton.className = "btn-cell"
            cellButton.name = `${j}x${i}`;
            rowElements.appendChild(cellButton);

        }
        row.appendChild(rowElements)
        map.appendChild(row)
    }
    return map;
}