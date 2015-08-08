//Recursion problem

//company has set up a webpage so that 1 pixel on the webpage has an easter egg
//if you click on that pixel, you get a prize
//page is designed to get bigger and bigger as you scroll right or down
//pixel can be anywhere, not guarenteed to be on the first screen
//write a script that will click on pixels one after another
//figure out strategy to click on pixel, click function is click(x,y);
//need x,y to know what pixel to click

//iterate through pixel coordinates
//run click function for each pixel coordinate

function easterEggFinder(){
	//loop through infinite numbers, but coordinates should add up to current number iteration
	// i.e. 1, coords should be (0,1) & (1,0), 5 - (5,0),(4,1),(3,2) etc
	var diagonalSum = 0;
	while(true){
		for(var i = 0; i <= diagonalSum; i+=){
			//i;
			var j = diagonalSum - i;
			if(click(i,j)){
				return [i, j];
			}
		}
		diagonalSum++;
	}

}