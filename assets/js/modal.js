(function(){
    var teamLinks = Array.from(document.getElementsByClassName('link__team-member'));
    var originalFocusedEl;

    teamLinks.map(function(link) {
        link.addEventListener('click', function(e){
        e.preventDefault();
        originalFocusedEl = e.target;
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
        $shell.show().focus();
        $('#modal-overlay').show();
        });
    };

    function dismissModal(){
        $('#modal-overlay').hide();
        $('#modal-inner').hide();
        originalFocusedEl.focus();
    }
})()