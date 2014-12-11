// ==========================================================================
// Project:   Listviewtest
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Listviewtest */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
//
Listviewtest.listController = SC.ArrayController.create({
  content: [
    SC.Object.create({
      title: "test1"
    }),
    SC.Object.create({
      title: "test2"
    }),
    SC.Object.create({
      title: "test3"
    }),
    SC.Object.create({
      title: "test4"
    })
  ]
});

Listviewtest.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably
  // create multiple pages and panes.


  Listviewtest.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!
  //
  // ex.
  // var content = Listviewtest.store.find(Listviewtest.Group);
  // Listviewtest.groupsController.set('content', content);

};


function main() { Listviewtest.main(); }
