
// Lowest can be index 0 < === > Highest can be index 8

Array.prototype.randomIndex = function(){
	return Math.floor(Math.random() * this.length);  
}


var createFloors = function(floorsCount){
	var results = [];
	for(var i = 0;i<floorsCount;i++){
		results.push(i);
	}
	return results;
}







