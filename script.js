// JavaScript File
// JavaScript File
/*global $*/
$( document ).ready(function() {
    
$("#5sos").click(function(){
    $("#5sosList").append("<img src ='http://digitalspyuk.cdnds.net/16/22/980x490/landscape-1464947896-rsz-5sos-girls-talk-boys-tom-van-schelven-1.jpg'>")
});

$("#heyv").click(function(){
    $("#heyvList").append("<img src ='http://www.altpress.com/bucket/apsite/misc/INTHERAG/344/343_content_HEY_VIOLET_LINDSEY_BYRNES.jpg'>")
});
$("#littlem").click(function(){
    $("#littlemList").append("<img src ='https://yt3.ggpht.com/-ObKypstN7rU/AAAAAAAAAAI/AAAAAAAAAAA/VUUwfxPK2xU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'>")
});
$("#selgo").click(function(){
    $("#selgoList").append("<img src ='http://akns-images.eonline.com/eol_images/Entire_Site/201658/rs_600x600-160608114141-600-selena-gomez-hair-bangs.ls.6816.jpg'>")
});

$("#yayButton").click(function(){
    for(var i=0;i<5;i++){
        $("#yay").append("<img src='https://media.giphy.com/media/rG39BMg5OpxjG/giphy.gif'>")
    }
});
});