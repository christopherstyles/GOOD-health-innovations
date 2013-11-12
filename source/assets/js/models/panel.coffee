class @Panel
  constructor: (data) ->
    @data = data

  get: ->
    ###
    Compile handlebars template, and render to the info box
    ###
    template = Handlebars.templates['panel']
    html = template(@data)
    html
