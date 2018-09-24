import { Component } from "@angular/core";
import { GameService } from "./game.service";

@Component({
    selector: "board-component",
    templateUrl: "board.component.html"
})
export class BoardComponent{

    constructor(private gameService:GameService){}

    rowsLength = new Array(9);
    positions = new Array<number>(81);

    generatePuzzle(){
        var positionValueArray = this.gameService.generateNewPuzzle(81, 9);
        this.positions = positionValueArray;
        console.log(positionValueArray);
    }
}