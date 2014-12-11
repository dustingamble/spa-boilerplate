
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'about': 'about',
      'services': 'services',
      'more': 'more',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

     // Services Route
    services: function() {
      console.log('Navigating to Services Page');
      App.views['services'].render();
    },

     // More Route
    more: function() {
      console.log('Navigating to More Page');
      App.views['more'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      about: new AboutView(),
      services: new ServicesView(),
      more: new MoreView(),
      contact: new ContactView(),
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    //--------- Bind functionality to html -----------//
    events: {
      'click .button': 'sendEmail'
    },

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // ------  Some page data -------- ///
      this.model.set({
        content: '<h1>News</h1>',
        newsItems: [
        { image: 'assets/images/news.jpg'},
        { image: 'assets/images/newsdfv.jpg'},    
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
    
        ]
      });

    },


    // function to send email
    sendEmail: function(e) {
      e.preventDefault();
      alert('making things work..ignore me.');
    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Cuba</h1>',
        russiaItems: [
        { image: 'assets/images/propaganda/prop1.jpg'},
        { image: 'assets/images/propaganda/prop2.jpg'},    
        { image: 'assets/images/propaganda/prop3.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
        { image: 'assets/images/news.jpg'},        
    
        ]
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });
   // -----------------------------
  // Services View
  // -----------------------------

  var ServicesView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#services',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Russian</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

   // -----------------------------
  // More View
  // -----------------------------

  var MoreView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#more',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Vietnam</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

     //--------- Bind functionality to html -----------//
    events: {
      'click .button': 'sendEmail'
    },

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Contact</h1><a href="#" class="button">send email</a>'


      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    e.preventDefault();
    App.router.navigate($(this).attr('href'), { trigger: true });

  });


});