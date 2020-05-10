export function iterate<T>(array: T[][], callback: (elem: T, x: number, y: number, i: number) => void) {
    for (let y = 0; y < array.length; ++y) {
        const width = array[y].length;
        for (let x = 0; x < width; ++x) {
            callback(array[y][x], x, y, y * width + x);
        }
    }
}