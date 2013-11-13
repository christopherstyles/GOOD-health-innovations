class Tabs
  constructor: ->
    $(document).on 'click', '.tab', (e) -> onclick(e)

  onclick = (e) ->
    e.preventDefault()

    el = $(e.target)
    target = el.attr('href')

    # Show selected content
    $(target).addClass('active').siblings('.tab-content').removeClass('active')

    # Make this tab active
    $('.tab a').removeClass('active')
    console.log el
    el.addClass('active')

$ ->
  new Tabs()
