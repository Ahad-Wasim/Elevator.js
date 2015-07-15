
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






	/* PSEUDOCODE to grab multiple people going on the same floor */

	// If MORE THAN ONE PERSON is on the same floor and want to go the same direction then you need to grab everybody onto that elevator.

	// So when you call callElevator it should keep a count of how many people want to get on that elevator. Remove the target floor because their will be more than one target floor and it will be confusing to pass that data into the parameter.

	// step 1 : Remove the target from the call Elevator Parameter =)

	// step 2 : Add the number of people at that floor that are wanting to go in that direction =)

	// step 3: Push those numbers in. Inside the code. Have a function call get target that will generate the target location where the customer wants to go to and let it go to that function. 

	// When everything is done, the elevator should be able to hold multiple people. and ship them to their desired floor.







	// if two people want to go the opposite direction the code should already generate different elevators for them.

	// Note if no elevators are available we have to keep calling this function until an elevator is available.






















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






















