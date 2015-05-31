function Robot() {}

function Vehicle() { 
   if(this instanceof Vehicle)
      return {};
}


module.exports = {
   Robot:    Robot,
   Vehicle:  Vehicle
}
