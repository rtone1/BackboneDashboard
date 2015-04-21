$(document).ready(function(event) {

  var logoView = Backbone.View.extend({

    className: "brand",
    template: _.template("<h1><%= logo %></h1><hr><br>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
        var log = $('header');
        $(log).append(this.$el);
        $(this.$el).css('color','grey');
    }
  });

  var data = {logo: "Rodrigo Torres"}
  var name = new logoView(data)

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
        var row = $('.row')[1];
        $(row).append(this.$el);
        $(this.$el).css('background-color','lightgreen');
    }
  });


  var quaterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
        var row = $('.row')[2];
      $(row).append(this.$el);
      $(this.$el).css('background-color','lightblue');
    }
  });

  var videoCardView = Backbone.View.extend({

    tagName: "div",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
        var row = $('.row')[3];
        $(row).append(this.$el);
    }
  });

//half view
var data = {title: "Check Your email", message: "yahoo"};
var info = new halfCardView(data);
var data = {title: "Check list for school", message: "*computer *ME"};
var info = new halfCardView(data);

//quarter view
var datatwo = {title: "fitness level", message: "100%"};
var info = new quaterCardView(datatwo);
var datatwo = {title: "account", message: "25,000,000"};
var info = new quaterCardView(datatwo);
var datatwo = {title: "Weather", message: "crapy"};
var info = new quaterCardView(datatwo);
var datatwo = {title: "Temp", message: "25"};
var info = new quaterCardView(datatwo);

//video view
var datavideo = {title: "Startwars", content: '<iframe width="500" height="315" src="https://www.youtube.com/embed/wCc2v7izk8w" frameborder="0" allowfullscreen></iframe>'};
var info = new videoCardView(datavideo);
var datavideo = {title: "Batman v Superman", content: '<iframe width="500" height="315" src="https://www.youtube.com/embed/IwfUnkBfdZ4" frameborder="0" allowfullscreen></iframe>'};
var info = new videoCardView(datavideo);
});
