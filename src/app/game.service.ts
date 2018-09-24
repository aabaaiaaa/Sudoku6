import { Injectable } from "@angular/core";
import { PositionComponent } from "./position.component";

@Injectable()
export class GameService {
    generateNewPuzzle(arrayLength: number, numberRange: number): Array<number> {
        console.log("Generate new puzzle");
        return Array.from(new Array(arrayLength), () => Math.ceil(Math.random() * numberRange));
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