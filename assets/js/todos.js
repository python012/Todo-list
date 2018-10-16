$(" li").click(function(){
    // alert("message?: DOMString")

    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");

/* v1
    $(this).css({
        color: "gray",
        textDecoration: 'line-through' // not text-decroation like real CSS
    });
*/

/* v2
    if($(this).css("color") == "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });

    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through" // not text-decroation like real CSS
        });
    }

*/

    $(this).toggleClass("completed");
});
