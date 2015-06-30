$(function() {

	var toDosTemplate = _.template($("#todos-template").html())

	// `toDos` array is our model (holds our data)
	// contains test (or "seed") daa
	var toDos =[
		{title: "laundry", description: "clean clothes"},
		{title: "grocery shopping", description: "buy food"},
		{title: "nap time", description: "remember to sleep!"}
	];

	// form to create new todo
	var $newToDo = $('#new-todo');
  
	// element to hold our list of todos
	var $toDoList = $('#todo-list');

	_.each(toDos, function (todo, index) {
		var $toDo = $(toDosTemplate(todo));
		$toDo.attr("data-index", index);
		$toDoList.append($toDo);
	});

	// submit form to create new todo
	$newToDo.on('submit', function(event) {
		event.preventDefault();

		// create new todo object from form data
		var toDoName = $('#todo-title').val();
		var toDoDesc = $('#todo-description').val();
		var toDoData = {title: toDoName, description: toDoDesc};

		// store our new todo
		toDos.push(toDoData);

		// append our new todo to the page
		$toDoList.append($(toDosTemplate(toDoData)));

		// reset the form
		$newToDo[0].reset();
		$('#todo-name').focus();
 	});

	//add class to todo on click to mark it as done
	$toDoList.on('click', '.todo', function() {
		$(this).addClass('done');
	});

});

  // // Variables
  // var $petsList = $("#pets-list");

  // // pets template
  // var petsTemplate = _.template($('#pets-template').html());

  // var pets = [
  // {name: "Sprinkles", species: "cat"},
  // {name: "Bagel", species: "dog"},
  // {name: "Fluffy", species: "dinosaur"}
  // ];

  // _.each(pets, function (pet, index) {
  //   var $pet = $(petsTemplate(pet));
  //   $pet.attr('data-index', index);
  //   $petsList.append($pet);
  // });