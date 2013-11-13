# Bower packages
#= require jquery
#= require fancybox/source/jquery.fancybox
#
# Unregistered components
#= require vendor/srcset.min
# require vendor/handlebars
# require vendor/handlebars.runtime
#
# Templates
# require_tree ./templates
#
# App
#= require_tree ./ui
# require_tree ./models
# require_tree ./views


# $ ->
#   new PanelView('.panels ul')

$('.panel a').attr('rel', 'popup-gallery').fancybox
  arrows: 'yes'
  height: '645px'
  width: '750px'
  padding: 0
  maxWidth: 750
  maxHeight: 650
  scrolling: 'no'

  # wrapCSS: 'popup'

