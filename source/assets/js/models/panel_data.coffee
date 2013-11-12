class @PanelData
  url : '/data/panels.json'

  get: ->
    $.getJSON(@url).then (data) ->
      $(window).trigger
        type: 'PanelData:success'
        panels: data.panels
