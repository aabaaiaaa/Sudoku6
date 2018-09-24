import { Component } from "@angular/core";
import { GameService } from "./game.service";

@Component({
    selector: "number-selector",
    template: `
        <div class="col-md-3" *ngIf="gameService.selectedPosition">
            <button *ngFor="let option of options" (click)="setPositionValue(option)">{{option}}</button>
        </div>
    `
})
export class NumberSelectorComponent{

    constructor(private gameService: GameService){}

    options = new Array(1,2,3,4,5,6,7,8,9);

    setPositionValue(positionValue){
        this.gameService.setSelectedPositionValue(positionValue);
    }
}