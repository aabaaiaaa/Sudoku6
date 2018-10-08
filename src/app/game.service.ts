import { Injectable } from "@angular/core";
import { PositionComponent } from "./position.component";

@Injectable()
export class GameService {
    generateNewPuzzle(arrayLength: number, numberRange: number): Array<number> {
        let nextNumber = this.nextNumber(numberRange)
        let numberInRow = this.numberInRow(numberRange);
        let numberInColumn = this.numberInColumn(numberRange);

        console.log("Generate new puzzle");
        var puzzleArray = Array.apply(null, new Array<object>(arrayLength)).map(o => new Object());
        for (let i = 0; i < puzzleArray.length; i++) {
            var retries = puzzleArray[i].retries || 0;
            while (retries < 10) {
                retries++;
                var positionValue = puzzleArray[i].value;
                var numberToTest = nextNumber(positionValue);
                puzzleArray[i].value = numberToTest;
                puzzleArray[i].retries = retries;
                if (numberInRow(numberToTest, i, puzzleArray.map(po => po.value))) {
                    // try another number
                    continue;
                }
                if (numberInColumn(numberToTest, i, puzzleArray.map(po => po.value))) {
                    // try another number
                    continue;
                }
                break;
            }
            if (retries == 10) i = i - 2;  // change previous number to another valid value to free up another valid option for this position
        }
        return puzzleArray.map(po => po);
    }

    numberInColumn(numberRange: number) {
        return (numberToTest, index, array): boolean => {
            var column = index % numberRange;
            var numberInColumnAlready = false;
            for (let i = column; i < column + 73; i = i + numberRange) {
                if (i == index)
                    continue;
                numberInColumnAlready = (array[i] == numberToTest);
                if (numberInColumnAlready)
                    break;
            }
            return numberInColumnAlready;
        };
    }

    numberInRow(numberRange: number) {
        return (numberToTest: number, index: number, array: Array<number>): boolean => {
            var row = Math.floor((index) / numberRange);
            var numberInRowAlready = false;
            for (let i = row * numberRange; i < (row * numberRange) + numberRange; i++) {
                if (i == index)
                    continue;
                numberInRowAlready = (array[i] == numberToTest);
                if (numberInRowAlready)
                    break;
            }
            return numberInRowAlready;
        };
    }

    nextNumber(numberRange: number) {
        return (existingNumber): number => {
            if (!existingNumber)
                return 1; //Math.ceil(Math.random() * numberRange);
            var newNumber = existingNumber < numberRange ? ++existingNumber : 1;
            return newNumber;
        };
    }

    numberInGrid(gridSize: number, numberRange: number) {
        return (numberToTest: number, index: number, array: Array<number>): boolean => {
            var numberFound = false;
            return numberFound;
        };
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