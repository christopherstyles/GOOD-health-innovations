GOOD: Controversial Health Innovations
===

An interactive panel of controversial health innovations that people are still talking about today.

---

Installation
---

### Install a Ruby Manager

You have two choices here, *rbenv* or *rvm*. We suggest using rvm.

#### RVM Installation Instructions:

Install RVM:

	\curl -L https://get.rvm.io | bash -s stable

Close out your current shell or terminal session and open a new one (preferred). You may load RVM with the following command:

	source ~/.rvm/scripts/rvm
  
If installation and configuration were successful, RVM should now load whenever you open a new shell. This can be tested by executing the following command which should output 'rvm is a function' as shown below.

	type rvm | head -n 1
	# => rvm is a function

List the ruby versions known to RVM:
  
	rvm list known
  
Install a version of Ruby (eg 2.0.0):

	rvm install 2.0.0
	# => Installing Ruby from source to:…


For additional information, check the [docs](https://rvm.io/rvm/install#explained)

### Bundle Up

Bundler installs all of the gem (plugin) dependencies that the application uses:

    gem install bundler
    bundle install
  
### Middleman

Middleman is a static site generator using all the shortcuts and tools in modern web development. This was installed alongside your other gems when you ran `bundle install`. Run the middleman server with the following:

    bundle exec middleman server

When it comes time to build the static site:

    bundle exec middleman build
  
## Reference

Your text editor should pick up configuration from the `.editorconfig` file. See [http://editorconfig.org/](http://editorconfig.org/) for more info.

### Slim
We're using Slim for markup abstraction: [http://slim-lang.com/](http://slim-lang.com/)

### Bower

We're using Bower for frontend package management: [https://github.com/bower/bower](https://github.com/bower/bower). Follow the instructions for installing bower there.
    
    # Install frontend dependencies
    bower install
 
### Please follow these CSS Guidelines
[https://github.com/styleguide/css](https://github.com/styleguide/css)

### …and these Javascript Guidelines
[https://github.com/styleguide/javascript](https://github.com/styleguide/javascript)
