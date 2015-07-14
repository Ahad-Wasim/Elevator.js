
/*  Elevator Rules */

//  Floors start from zero temporarily.  		=)

//  Each Elevator takes two seconds to go up a floor.

//  Elevator can only hold up to a certain amount of pounds. (Anywhere from 1000 - 6000); NOTE higher the weight. The more money the customer has to pay for the elevator. Were going to start off with 3000 lbs.


//  Elevator have assigned areas. Ex. Shoes Dept(3 Elevators)  Pants Dept(2 Elevators)     =)

//  Each Department does have a number of floors     =)





/* Elevator Steps */

// 1. Each Elevator starts at its current location =)

// 2. When a call is recieved from a person, the elevator will have to check to see which elevator is the closest to that call and to see if that call is going to the same direction that the elevator is going.

// 3. After arriving at that floor the elevator, the elevator can only pick up a certain amount of people from their.

// 4. After picking up the customers up the  (By Direction it means UP || DOWN)

// 5. The elevator can pick somebody up on the way only if they are going that certain direction.

// 6. Elevator than drops all the people off and waits for its next request.























		/* PSEUDOCODE to find out the closest Elevator to me */

		// Ex: I am on the 6th floor. I want to go to the 0 floor. I call an elevator and tell it that I'm going down. Now the elevator should look through all the elevators and see which one is the closest. 

		
		// If none of the elevators have a direction set than call whichever elevator is the closest.  =)


		// Closest Elevator is on the 7th floor and its direction is set to Down. This elevator can then take my call because I want to go down and being that I am on the 6th floor I AM ON THE ELEVATORS WAY DOWN so it can pick me up.		


		// Closest Elevator is on the fifth floor. But its direction is already set to down. Since I'm on the 6th floor and want to go down, the elevator can not go upwards and pick me up. Even though we have the same direction once it passes me (Elevator is on the 5th floor) then that elevator is out of my reach. So I would have to wait for the next closest Elevator. 

		/*

		var possibleElevators = [];

		if(elevatorDirection === STOPPED || elevatorDirection === 'undefined'){
			console.log('This elevator is not moving. Theirs a possiblilty that its closer lets push this elevator');
			possibleElevators.push(eachElevator)
		} else if(elevatorDirection === PersonDirection){ 

			console.log('We can possibly grab this elevator because we are going the same direction');

				if(elevatorDirection === 'DOWN' &&  elevator.currentFloor > personLocation){

					console.log('I can pick up the person because I have not arrived at his floor yet');
					console.log('This is a possible elevator I can use. Lets see if its the closest');

					possibleElevators.push(eachElevator);

		   		} else if(elevatorDirection === 'UP' && elevator.currentFloor < personLocation  ){
					
					console.log('I can pick up the person because I haven't yet arrived to that floor);
					console.log('This is a possible elevator I can use. Lets see if its the closest');

					possibleElevators.push(eachElevator);


		 		}		

		*/


		//  Once we get an array of the possible Elevators we can use we can then check which elevator is the closest from the person. Once we get that we then send the elevator to that person and we are done from here.  

		// NOTE TEST THIS A MILLION TIMES IF YOU HAVE TO




















/* My First Attempt on the elevator. Did not work out but can take things away from this




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
















