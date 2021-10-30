class Queue {
    
    constructor(){
        this.elements = [];
    }
    
    enqueue(item){
        this.elements.push(item);
    }
    
    dequeue(){
        return this.elements.shift();
    }
    
    isEmpty(){
        return this.elements.length == 0;
    }
    
    length(){
        return this.elements.length;
    }
    
    peek(){
        return !this.isEmpty() ? this.elements[0] : undefined;
    }
}

let grid = [[2,1,1],[1,1,0],[0,2,1]]
let grid1 = [[2,1,1],[1,1,0],[0,1,1]]

function rottingOranges(grid){
    
    let queue = new Queue();
    let freshOranges = 0;
    for (let x = 0; x < grid.length; x++) {
       for (let y = 0; y < grid[0].length; y++) {
           if (grid[x][y] == 2) {
               queue.enqueue({x, y})
           }
           else if (grid[x][y] == 1) {
               freshOranges++;
           }
       }
    }

    let adjacent = {rowUp:[1,0] , colRight:[0,1], rowDown:[-1, 0], colLeft:[0,-1]}
    let minuteCount = 0
    
    while(!queue.isEmpty() && freshOranges > 0){
        
        let length = queue.length();
        while (length > 0) {
            let item = queue.dequeue();
            for (const key in adjacent) {
                let row = item['x'] + adjacent[key][0]
                let column = item['y'] + adjacent[key][1]
                
                if (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length || grid[row][column] == 2 || grid[row][column] == 0) {
                    continue;
                }
                queue.enqueue({x: row, y: column});
                grid[row][column] = 2;
                freshOranges--;
            }
            length--;
        }
        minuteCount++;
    }
    console.log(grid);
    
    return minuteCount;
}

console.log(rottingOranges(grid1));