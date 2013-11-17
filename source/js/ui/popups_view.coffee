class PopupsView
  constructor: ->
    @collection = $('.panel a')
    @setup()

  configuration: ->
    arrows: 'yes'
    autoHeight: false
    autoWidth: false
    autoSize: false
    autoResize: false
    minHeight: 650
    minWidth: 750
    height: 650
    width: 750
    padding: 0
    margin: [55, 20, 20, 20]
    scrolling: 'no'
    beforeShow: ->
      $('section.panels .overlay').addClass 'active'
    beforeClose: ->
      $('section.panels .overlay').removeClass 'active'

  setup: ->
    @collection.attr('rel', 'popup-gallery').fancybox @configuration()

$ ->
  new PopupsView()
