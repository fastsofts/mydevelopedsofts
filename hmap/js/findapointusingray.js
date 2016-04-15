google.maps.Polygon.prototype.Contains = function (point) {
       var crossings = 0,path = this.getPath();
       for (var i = 0; i < path.getLength(); i++) {
             var a = path.getAt(i);
             j = i + 1;
             if (j >= path.getLength())
                {
                 j = 0;
                } 
             var b = path.getAt(j);
             if (rayCrossesSegment(point, a, b))
                {
                 crossings++;
                } 
            }

       return (crossings % 2 == 1);


function rayCrossesSegment(point, a, b)
      {
       var px = point.lng(),py = point.lat(),ax = a.lng(),ay = a.lat(),bx = b.lng(),by = b.lat();
       if (ay > by)
          {
           ax = b.lng();
           ay = b.lat();
           bx = a.lng();
           by = a.lat();
          }
       if (py == ay || py == by)
           py += 0.00000001;
       if ((py > by || py < ay) || (px > Math.max(ax, bx)))
           return false;
       if (px < Math.min(ax, bx)) 
           return true;
       var red = (ax != bx) ? ((by - ay) / (bx - ax)) : Infinity;
       var blue = (ax != px) ? ((py - ay) / (px - ax)) : Infinity;
       return (blue >= red); 
      } 
};