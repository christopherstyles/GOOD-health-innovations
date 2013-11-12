require 'ruby-progressbar'

namespace :handlebars do
  # Precompile a set of Handlebar templates
  # See: http://handlebarsjs.com/precompilation.html
  #
  # First, you will need to install node and npm. On OSX:
  #
  #   $ brew install node
  #   $ curl https://npmjs.org/install.sh | sh
  #
  # Next, install the Handlebars npm package.
  #
  #   $ npm install handlebars -g
  #
  # You can also apply several optimization to the compiler
  #
  #   $ handlebars <input> -f <output> -k each -k if -k unless
  #
  # The Handlebars compiler will optimize accesses to those helpers.
  #
  desc 'Precompile Handlebar templates'
  task :precompile do
    input_dir = 'source/assets/js/templates'
    output_dir = 'source/assets/js/templates'
    templates = %w(panel panel_popup)

    # Progress Bar
    progressbar = ProgressBar.create(title: "Precompile", total: templates.size, format: '%a %p%% (%c/%C) <%B> %p%% %t')

    puts "Precompiling Handlebar templates to #{output_dir}"

    templates.each do |template|
      `handlebars #{input_dir}/#{template}.handlebars -m -f #{output_dir}/#{template}.js -k if -k compare`
      progressbar.increment
    end

    puts "Finished."
  end
end
