// Import events module
var events = require('events');


// Create an eventEmitter object din modulul events
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
//o functie, iar referinta functiei este salvata intr-o variabila
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 

   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
//am legat de eventul connection, functia connectHandler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event 
//generam un event (emitem un event)
//putem avea un handler pe eveniment

eventEmitter.emit('connection');

console.log("Program Ended.");