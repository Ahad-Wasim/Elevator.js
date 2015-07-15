/* Helper Functions for elvator1.js */






/* chooses a randomIndex within an array */

Array.prototype.randomIndex = function(){
	return Math.floor(Math.random() * this.length);  
}







/* Creates floors for a department */

var createFloors = function(floorsCount){
	var results = [];
	for(var i = 0;i<floorsCount;i++){
		results.push(i);
	}
	return results;
}







// This function help me establish the person random Direction. Calling This function calls the two functions right after

var personsTargetDirection = function(currentElevator){
	
	var currentElevatorDirection = currentElevator.direction;
	var highestElevatorFloor = currentElevator.floors[currentElevator.floors.length - 1];
	var currentElevatorFloor = currentElevator.currentFloor;
	var lowestElevatorFloor = currentElevator.floors[0];
	var peopleInElevator = currentElevator.people;


	/* Invoking possibleFloorsFunction */

	var possibleFloors = possibleFloorsFunction(currentElevatorDirection,highestElevatorFloor,currentElevatorFloor,lowestElevatorFloor);


	/* Invoking chooseRandomDestinationsForPeople Function */

	var randomDirection = chooseRandomDestinationsForPeople(peopleInElevator,possibleFloors);

	return randomDirection;

} // closes Persons Target Direction







/* Creates possible floors the people inside the elevator can go to depending on their direction*/

var possibleFloorsFunction = function(elevatorDirection,highestFloor,currentFloor,lowestFloor){

	var possibleFloorsArray = [];

	if(elevatorDirection === 'DOWN'){
			
		for(var i = currentFloor - 1; i>= lowestFloor; i--){
			possibleFloorsArray.push(i);
		}

	} else {
		for(var i = currentFloor + 1;  i<= highestFloor; i++){
			possibleFloorsArray.push(i);
		}
	}

	return possibleFloorsArray;

} 







/* This function will automatically give you all the personal floor #'s randomly */

var chooseRandomDestinationsForPeople = function(personalInElevator,possibleFloors){

	var randomNumbersArray = [];

	for(var i = 0;i<personalInElevator;i++){
		randomNumbersArray.push(possibleFloors.randomIndex());
	}

	return randomNumbersArray;
}







// NEXT FUNCTION HERE












