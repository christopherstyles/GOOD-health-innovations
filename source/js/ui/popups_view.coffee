class PopupsView
  constructor: ->
    @collection = $('.panel a')
    @setup()

  configuration: ->
    arrows: 'yes'
    autoSize: false
    height: '645px'
    width: '750px'
    padding: 0
    maxWidth: 750
    maxHeight: 650
    scrolling: 'no'
    beforeShow: ->
      $('section.panels .overlay').addClass 'active'
    beforeClose: ->
      $('section.panels .overlay').removeClass 'active'
    # helpers:
    #   overlay:
    #     css:
    #       'background': 'rgba(201, 235, 254, 0.6)'

  setup: ->
    console.log 'doin it'
    @collection.attr('rel', 'popup-gallery').fancybox @configuration()

$ ->
  new PopupsView()
