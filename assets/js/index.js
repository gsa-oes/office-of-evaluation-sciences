(function (document, window, $) {
  $(document).ready(function(){
    ajaxifyContactForm();
  });

  function ajaxifyContactForm () {
    var contactForm = $('#contact'),
        originalUrl = contactForm.attr('action');
        contactBtn  = $('.contact [type=submit]'),
        alert       = $('#contact-alert');

    contactBtn.on('click', function (e) {
      e.preventDefault();
      var url = [originalUrl, contactForm.serialize()].join('?'),
          img = $('<img></img');

      img.on('error', function (e) {
        console.log('known error', e);
      });

      contactBtn.val('Thank you');
      contactBtn.attr('disabled', true);
      img.attr('src', url);

    });
  }
})(document, window, $);

(function(){
  if (window.location.href.indexOf('team') > 0) {
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
  }
})()