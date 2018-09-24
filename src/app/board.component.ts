import { Component } from "@angular/core";
import { GameService } from "./game.service";

@Component({
    selector: "board-component",
    templateUrl: "board.component.html"
})
export class BoardComponent{

    constructor(private gameService:GameService){}

    rows = new Array(1,2,3,4,5,6,7,8,9);
    positions = new Array(1,2,3,4,5,6,7,8,9);

    
}