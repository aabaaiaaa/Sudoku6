import { Component, Input } from "@angular/core";
import { GameService } from "./game.service";

@Component({
    selector: "position-component",
    template: `
    <button class="btn" (click)="clickOnPosition()">{{value}}</button>
    `
})
export class PositionComponent{

    constructor(private gameService: GameService){}

    @Input("positionValue") value: number;

    clickOnPosition(){
        this.gameService.setSelectedPosition(this);
    }
}