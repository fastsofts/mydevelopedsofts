google.maps.Polygon.prototype.contains = function(point) {
  var j=0;
  var oddNodes = false;
  var x = point.lng();
  var y = point.lat();

  var paths = this.getPath();

  for (var i=0; i < paths.getLength(); i++) {
    j++;
    if (j == paths.getLength()) {j = 0;}
    if (((paths.getAt(i).lat() < y) && (paths.getAt(j).lat() >= y))
    || ((paths.getAt(j).lat() < y) && (paths.getAt(i).lat() >= y))) {
      if ( paths.getAt(i).lng() + (y - paths.getAt(i).lat())
      /  (paths.getAt(j).lat()-paths.getAt(i).lat())
      *  (paths.getAt(j).lng() - paths.getAt(i).lng())<x ) {
        oddNodes = !oddNodes
      }
    }
  }
  return oddNodes;
}