var machine = { motors: null },
    robot   = {},
    vehicle = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

claim(machine.motors, null);
claim(robot.motors, null);
claim(vehicle.motors, null);

robot.motors = 4;

claim(machine.motors, null);
claim(robot.motors, 4);
claim(vehicle.motors, null);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}
