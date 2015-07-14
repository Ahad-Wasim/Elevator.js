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
	var personDirection = direction.toUpperCase();
	var personTarget = targetFloor;

	/************** Location of the Person *************/










	/************* Find Possible Elevators ***********/   


	/* Test which Moving or Non-Moving Elevators can pick you up */

	

	var departmentElevatorArray = department.elevator; // grabbed from the department Elevator Property

	

	// departmentElevatorArray[0].direction = 'DOWN';
	// departmentElevatorArray[0].currentFloor = 7;
	// departmentElevatorArray[1].direction = 'STOPPED';
	// departmentElevatorArray[1].currentFloor = 5;
	// departmentElevatorArray[2].direction = 'DOWN';
	// departmentElevatorArray[2].currentFloor = 5;




	var possibleElevators = _.filter(departmentElevatorArray,function(eachElevator){
		var elevatorDirection = eachElevator.direction;
		var current = eachElevator.currentFloor;

		if(elevatorDirection === 'STOPPED' || elevatorDirection === undefined){
			return eachElevator;
		} else if(elevatorDirection === personDirection){ 
				// the rest are moving elevators
			if(elevatorDirection === 'DOWN' &&  current >= personLocation){
					return eachElevator;
		   		} else if(elevatorDirection === 'UP' && current <= personLocation  ){
					return eachElevator;
		 		}		
		 } else {
		 	// this means no elevator is available right now because we didn't get anything returned back. If thats the case keep calling this function over and over agan until an elevator is available.

		 	// put this into a function and keep calling this until an elevator is available
		 }  


	}); // closes filter


 /************* Find Possible Elevators ***********/  






/************* Find the closest Elevator ***********/


var closestElevator = possibleElevators[0];

if(possibleElevators[0].currentFloor > personLocation){
		var closestElevatorNumber = possibleElevators[0].currentFloor - personLocation;
	} else {
		var closestElevatorNumber = personLocation - possibleElevators[0].currentFloor;
	}





		_.each(possibleElevators,function(eachElevator){

			var c = eachElevator.currentFloor

			if( personLocation <= c  &&  c - personLocation < closestElevatorNumber){

				closestElevatorNumber = c - personLocation
				closestElevator = eachElevator;

			} else if(personLocation >= c && personLocation - c < closestElevatorNumber ){

				closestElevatorNumber = personLocation - c;
				closestElevator = eachElevator;

			}

		});

		console.log('I am calling',closestElevator.elevatorID);
		console.log('this elevator is',closestElevatorNumber + ' floors away');

	
	


/************* Find the closest Elevator ***********/











/************** Call the Elevator *******************/

	// Note a call can only have the floors between the first Call and the target Floor.

	
	closestElevator.call.push(personLocation)
	closestElevator.direction = personDirection;
	closestElevator.targetFloor.push(personTarget)

	console.log('I got assigned to go to the', closestElevator.targetFloor + ' floor');
	console.log('The direction Im heading is',closestElevator.direction);

/************* Call the Elevator *********************/








// call elevator function will end once we have a call request pushed inside an array and a target floor.

		


}  //closes callElevator


callElevator(videoGames,6,'down',0); // this can represent buttons
callElevator(videoGames,6,'down',0)

































		















	






















































