/**
 * The base implementation of `slice`.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  let index = -1
  let { length } = array

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }

  // >>> 0 make sure the length is a 32-bit unsigned int
  // link to : http://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default baseSlice
