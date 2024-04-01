var entry=0;
var image=null;
function nextPage(){
  if(entry<9){
    entry++;
  }else{
    entry = 0;
  }
    console.log(entry);
   // document.getElementById("IMAGE").src=XMLHttpRequest(new(gallery.xml));
    document.getElementById("IMAGE").src =`images\\${entry}`;
    document.getElementById("desc").textContent=entry;
    document.getElementById("desc").textContent="this is entry number: " + entry + "why it no wrap adf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfej ahb";

  }

function prevPage(){
    if(entry>0){
    entry--;
    }else{
      entry=10;
    }
    console.log(entry);
    //document.getElementById("IMAGE").src=XMLHttpRequest(new(gallery.xml));
    document.getElementById("IMAGE").src =`images\\${entry}`;
    document.getElementById("desc").textContent="this is entry number: " + entry + "why it no wrap adf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfejadf sadf asfd ajfn na finn afinan fn ianf ouna wfbaef vabua hfej ahb";
   
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function refresh_entries(){
  for(var i=0; i<9;i++){
    console.log("entry"+i);
    document.getElementById("img"+ i).src=`images\\${i}`;
    document.getElementById("img"+i).width=25;
    document.getElementById("title" +i).textContent=i;
    document.getElementById("desc" +i).textContent=i;
  }
}
function loadData(){
//loads data for images. 
}