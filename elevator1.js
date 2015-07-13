function Department(name,floors,elevators){
	this.departmentName = name; 
	this.floors = createFloors(floors);
	this.elevator = createElevator.call(this,elevators);
}

function Elevator(department,floorsNumber,elevatorNumber,weight){
	this.elevatorID = elevatorNumber;
	this.floors = floorsNumber;
	this.currentFloor = floorsNumber[0];
	this.call = []; 
	this.direction;
	this.targetFloor = [];
	this.maximumWeight = weight;
	this.elevatorDepartment = department; 
	this.dateCreated = new Date()
}


function createElevator(elevators){
	
	var elevatorArray = [];

	var name = this.departmentName;
	var floorsNumber = this.floors;
	var weight = 3000;
	  


	for(var i = 0; i < elevators;i++){

		var elevatorNumber = 'Elevator: ' + (i+1);

		elevatorArray[i] = new Elevator(name,floorsNumber,elevatorNumber,weight);
	}

	return elevatorArray;
}



// put a prompt here to get the users response


var videoGames = new Department('Video Games', 8, 3);
var furniture = new Department('Furniture',5,4);







function callElevator(department,personLocation,direction,targetFloor){

	/************** Location of the Person *************/

	var personLocation = department.floors[personLocation];
	var direction = direction.toUpperCase();
	var personTarget = targetFloor;

	/************** Location of the Person *************/













	/************* Find the closest Elevator ***********/   


	// Next step this elevator should find the closest elevator even through the elevators that are moving but only moving in the same direction that the person wants to go (hint: UP - DOWN);


	var departmentElevatorArray = department.elevator; // grabbed from the department Elevator Property





	var closestElevator  = departmentElevatorArray[0];


	if(departmentElevatorArray[0].currentFloor > personLocation){
		var closestElevatorNumber = departmentElevatorArray[0].currentFloor - personLocation;
	} else {
		var closestElevatorNumber = personLocation - departmentElevatorArray[0].currentFloor;
	}




	

	_.each(departmentElevatorArray,function(eachElevator){
		var current = eachElevator.currentFloor;


		if( personLocation <= current  &&  current - personLocation < closestElevatorNumber){

			closestElevatorNumber = current - personLocation
			closestElevator = eachElevator;

		} else if(personLocation >= current && personLocation - current < closestElevatorNumber ){

			closestElevatorNumber = personLocation - current;
			closestElevator = eachElevator;

		}

	});



	
	/************* Find the closest Elevator ***********/


	











	/************* Call the Elevator *****************/

	// Note a call can only have the floors between the first Call and the target Floor.

	
	closestElevator.call.push(personLocation)
	closestElevator.direction = direction;
	closestElevator.targetFloor.push(personTarget)

	console.log(closestElevator);

	/************* Call the Elevator *****************/




// call elevator function will end once we have a call request pushed inside an array and a target floor.

	

}  // closes callElevator	











callElevator(videoGames,6,'down',0); // this can represent buttons




































