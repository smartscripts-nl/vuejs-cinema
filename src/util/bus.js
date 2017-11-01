/**
* @param category Can either be 'genre' or 'time'
*/
function checkFilter(category, title, checked) {

	if (checked) {
		this[category].push(title);
	}

	//remove item from active filters:
	else {
		let index = this[category].indexOf(title);

		if (index > -1) {
			this[category].splice(index, 1);
		}
	}
}

export { checkFilter };
