//reveal rows / socail toggle
var row = $('.expand');

row.on('click', revealContent)

function revealContent() {
    $(this).toggleClass('row-expand');
    $('.row-content').toggleClass('content-reveal');
}