$(document).ready(function(){
    $.getJSON( "success.json" , function(result){
        var rr1 = result["messages"][0];
      var state = rr1["status"];
      var returnString =[];
      if (state == "0") {
          
        $.each(rr1,function(key,value){
            returnString.push(value);
        });
        $("#para").text(returnString);
        return(returnString);
    }
      else 
      return(false);
      
})

});
