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