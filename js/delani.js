$(document).ready(function(){
    $(".do").addClass('text-center');
    $(".bold").addClass('text-center');
    $(".pic1").click(function(){
        $(".img1").hide(1000);
        $(".par1").toggle(1000);
    });
    $(".par1").click(function(){
        $(".par1").hide(1000);
        $(".img1").toggle(1000);
    });
    $(".pic2").click(function(){
        $(".img2").hide(1000)
        $(".par2").toggle(1000)
        
    });
    $(".par2").click(function(){
        $(".par2").hide(1000)
        $(".img2").toggle(1000)
    });
    $(".pic3").click(function(){
        $(".img3").hide(1000)
        $(".par3").toggle(1000)
    });
    $(".par3").click(function(){
        $(".par3").hide(1000)
        $(".img3").toggle(1000)
    });
})
/*creation of the hover effect on portifoli*/
$("#col1")
    .mouseenter(function () {
        $(".hov1").show("slow");
    })
    .mouseleave(function () {
        $(".hov1").hide("slow");
    });
    $("#col2")
    .mouseenter(function () {
        $(".hov2").show("slow");
    })
    .mouseleave(function () {
        $(".hov2").hide("slow");
    });
    $("#col3")
    .mouseenter(function () {
        $(".hov3").show("slow");
    })
    .mouseleave(function () {
        $(".hov3").hide("slow");
    });
    $("#col4")
    .mouseenter(function () {
        $(".hov4").show("slow");
    })
    .mouseleave(function () {
        $(".hov4").hide("slow");
    });
    $("#col5")
    .mouseenter(function () {
        $(".hov5").show("slow");
    })
    .mouseleave(function () {
        $(".hov5").hide("slow");
    });
    $("#col6")
    .mouseenter(function () {
        $(".hov6").show("slow");
    })
    .mouseleave(function () {
        $(".hov6").hide("slow");
    });
    $("#col7")
    .mouseenter(function () {
        $(".hov7").show("slow");
    })
    .mouseleave(function () {
        $(".hov7").hide("slow");
    });
    $("#col8")
    .mouseenter(function () {
        $(".hov8").show("slow");
    })
    .mouseleave(function () {
        $(".hov8").hide("slow");
    });
/*submiting of the form with an alert*/
function submit(){
    var name =$("#fill").val();
    var email=$("#fill1").val();
    var message=$("#message").val();
    if (name === "" & email === "") {
		alert("Please fill in all fields!")
	} else {
		alert("Thank you " + name + "! Your message has been received. We shall get back to you shortly.");
        document.getElementById("yourAnswer");   
    };
};
