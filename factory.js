var app= angular.module("myMod");


app.factory("myFactory", function(){

  var myObj= {"libs"};

  return {
    sendInfo: function(libsData) {
      console.log(libsData);
      userInfo = libsData;
    },

    getInfo: function() {
      return userInfo;
    }
  }

  });
