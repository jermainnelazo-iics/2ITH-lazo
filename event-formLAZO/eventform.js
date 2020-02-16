function validate() {

    var l = document.getElementById("Type");
    var list = l.options[l.selectedIndex].text;
    if(document.myForm.Type.value =="choose"){
        alert("Please select Event Type");
        document.myForm.Type.focus() ;
        return false;
    }

    if( document.myForm.title.value == "" ) {
        alert( "Please fill in the Event Title");
        document.myForm.title.focus() ;
        return false;
     }
     if( document.myForm.date1.value == "" ) {
        alert( "Please fill in the Event Dates");
        document.myForm.date1.focus() ;
        return false;
     }
     if( document.myForm.date2.value == "" ) {
        alert( "Please fill in the Event Dates");
        document.myForm.date2.focus() ;
        return false;
     }
     if( document.myForm.postdate.value == "" ) {
        alert( "Please fill in the Posting Date");
        document.myForm.postdate.focus() ;
        return false;
     }
     
     return( true );
  }