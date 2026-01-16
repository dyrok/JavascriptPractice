let array = [1, 2, 3, 4, 5]

function myMap(array, callback) {
	let new_array = []

	for (let i = 0; i < array.length; i++) {
		new_array.push(callback(array[i], i))
	}

	return new_array
}

console.log(myMap(array, (valAtIndex, index) => `value at ${index} :${valAtIndex * 2}`))
