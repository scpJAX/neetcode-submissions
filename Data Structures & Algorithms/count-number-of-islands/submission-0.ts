class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let totalIslands = 0;

        function findIslands(row: number, column: number){
            if(row < 0 || row > grid.length-1){
                return 0;
            } else if (column < 0 || column > grid[row].length-1){
                return 0;
            } else if (grid[row][column] === '0' || grid[row][column] === '2'){
                return 0;
            } else {
                grid[row][column] = '2';
            }
            findIslands(row-1, column);
            findIslands(row+1, column);
            findIslands(row, column-1);
            findIslands(row, column+1);
        }

        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j] === '1'){
                    //we've hit land now we can increment nums islands and a function to help us look for where that island ends
                    totalIslands += 1;
                    findIslands(i, j);
                }
            }
        }

        return totalIslands;
    }
}
