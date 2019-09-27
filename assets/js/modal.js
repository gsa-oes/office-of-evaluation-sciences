(function(){
    var teamLinks = Array.from(document.getElementsByClassName('link__team-member'));

    teamLinks.map(function(link) {
        link.addEventListener('click', function(e){
        e.preventDefault();
        loadTeamMember(e.target);
        });
    });

    window.addEventListener('keyup', function(e){
        if (e.code === 'Escape') dismissModal();
    });

    document.getElementById('modal-overlay').addEventListener('click', dismissModal);
    document.getElementById('close-modal').addEventListener('click', dismissModal);

    function loadTeamMember(teamMember){
        var teamMemberURL = teamMember.href;
        var $shell = $('#modal-inner');

        $.get(teamMemberURL, function(data){
        var page = $('#main', data)[0];
        $('#bio', $shell).html(page);
        $shell.show();
        $('#modal-overlay').show();
        });
    };

    function dismissModal(){
        $('#modal-overlay').hide();
        $('#modal-inner').hide();
    }
})()