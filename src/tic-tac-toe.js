class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.counter = 0;
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.isFinish = false;    
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.isFinish) {
            if (this.getFieldValue(rowIndex, columnIndex) === null) {
              this.counter++;
              this.field[rowIndex][columnIndex] = this.currentPlayer;
              this.currentPlayer = this.counter % 2 === 1 ? 'o' : 'x';
      
              if (this.counter === 9) {
                this.isFinish = true;
              }
            }
        }
    }

    isFinished() {
       return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        // diagonals 
        if (( this.field[0][0] != null && this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2])
          || (this.field[2][0] != null && this.field[2][0] === this.field[1][1] && this.field[2][0] === this.field[0][2])) return this.field[1][1];
    
        // horizontals and verticals
        let i = 0
        while (i < this.field[0].length) {
          if (this.field[i][0] != null && this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) return this.field[i][0];
          if (this.field[0][i] != null && this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) return this.field[0][i];
          i++;
        }
        return null;
    }

    noMoreTurns() {
        return this.isFinish;
    }

    // should return true if there is no more turns and no winner
    isDraw() {
        return this.noMoreTurns() && !(this.getWinner() != null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
