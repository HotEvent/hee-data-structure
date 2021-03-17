import { Heap } from "./heap";
describe("Test Heap", () => {

    it("should to Equal ''", () => {
        class Person {
            level: number;
            constructor(public name: 'svip' | 'vip' | 'normal') {
                this.level = this.getLevelByName(name);
            }
            getLevelByName(name: string) {
                if (name === 'svip') {
                    return 0;
                } else if (name === 'vip') {
                    return -1;
                } else if (name === 'normal') {
                    return -2;
                } else {
                    throw `不合法的name:${name}`;
                }
            }
        }
        const vip = new Person('vip');
        const svip = new Person('svip');
        const normal = new Person('normal');
        const heap = new Heap([normal, svip, vip], (a, b) => {
            return a.level > b.level;
        });
        expect(heap.peek()).toEqual(svip);
        const removed = heap.remove();
        expect(removed).toEqual(svip);
        expect(heap.peek()).toEqual(vip);
    });

});