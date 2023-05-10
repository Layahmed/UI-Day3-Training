var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
console.log(Direction.South);
console.log(Direction.East);
console.log(Direction.West);
console.log(Direction[0]);
console.log(Direction[1]);
console.log(Direction[2]);
console.log(Direction[3]);
