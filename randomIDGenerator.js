/**
 * @return {string}
 */
function IDGenerator() {
    return Math.random().toString(36).substr(2);
}
module.exports = IDGenerator;