// Elevator Game

// Note Just focus on the main Functionality. Once thats working than focus on adding goodies.



// Every Elevator is assinged to a certain area

// going up a floor takes 2 seconds

// Elevator can be programmed to have as many floors as it wants

// Each Elevator should let you know if it is going up. Or if its going down.

// When a Elevator is called the closest one should come to you if its going your direction.

// Need Elevator code that will go down from currentFloor

// As a elevator goes up it can stop and pick up other customers as well.

// The customer should call an elevator and it should automatically be programmed to give you the one that is the most closest to you.







// Problems

// I want to make my code synchrous. My code below runs while the elevator is moving. Not sure if thats a good thing.

// If I do want to make a timing code synchronous then use the new date and follow the example on this website.

/* http://stackoverflow.com/questions/4122268/using-settimeout-synchronously-in-javascript */



// NOTE zero represents the lobby

var floors =  [0,1,2,3,4,5,6,7,8];


var direction = ['UP','DOWN'];




var Elevator = function(name){
	this.assignedArea;

	// call refers to picking up a person from a floor. Ex: Elevator is at floor 7. Person at 3 needs to go down.


	this.call;     
	this.elevatorName = name;
	this.currentFloor = 0;
	this.targetFloor = null;

	/* status refers to  if the elevator is going up or down */
	this.status;   			
	
}

Elevator.prototype.move = function(direction,target,customerLocation){


	if(this.status === 'UP' || this.status === 'DOWN'){
		console.log('Hey ' + this.elevatorName + ' the elevator you have requested is already moving. Im going to check to see if it is going your direction');

		 	return
		if(this.status === 'UP' && this.currentFloor < customerLocation ){
			// pick up the customer
		} else if(this.status === 'DOWN'){

		}


	} else {
		this.status = direction.toUpperCase();
	}


	

	this.targetFloor = target;


  	var i = this.currentFloor; 


	function moveElevator() { 

				setTimeout(function(){  
   					   console.log(this.elevatorName + ' is going ' + this.status + ' ' + this.elevatorName + ' is currently at ',this.currentFloor); 
      				   i++; 
      				   if (i <= target) {
      				   	  this.currentFloor = i;
         			      moveElevator.call(this);             
      				   } else {
      				   	this.currentFloor = target;
      				   	this.targetFloor = null;
      				   	this.status = 'STOPPED';
      				    console.log(this,  ' has arrived');
      				   }                        
   				   }.bind(this), 200);

		


  
	}

	moveElevator.call(this); 
		




};  // closes Elevator.prototype










var elevatorOne = new Elevator('Elevator: 1');






elevatorOne.move('up',8,1);

elevatorOne.move('up',5,5);


















// this is suppose to represent 10 people calling an elevator



	for(var i = 1; i <= 10 ;i++){

		var randomFloor = floors.randomIndex();
		var randomDirection = direction.randomIndex();

	}









   // This function doesn't need to be called until the program is complete.

	function callElevator(area,targetFloor,direction){
		// area: which area the customer is located
		// targetFloor: The floor the customer wants to go to.
		// direction: If the customer is going up or down.
	}
















