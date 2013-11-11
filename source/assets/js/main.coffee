# Bower packages
#= require jquery
#= require vex/js/vex
#
# Unregistered components
#
# App
#

vex.defaultOptions.className = 'vex-theme-plain'

$('.panel a').on 'click', (e) ->
  e.preventDefault()
  vex.open
    content: '<div class="modal"><div class="title">Pasteurization</div></div>'
