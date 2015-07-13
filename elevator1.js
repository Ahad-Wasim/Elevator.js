
/*  Elevator Rules */

//  Floors start from zero temporarily.
//  Each Elevator takes two seconds to go up a floor.
//  Elevator can only hold up to a certain amount of pounds. (Anywhere from 1000 - 6000); NOTE higher the weight. The more money the customer has to pay for the elevator. Were going to start off with 3000 lbs.


//  Elevator have assigned areas. Ex. Shoes Dept(3 Elevators)  Pants Dept(2 Elevators) 
//  Each Department does have a number of floors





/* Elevator Steps */

// 1. Each Elevator starts at its current location

// 2. When a call is recieved from a person, the elevator will have to check to see which elevator is the closest to that call and to see if that call is going to the same direction that the elevator is going.

// 3. After arriving at that floor the elevator, the elevator can only pick up a certain amount of people from their.

// 4. After picking up the customers up the  (By Direction it means UP || DOWN)

// 5. The elevator can pick somebody up on the way only if they are going that certain direction.

// 6. Elevator than drops all the people off and waits for its next request.



function Department(name,floors,elevators){
	this.departmentName = name; 
	this.floors = createFloors(floors);
	this.elevator = createElevator.call(this,elevators);
}

function Elevator(department,floorsNumber,elevatorNumber,weight){
	this.dateCreated = new Date()
	this.elevatorDepartment = department; 
	this.floors = floorsNumber;
	this.elevatorID = elevatorNumber;
	this.currentFloor = floorsNumber[0];
	this.direction;
	this.targetFloor;
	this.maximumWeight = weight;
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







function callElevator(department,personLocation,direction){

	/************** Location of the Person *************/

	var personLocation = department.floors[personLocation];
	var direction = direction.toUpperCase();


	/************** Location of the Person *************/













	/************* Find the closest Elevator ***********/    

	var departmentElevatorArray = department.elevator; // grabbed from the department Elevator Property





	departmentElevatorArray[0].currentFloor = 6;
	departmentElevatorArray[1].currentFloor = 7;
	departmentElevatorArray[2].currentFloor = 5;




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

	console.log('this is the closest Elevator',closestElevator.elevatorID);
	console.log('this is the distance from person',closestElevatorNumber);

	
	/************* Find the closest Elevator ***********/






	












	
	

}  // closes callElevator	











callElevator(videoGames,6,'down'); // this can represent buttons




































