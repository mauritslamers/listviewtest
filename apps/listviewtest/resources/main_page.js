// ==========================================================================
// Project:   Listviewtest - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Listviewtest */

// This page describes the main user interface for your application.
Listviewtest.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['scroll'],

    scroll: SC.ScrollView.design({
      layout: { top: 10, left: 10, height: 300, width: 200 },
      contentView: SC.ListView.design({
        contentBinding: 'Listviewtest.listController.arrangedObjects',
        contentValueKey: 'title'
      })
    })
  })

});
