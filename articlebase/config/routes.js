/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // Route to render the homepage view
  "/": { view: "pages/homepage" },

  // Route to list all articles
  "/articles/list": "ArticlesController.list",

  // Route to render the add article view
  "/articles/add": "ArticlesController.add",

  // Route to handle creation of a new article
  "/articles/create": "ArticlesController.create",

  // Route to handle deletion of an article by ID
  "/articles/delete/:id": "ArticlesController.delete",

  // Route to render the edit article view by ID
  "/articles/edit/:id": "ArticlesController.edit",

  // Route to handle updating an article by ID
  "/articles/update/:id": "ArticlesController.update",
};
