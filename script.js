$(function() {

	var toDosTemplate = _.template($("#todos-template").html())

	// form to create new todo
	var $newToDo = $('#new-todo');
	 
	// element to hold our list of todos
	var $toDoList = $('#todo-list');

	function ToDo(title, description) {
		this.title = title;
		this.description = description;
	}

	ToDo.all = [];

	ToDo.prototype.save = function() {
		ToDo.all.push(this);
	}

	var toDo1 = new ToDo("laundry", "clean clothes");
	toDo1.save();
	var toDo2 = new ToDo("grocery shopping", "buy food");
	toDo2.save();
	var toDo3 = new ToDo("nap time", "remember to sleep!")
	toDo3.save();

	ToDo.prototype.render = function() {
		var $toDo = $(toDosTemplate(this));
		$toDoList.append($toDo);
		var index = ToDo.all.indexOf(this);
		console.log(index);
		$toDo.attr("data-index", index);
	}

	_.each(ToDo.all, function(todo, index) {
		todo.render();
	})

	// `toDos` array is our model (holds our data)
	// contains test (or "seed") data

	// var toDos =[
	// 	{title: "laundry", description: "clean clothes"},
	// 	{title: "grocery shovv,9pping", description: "buy food"},
	// 	{title: "nap time", description: "remember to sleep!"}
	// ];

	// form to create new todo
	// var $newToDo = $('#new-todo');
  
	// element to hold our list of todos
	// var $toDoList = $('#todo-list');

	// _.each(toDos, function (todo, index) {
	// 	var $toDo = $(toDosTemplate(todo));
	// 	$toDo.attr("data-index", index);
	// 	$toDoList.append($toDo);
	// });

	// submit form to create new todo
	$newToDo.on('submit', function(event) {
		event.preventDefault();

		// create new todo object from form data
		var toDoName = $('#todo-title').val();
		var toDoDesc = $('#todo-description').val();
		var toDoData = {title: toDoName, description: toDoDesc};

		// store our new todo
		toDos.push(toDoData);
		console.log(toDos);

		// append our new todo to the page
		$toDoList.append($(toDosTemplate(toDoData)));

		// reset the form
		$newToDo[0].reset();
		$('#todo-name').focus();
 	});

	//add class to todo on click to mark it as done
	$toDoList.on('click', '.todo', function() {
		$(this).remove();
		//find the index of item
		var itemIdex = $(this).attr("data-index");
		// or // var itemIdex = $(this).index;

		// Print it
		console.log(itemIdex);
		// then delete it
		toDos.splice(itemIdex, 1);
		//check to see if really deleted
		console.log(toDos)

		// reset indexes in DOM to match `toDos` array
	   // $.each loops through DOM elements
	   $('.todo').each(function(index) {
	   	$(this).attr('data-index', index);
	   });

	});

	//$(this).closest('.li').remove();

});






