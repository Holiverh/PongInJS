window.onload = function() {
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');

  var game = new Game(ctx, canvas);
  setInterval(game.doLoop, 30);
}

function Game(context, canvas) {
  var self = this;
  self.context = context;
  self.canvas = canvas;
  self.keys = {up:false, down:false, left:false, right:false};
  self.pad_left = new Pad(15, 250, 25, 100);
  self.pad_right = new Pad(canvas.width-40, 250, 25, 100);

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 40) { //Down Arrow
      self.keys.up = false;
      self.keys.down = true;
    } else if (event.keyCode === 38) { //Up Arrow
      self.keys.down = false;
      self.keys.up = true;
    }
    if (event.keyCode === 37) { //Left Arrow
      self.keys.left = true;
      self.keys.right = false;
    } else if (event.keyCode === 39) { //Right arrow
      self.keys.left = false;
      self.keys.right = true;
    }
  });
  window.addEventListener("keyup", function (event) {
    if (event.keyCode == 40 || event.keyCode == 38) {
      self.keys.up = false;
      self.keys.down = false;
    } else if (event.keyCode == 37 || event.keyCode == 39) {
      self.keys.left = false;
      self.keys.right = false;
    }
  });

  self.doLoop = function doLoop() {
    //I should've shot some comments but lel fak it now
    if (self.keys.up) {
      self.pad_right.move("up");
    } else if (self.keys.down) {
      self.pad_right.move("down");
    }
    if (self.keys.left) {
      self.pad_left.move("up");
    } else if (self.keys.right) {
      self.pad_left.move("down");
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    self.pad_left.draw(self.context);
    self.pad_right.draw(self.context);
  };
}
