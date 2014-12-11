
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
        { image: 'assets/images/news.jpg'},    
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
        cubaItems: [
        { image: 'assets/images/cuba/cuba1.jpg'},
        { image: 'assets/images/cuba/cuba2.jpg'},
        { image: 'assets/images/cuba/cuba3.jpg'},      
        { image: 'assets/images/cuba/cuba4.jpg'},
        { image: 'assets/images/cuba/cuba5.jpg'},
        { image: 'assets/images/cuba/cuba6.jpg'},
        { image: 'assets/images/cuba/cuba7.jpg'},
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
        content: '<h1>Russia</h1>',
        russiaItems: [
        { image: 'assets/images/propaganda/prop1.jpg'},
        { image: 'assets/images/propaganda/prop2.jpg'},    
        { image: 'assets/images/propaganda/prop3.jpg'},        
        { image: 'assets/images/propaganda/prop4.jpg'},
        { image: 'assets/images/propaganda/prop5.jpg'},    
        { image: 'assets/images/propaganda/prop6.jpg'},   
        { image: 'assets/images/propaganda/prop7.jpg'},
        { image: 'assets/images/propaganda/prop8.jpg'},    
        { image: 'assets/images/propaganda/prop9.jpg'},        
        { image: 'assets/images/propaganda/prop10.jpg'},
        { image: 'assets/images/propaganda/prop11.jpg'},    
        { image: 'assets/images/propaganda/prop12.jpg'},  
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
        content: '<h1>Vietnam</h1>',
        vietnamItems: [
        { image: 'assets/images/vietnam/nam1.jpg'},
        { image: 'assets/images/vietnam/nam2.jpg'},
        { image: 'assets/images/vietnam/nam3.jpg'},
        { image: 'assets/images/vietnam/nam4.jpg'},
        { image: 'assets/images/vietnam/nam5.jpg'},
        { image: 'assets/images/vietnam/nam6.jpg'},
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
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

 
    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Contact</h1>'


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