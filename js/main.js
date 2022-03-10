$('#game').ready(function(){
    const p4 = new P4('#game');

    $('#restart').on('click', function(){
        $('#game').empty();
        p4.drawGame();
        $('#restart').css('visibility', 'hidden');
    })
});