function Department(name,floors,elevators){
	this.departmentName = name; 
	this.floors = createFloors(floors);
	this.elevator = createElevator.call(this,elevators);
}

function Elevator(department,floorsNumber,elevatorNumber,people){
	this.elevatorID = elevatorNumber;
	this.floors = floorsNumber;
	this.currentFloor = floorsNumber[0];
	this.call = []; 
	this.direction;
	this.targetFloor = [];
	this.people = people;
	this.elevatorDepartment = department; 
	this.dateCreated = new Date()
}


function createElevator(elevators){
	
	var elevatorArray = [];

	var name = this.departmentName;
	var floorsNumber = this.floors;
	var people = 0;
	  


	for(var i = 0; i < elevators;i++){

		var elevatorNumber = 'Elevator: ' + (i+1);

		elevatorArray[i] = new Elevator(name,floorsNumber,elevatorNumber,people);
	}

	return elevatorArray;
}



// put a prompt here to get the users response


var videoGames = new Department('Video Games', 8, 3);
var furniture = new Department('Furniture',5,4);





/***********************************************************************************************/


















function callElevator(department,personLocation,direction,amountOfPeople){

	if(amountOfPeople <=0 ){
		alert('Please enter a appropriate number');
		return;
	}

	/************** Location of the Person *************/

	var personLocation = department.floors[personLocation];
	var personDirection = direction.toUpperCase();
	var peopleAtFloor = amountOfPeople;

	/************** Location of the Person *************/

	// console.log('there are',peopleAtFloor + ' people at floor',personLocation);









	/************* Find Possible Elevators ***********/   
	

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

			// console.log('I am calling',closestElevator.elevatorID + ' because its the closest');
			// console.log('this elevator is',closestElevatorNumber + ' floors away');

	
	/************* Find the closest Elevator ***********/













	/************** Call the Elevator *******************/
	
	closestElevator.call.push(personLocation)
	closestElevator.direction = personDirection;

	// console.log('I got assigned to go to the', closestElevator.call[0] + ' floor');
	// console.log('The direction Im heading is',closestElevator.direction);
	// console.log("I am picking up",closestElevator.people + ' with me.');


	/************* Call the Elevator *********************/








	function pickUpPerson(elevator){

		var callLocation = elevator.call[0];
		

		var numberOfCalls = 0;
	 	var arrived = "I am opening the Elevator. Get in";

	 	var i = elevator.currentFloor;

	 	if(callLocation === elevator.currentFloor ){
	 		console.log("Open the door. I\'m at your floor.");
	 		elevator.call = [];
	 	  } else if(callLocation > elevator.currentFloor){
	 	  	console.log('This elevator has to go up to pick you up');
	 	  	goingUp();

	 	 } else if(callLocation < elevator.currentFloor){
	 	 	console.log('This elevator has to go down to pick me up');
	 	 	goingDown();

	 	 }


		function goingUp(){

			console.log('the elevator is at floor:',i);

		 	setTimeout(function(){  
		      			i++; 
		      			if (i < callLocation) {
		      				elevator.currentFloor = elevator.floors[i];
		      				goingUp()           
		      			} else {
		      				elevator.currentFloor = elevator.floors[i];
		      				console.log('Elevator has arrived to floor:',i);
		      				elevator.call = [];
		      				console.log('You may now enter the elevator'); 
		      				elevator.people = peopleAtFloor;  
		      				console.log(elevator.people + ' people boarded this elevator');        
		      				console.log(elevator);


		      				elevator.targetFloor = personsTargetDirection(elevator);
		      				return;
		      			}                        
		   	},50);
		};






		function goingDown(){

			console.log('the elevator is at floor:',i);


			 setTimeout(function(){  
		      			i--; 
		      			if (i > callLocation) {
		      				elevator.currentFloor = elevator.floors[i];
		      				goingDown()
		      			} else {
		      				elevator.currentFloor = elevator.floors[i];
		      				console.log('Elevator has arrived to floor:',i);
		      				elevator.call = [];
		      				console.log('You may now enter the elevator'); 
		      				console.log(elevator.people + ' people boarded this elevator');
		      				elevator.people = peopleAtFloor;      
		      				console.log(elevator);


		      				elevator.targetFloor = personsTargetDirection(elevator);
		      				return;
		      			}                        
		   	},50);
		
		} // closes going down 
	     
	} // closes pickUpPerson

	pickUpPerson(closestElevator);




}  //closes callElevator



// We have to figure out a way to get to this point only when the setTimeout is finished. The setTimeout is finished when the call Elevator function has reached its calling floor and when the people board on the elevator with their target locations.




















/* Note when calling an elevator like the lines below it can represent people pressing a button to request an elevator */
/* What the call Elevator function does is that it just changes the properties on elevator. It doesn't return anything like what most functions do. After the function is complete we should have a CALL DIRECTION, NUMBER OF PEOPLE, ELEVATOR DIRECTION all set */
















// Peoples Floors

// (departmentName).floors[the amount of floors that department has];

callElevator(videoGames,videoGames.floors[6],'down',5); 





























function moveElevator(){



	var personalInElevator; 

	// establish a people count.
	// when a person leaves it should decrement by the number of people left.


	// This function must take in a target direction and push that into the target Array.
	// When someone enters the same target direction for example. [5,3,4,3,2,0]. In this case there are two people that want to go to floor 3. When arriving at floor 3. Loop through the array and pop off that value that equals to 3.

	// depending on where the elevator is at this current moment. If the elevator is going down and when someone presses a button it cannot be a button higher than the elevators current floor because the elevator is meant to go only down.

	// when the elevator is going up. The elevator can not go to any lower floor than what its currently at right now because the elevator destination is anything upwards.


}



































		















	






















































