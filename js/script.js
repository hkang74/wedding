//menu toggle
function toggleMenu(){
    var menuList = document.getElementById("menuList");
    
    if(menuList.style.maxHeight == "400px")
    {    
        //document.write("Hello World!");
         menuList.style.maxHeight = "0px";
    }else
    {
         menuList.style.maxHeight = "400px";
    }
}


window.addEventListener("scroll", function() {showFunction()});

function showFunction() 
{
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("toptexts2").style.display = "block";
    } else {
        document.getElementById("toptexts2").style.display = "none";
    }
}