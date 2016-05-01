# Module_3

Week 3

  1. Fork this repository.
  2. Convert the module you wrote for week 2 into a Node module in **enhanced-date.js**. This means your module will not be using an immediately invoked function expression, nor will it be returning anything using the `return` keyword. Instead, refer to the class slides or lecture (recording) for how you return your module's interface using the CommonJS or Node module format. This will allow you to use your module thus:  
  
    `var dateObj = require('./enhanced-date');`

  3. Using the **trucks.js** file provided, make it into a Node module. In addition to the array of truck objects defined in this file, export an object with a method called `filterTrucksByDay`. This method takes one argument, and returns an array of truck names that are open on the day that is passed in to this function as an argument. Use the built-in array [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method. Sample usage:
  
    `var trucks = require('./trucks');`  
    `var day = dateObj.getDayName();`  
    `var truckArray = trucks.filterTrucksByDay(day);`

  4. In **server.js**, you're going to build an http server (refer to the slide-deck or the class recording as we already did this.) The server should listen for request events, and handle them by writing to the response the following message (note that you'll need to use the Date object to get the 'date' part): 
  
  *"Today is [day name], [month name] [date]. The food trucks available are :"* 

  Sample output:  
  
        Today is Monday, April 18. The food trucks available are:

  Follow this with a list of food trucks obtained by calling the `filterTrucksByDay()` method you implemented in the trucks module:
  
        314 Pie  
        Absolut Hot Dog and Gyros  
        Athena's  
        Barriga Llena  
        Beloved Mexico  
        Big Dog's  
        Big Spoon  
        Biscuit Box  
        Bomba Fusion  
        Bread and Circuses  
        Buddha Bruddah  
        Budha Bear Bagels  
        Charlie's  
        Cheese Wizards  
        Chick'n Fix  
        Delicatessen Montanti  
        Djung on Wheels  
        Dog Japon  
        
  Calling that function will return an array of objects. You'll want to loop through that array, getting the name of each truck from the truck object you're looping over. Build up a string in this loop to output. Because you'll just be outputting text, add the newline character to the end of each food-truck name: 
  
    `var truckString = 'Today is ';`  
    `// add the day name, month name, and date here, followed by a newline`
    `// loop over the array of truck objects, building truckString as you go:`  
    `truckString += trucks[i].name + '\n';`
    
  Once you're done looping through the list, write the string to the response stream (`response.write(your_string);`), then close the stream (`response.end();`). Again, refer to the existing code we looked at for how you write a simple http server in Node.
  
  5. In total there are 4 files that need to be updated, implemented, or created: **enhanced-date.js**, **trucks.js**, **server.js**, and **.eslintrc**. 

