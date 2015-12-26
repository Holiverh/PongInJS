function Pad(x, y, w, h) {
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;
  self.speed = 15;

  self.draw = function draw(context) {
    context.fillStyle = "rgb(0,0,0)";
    context.fillRect(self.x, self.y, self.w, self.h);
  };

  self.move = function move(direction) {
    if (direction === "up") {
        self.y -= self.speed;
    } else if (direction === "down") {
        self.y += self.speed;
    }

    if (self.y <= 0) {
      self.y = 0;
    }
    if (self.y >= 600-self.h) {
      self.y = 600-self.h;
    }
  }
}
