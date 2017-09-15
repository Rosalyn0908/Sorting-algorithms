// -- Bubble sort --
	my_array = [3, 222, 123, 10, 5, -44, 5, 72, 1, 22, 33];
	$('.example_array:eq(5)').append(JSON.stringify(my_array, null, ' '));

	for (var i = 0; i < my_array.length - 1; i++) {
		for (var k = 0; k < my_array.length - 1 - i; k++) {
			if ( my_array[k] >= my_array[k + 1] ) {
				var j = my_array[k];
				my_array[k] = my_array[k + 1];
				my_array[k + 1] = j;
			}
		}
	}

	$('.solution_output:eq(5)').append(
		'ANSWER: The sorted array will look like this: ' + JSON.stringify(my_array, null, ' ')
	);
