vex.defaultOptions.className = 'vex-theme-plain'

$('.panel a').on 'click', (e) ->
  e.preventDefault()
  vex.open
    content: '<div class="modal"><div class="title">Pasteurization</div></div>'
