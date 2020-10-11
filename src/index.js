module.exports = function reverse (n) {
    n<0 ? n*=-1 : n=n;
    return Number(String(n).split('').reverse().join(''));
}
