import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_SYMBOLS_FLAG = 4

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. Object inheritance is preserved. An empty object is
 * returned for uncloneable values such as error objects, functions, DOM nodes,
 * and WeakMaps.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see cloneDeep
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const shallow = clone(objects)
 * console.log(shallow[0] === objects[0])
 * // => true
  浅克隆 调用了baseClone方法 value:数据源 CLONE_SYMBOLS_FLAG:标识位4
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG)
}

export default clone
