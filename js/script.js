document.getElementById("join").addEventListener("click",function(){
    let JoinCode = prompt("Please Enter Teacher Code");
    if(JoinCode.value != null){
         alert("Please Waiting");
         console.log("please waiting");
    }
    else{
        alert("Please Enter You Teacher Code");
        console.log("Please Enter You Teacher Code");
        JoinCode = prompt("Try Again");
        if(JoinCode.value != null){
            alert("Please Waiting");
            console.log("please waiting");
       }
       else{
           alert("Please Enter You Teacher Code");
           console.log("Please Enter You Teacher Code");
           JoinCode = prompt("Try Again")
       }
    }
})

document.getElementById("facebook").addEventListener("click",function(){
  let allow = confirm("Do you Want To Go to The Facebook ");
 if(allow == true){
    document.location.href = "https://facebook.com";

 }

})
document.getElementById("twitter").addEventListener("click",function(){
    let allowtwitter = confirm("Do you Want To Go to The Twitter ");
    if(allowtwitter == true){
       document.location.href = "https://twitter.com";
   
    }
  })
  document.getElementById("linkedin").addEventListener("click",function(){
    let allowIn = confirm("Do you Want To Go to The Linkedin ");
    if(allowIn == true){
       document.location.href = "https://linkedin.com";
   
    }

  })
  document.getElementById("youtube").addEventListener("click",function(){
    let allowYou = confirm("Do you Want To Go to The Youtube ");
    if(allowYou == true){
       document.location.href = "https://youtube.com";
   
    }
  })
  document.getElementById("google").addEventListener("click",function(){
    let allowGoogle = confirm("Do you Want To Go to The Google ");
    if(allowGoogle == true){
       document.location.href = "https://google.com";
   
    }
  })


