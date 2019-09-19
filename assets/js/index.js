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

    function loadTeamMember(teamMember){
      var teamMemberURL = teamMember.href;
      var $shell = createShell();

      $.get(teamMemberURL, function(data){
        var page = $('#main', data)[0];
        $shell.html(page);
        $shell.show();
        $('#modalOverlay').show();
      });
    };

    function createShell(){
      var teamMemberCtr = document.createElement('div');
      var modalOverlay = addOverlay();
      var btnClose = document.createElement('button');
      btnClose.innerText = 'x';
      $(btnClose).css({
        "position": "absolute",
        "top": "10px",
        "right": "10px"
      });
      teamMemberCtr.appendChild(btnClose);
      btnClose.addEventListener('click', dismissModal);
      teamMemberCtr.setAttribute('id', 'team-member');

      $(teamMemberCtr).css({
        "background-color": "#fff",
        "width": "70%",
        "max-height": "calc(100% - 100px)",
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "opacity": "1",
        "transform": "translate(-50%, -50%)",
        "border-radius": "1em"
      });
      document.body.appendChild(modalOverlay);
      document.body.appendChild(teamMemberCtr);

      return $(teamMemberCtr);
    }

    function addOverlay(){
      var overlayCtr = document.createElement('div');

      overlayCtr.setAttribute('id','modalOverlay');
      overlayCtr.style.height = '100%';
      overlayCtr.style.width = '100%';
      overlayCtr.style.position = 'fixed';
      overlayCtr.style.display = 'none';
      overlayCtr.style.backgroundColor = '#111';
      overlayCtr.style.opacity = '.6';
      overlayCtr.style.top = '0';
      overlayCtr.style.left = '0';

      $(window).keyup(function(e){ if (e.code === 'Escape') dismissModal(); })
      $(overlayCtr).click(dismissModal);
      return overlayCtr;
    }

    function dismissModal(){
      $('#modalOverlay, #team-member').hide();
    }
  }
})()