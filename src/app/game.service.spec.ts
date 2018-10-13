import { GameService } from "./game.service";

describe('game service', () => {
    let gameService = new GameService();

    describe('next number funcitonality', () => {
        let nextNumber = gameService.nextNumber(9);

        it('should return the first valid number to try', () => {
            expect(nextNumber(undefined)).toBe(1);
        });
        it('should return the next valid number to try', () => {
            expect(nextNumber(1)).toBe(2);
        });
        it('should return the last valid number to try', () => {
            expect(nextNumber(8)).toBe(9);
        });
        it('should loop back to the first valid number to try', () => {
            expect(nextNumber(9)).toBe(1);
        });
    });

    describe('number is in row functionality', () => {
        let numberInRow = gameService.numberInRow(9);

        it("shouldn't find the number in row", () => {
            expect(numberInRow(1, 0, [2, 3, 4])).toBe(false);
        })

        it('should find the number in row', () => {
            let actualValue = numberInRow(2, 0, [1, 2, 3]);
            expect(actualValue).toBe(true);
        })

        it('should ignore the indexed number in row', () => {
            let actualValue = numberInRow(2, 1, [1, 2, 3]);
            expect(actualValue).toBe(false);
        })
    });

    describe('number is in column functionality', () => {
        let numberInColumn = gameService.numberInColumn(9);

        it("shouldn't find the number in column", () => {
            expect(numberInColumn(1, 0, [2, 3, 4])).toBe(false);
            expect(numberInColumn(3, 1,
                [2, 3, 4, 5, 6, 7, 8, 9, 1]
                    .concat([1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .concat([3, 1]))).toBe(false);
        })

        it('should find the number in column', () => {
            let actualValue = numberInColumn(1, 0,
                [2, 3, 4, 5, 6, 7, 8, 9, 1]
                    .concat([1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .concat([3, 1])
            );
            expect(actualValue).toBe(true);
        })

        it('should ignore the indexed number in column', () => {
            let actualValue = numberInColumn(2, 1, [1, 2, 3]);
            expect(actualValue).toBe(false);
        })
    });

    describe('3x3 grid check functionality', () => {
        let numberInGrid = gameService.numberInGrid(3, 9);
        let partialGridArray = [, 2, 3, , , , , , 0]
                .concat([4, 5, 6, , , , , , 0])
                .concat([7, 8, , , , , , , 0]);

        it('should find the number', () => {
            let actualValue = numberInGrid(5, 0, partialGridArray);
            expect(actualValue).toBe(true);
            actualValue = numberInGrid(5, 20, partialGridArray);
            expect(actualValue).toBe(true);
        })

        partialGridArray = [, 2, 3, , , , , , 0]
                .concat([4, , 6, , , , , , 0])
                .concat([7, 8, , , , , , , 0]);
        it("shouldn't find the number", () => {
            let actualValue = numberInGrid(5, 0, partialGridArray);
            expect(actualValue).toBe(false);
            actualValue = numberInGrid(1, 10, partialGridArray);
            expect(actualValue).toBe(false);
            actualValue = numberInGrid(9, 20, partialGridArray);
            expect(actualValue).toBe(false);
        })
    });
});