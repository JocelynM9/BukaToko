$(function(){
    let search = window.location.search;
    let param = new URLSearchParams(search);

    if(param.has('email')){
        $('#email').val(param.get('email'))
    }
})