
$('ul').on('click', 'li', function(){
    $(this).toggleClass('done')
});

$('ul').on('click', 'span', function(e){
    $(this).parent().slideUp(500, function(){
        $(this).remove();
    });
    
    e.stopPropagation();
});

$('input[type = "text"]').on('keypress', function(e){
    if(e.which === 13){
        let list = $(this).val();
        
        $('ul').append(`<li><span><i class="fas fa-trash"></i></span> ${list}</li>`);

        $(this).val('');
    }
})

$('.fa-edit').on('click', function(){
    $('input[type = "text"]').slideToggle()
});

function trash() {
    var entryHeight = $(".entry").first().css("height");
    $(".fa-trash").first().css("lineHeight", entryHeight);
};