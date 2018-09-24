import { Injectable } from "@angular/core";
import { PositionComponent } from "./position.component";

@Injectable()
export class GameService {
    generateNewPuzzle(arrayLength: number, numberRange: number): Array<number> {
        let nextNumber = (existingNumber): number => {
            if (!existingNumber) return 1;//Math.ceil(Math.random() * numberRange);
            var newNumber = existingNumber < numberRange ? ++existingNumber : 1
            return newNumber;
        }
        let numberInRow = (numberToTest, index, array): boolean => {
            var row = Math.floor((index) / numberRange);
            var numberInRowAlready = false;
            for (let i = row * numberRange; i < (row * numberRange) + numberRange; i++) {
                if (i == index) continue;
                numberInRowAlready = (array[i] == numberToTest);
                if (numberInRowAlready) break;
            }
            return numberInRowAlready;
        };
        let numberInColumn = (numberToTest, index, array): boolean => {
            var column = index % numberRange;
            var numberInColumnAlready = false;
            for (let i = column; i < column + 73; i = i + numberRange) {
                if (i == index) continue;
                numberInColumnAlready = (array[i] == numberToTest);
                if (numberInColumnAlready) break;
            }
            return numberInColumnAlready;
        };

        console.log("Generate new puzzle");
        var puzzleArray = Array.apply(null, new Array<number>(arrayLength));
        for (let i = 0; i < puzzleArray.length; i++) {
            var retries = 0;
            while (retries < 10) {
                retries++;
                var positionValue = puzzleArray[i];
                var numberToTest = nextNumber(positionValue);
                puzzleArray[i] = numberToTest;
                if (numberInRow(numberToTest, i, puzzleArray)){ 
                    // try another number
                    continue;
                }
                if (numberInColumn(numberToTest, i, puzzleArray)){
                    // try another number
                    continue;
                }
                retries = 10;
            }
        }
        return puzzleArray;
    }
    setSelectedPositionValue(positionValue: number) {
        this.selectedPosition.value = positionValue;
        console.log("Changed position value: " + positionValue);
    }
    clearSelectedPosition() {
        this.selectedPosition = null;
    }
    setSelectedPosition(position: PositionComponent) {
        this.selectedPosition = position;
        console.log("Current selected position: " + this.selectedPosition.value);
    }
    selectedPosition: PositionComponent
}