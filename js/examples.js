/**
 * Created by jamesbray on 10/22/16.
 */
$(document).ready(function(){
    $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
});