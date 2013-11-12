#= require models/panel
#= require models/panel_data

class @PanelView
  constructor: (el) ->
    @el = $(el)
    @bindEvents()
    new PanelData().get()

  bindEvents: ->
    $(window).on 'PanelData:success', (data) => @addPanelData(data)

  addPanelData: (data) =>
    for panel in data.panels
      panel_html = new Panel(panel).get()
      console.log "panel_html: "
      console.log panel_html
      @el.append panel_html
