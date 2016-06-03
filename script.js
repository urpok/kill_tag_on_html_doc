$(document).ready(function(){

    $('button').on('click',function(){
        var inputText = $('#inputArea').val();
        var regexp = /<.*?>/gi;
        $('#output').val(inputText.replace(regexp,''));
    });


    $('#inputArea').change(function(){
        var inputText = $('#inputArea').val();
        var regexp = /<.*?>/gi;
        $('#output').val(inputText.replace(regexp,''));
    });
});
