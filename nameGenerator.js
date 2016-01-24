<script>
var buffer = document.createElement('canvas');
var bufContext = buffer.getContext("2d");

var w = 300;
var h = 100;


buffer.width = w;
buffer.height = h;

bufContext.fillStyle = "#FFFFFF";
bufContext.fillRect(0, 0, w, h);

bufContext.textBaseline = "top";
bufContext.font = "80px Helvetica";
bufContext.fillStyle = "#000000";
bufContext.fillText("sitar", 0, 0);

var img = bufContext.getImageData(0, 0, w, h);

var bitmap = [];
var finalmap = [];

for(var i=0;i<w;i++) {
	var cur = [];
	var cur2 = [];
	bitmap.push(cur);
    finalmap.push(cur2);
	for(var j =0; j < h; j++) {
		cur.push([]);
	}
		cur2.push([]);
		cur2.push([]);
}
	document.write("{");

for (var y=0; y<h; y++) {
	
    var whichPixel = w*y;
	bitmap[0][y] = (img.data[4*whichPixel] < 140); 
	
    for (var x=1; x<w; x++) {
		var whichPixel = w*y + x;

		bitmap[x][y] = (img.data[4*whichPixel] < 140); //If the red channel of the pixel is lower than 140, we consider it "on"   
	}
}
 	
var i = 0;
for (var y=0; y<h; y++) {
	for (var x=1; x<w; x++) {
    if(bitmap[x][y]){
	document.write("{");
	document.write(x);
	document.write(", ");
	document.write(y);
	document.write("}");
	document.write(", ");
    }
    i++;
	}
}


	document.write("}");

</script>
