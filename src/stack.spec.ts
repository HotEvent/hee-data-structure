// import { HeeAnimation } from ".";
import {Stack} from './stack';
describe("Test Stack", () => {

    it("should to Equal ''", () => {
        const stack = new Stack([]);
        stack.push(1);
        stack.push(2);
        expect(stack.top).toEqual(2);
        expect(stack.length).toEqual(2);
        expect(stack.isEmpty()).toEqual(false);
        const top = stack.pop();
        expect(top).toEqual(2);
    });
});