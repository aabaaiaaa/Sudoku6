import { Injectable } from "@angular/core";
import { PositionComponent } from "./position.component";

@Injectable()
export class GameService{
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