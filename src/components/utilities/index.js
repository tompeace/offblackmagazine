export default {
    /**
     * Check if a value is a valid array with one or more elements
     * @param {any} array
     * @returns {boolean} result
     */
    isArray: (array) => {
        if (array &&
            Array.isArray(array) &&
            array.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * Run a method safely
     * Useful for accessing a nested property of an object safely
     * e.g. util.try(() => object.property.property);
     * @param {function} method
     * @returns {any} result
     */
    try: (method) => {
        try {
            return method();
        } catch (e) {
            return null;
        }
    }
}
