# Mars Rover Code Challenge

The objective of this challenge is to develop a navigation system for a Rover on Mars that will traverse on a two-dimensional grid zone,
represented by a single cartesian coordinate - for example: (5, 5).
The rover understands the cardinal points and can face either East (E), West (W), North
(N) or South (S) at any given time.
The rover understands three commands: M - Move one space forward in the direction it is facing, R - rotate 90 degrees to the right
and L - rotate 90 degrees to the left.
These commands will be executed by the rover and its resulting location will be shown on the screen.

## Technologies

Project is created with:

- Javascript/Jquery
- HTML5
- CSS3 - Bootstrap4

## Usage

The program UI consists of a form with the following fields

- Horizantal Blocks (number of horizontal blocks)
- Vertical Blocks (number of vertical blocks)
- Start H (rover's starting location on horizontal axis)
- Start V (rover's starting location on vertical axis)
- Start Direction (the rover's starting orientation, from the drop down select North, South, East or West)
- Commands (use buttons labeled M - Move one space forward in the direction it is facing
  L - rotate 90 degrees to the left
  R - rotate 90 degrees to the right )

you are only able to send the rover a single list of commands. while pressing the buttons labeled M,L,R the full command will be display on the non editable input field below the buttons. use the button labeled 'Clear' to clear commands.

The rover can only move within it's boundaries.

Press the button labelled 'Go' to execute list of commands. the resulting loaction of the rover will the be displayed on the screen.

##Example input and output

### Input

- 10, 10 (number of horizontal and vertical blocks)
- 2, 3, N (Rover strating position and orientation)
- MMMLRM (commands)

### Output

- 2 7 N

## Design

The program consists of the following functions:

- move() - Move one space command
- rotateLeft() - rotate 90 degrees left command
- rotateRight() - rotate 90 degrees left command
- clearCommands() - clear commands list

- traverseGrid() - handles rover movement and ensures it stays within boudaries. returns vertical or horizontal landing position of rover

- executeCommands() - loops through commands list and calls traverveZone() function to move and rotate the rover based on commands

I used Mocha Framework to run unit tests and execute test cases to ensure correctness of input and output values
