/**
 * @author Ricardo Jimenez Sanchez
 * @summary Takes an object and coverts it's first layer to an array
 * @function restructureObjectToArray
 * @param {Object} objectToRestructure
 * @return {Array} Array of objects
 */
function restructureObjectToArray(objectToRestructure) {
  const entries = Object.entries(objectToRestructure);
  let restructuredObject = [];

  for (const [key, value] of entries) {
    let newObject = {
      name: key,
      value
    };

    restructuredObject.push(newObject);
  }

  return restructuredObject;
}

export default restructureObjectToArray;
