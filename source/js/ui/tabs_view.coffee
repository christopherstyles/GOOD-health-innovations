class TabsView
  constructor: ->
    $(document).on 'click', '.tab a', (e) -> onclick(e)

  onclick = (e) ->
    e.preventDefault()

    el = $(e.target)
    target = el.attr('href')

    # Show selected content
    $(target).addClass('active').siblings('.tab-content').removeClass('active')

    # Make this tab active
    el.addClass('active').parents('.tab').siblings().find('a').removeClass('active')

$ ->
  new TabsView()
