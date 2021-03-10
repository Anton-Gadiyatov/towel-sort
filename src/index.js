// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newMatrix = [];
    if (matrix == null) {
        return newMatrix;
    }
    matrix.forEach((el, index) => {
        if (index % 2 === 0) {
            el.forEach((element) => {
                newMatrix.push(element);
            });
        }
        if (index % 2 === 1) {
            el.reverse().forEach((element) => {
                newMatrix.push(element);
            });
        }
    });
    return newMatrix;
};
