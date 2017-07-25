//executa continutul event handerului
//day2-2
process.on('exit', function(code) {

   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('About to exit with code:', code);
});

//aici e bine sa facem numai lucruri syncrone
process.on('beforeExit', function(code) {

   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('About to exit with code:', code);
});
console.log("Program Ended");