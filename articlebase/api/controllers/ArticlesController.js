/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Articles = require("../models/Articles");

module.exports = {
    // Controller action to list all articles
    list: async function (req, res) {
      try {
        // Fetch articles from MongoDB
        const articles = await Articles.find();
        // Pass articles data to the view
        res.view("pages/list", { articles });
      } catch (error) {
        // If an error occurs, handle it appropriately
        console.error("Error fetching articles:", error);
        res.serverError("Error fetching articles");
      }
    },
    // Controller action to render add article page
    add: function (req, res) {
      res.view("pages/add");
    },
    // Controller action to create a new article
    create: async function (req, res) {
      try {
        var title = req.body.title;
        var body = req.body.body;
  
        // Create a new article in MongoDB
        await Articles.create({
          title: title,
          body: body,
        });
        // Redirect to the list of articles after creation
        res.redirect("/articles/list");
      } catch (error) {
        // If an error occurs, handle it appropriately
        console.error("Error Creating Article:", error);
        return res.serverError("Error Creating Article");
      }
    },
    // Controller action to delete an article
    delete: async function (req, res) {
      try {
        const id = req.params.id;
        // Delete the article from MongoDB
        await Articles.destroy(id);
        // Redirect to the list of articles after deletion
        res.redirect("/articles/list");
      } catch (error) {
        // If an error occurs, handle it appropriately
        console.error("Error Deleting Article:", error);
        return res.serverError("Error Deleting Article");
      }
    },
    // Controller action to render edit article page
    edit: async function (req, res) {
      try {
        const id = req.params.id;
        // Find the article by ID in MongoDB
        const article = await Articles.findOne(id);
        // Pass the article data to the view
        res.locals.article = article;
        res.view("pages/edit");
      } catch (error) {
        // If an error occurs, handle it appropriately
        console.error("Error Editing Article:", error);
        return res.serverError("Error Editing Article");
      }
    },
    // Controller action to update an article
    update: async function (req, res) {
      try {
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
        // Update the article in MongoDB
        await Articles.update(id).set({
          title: title,
          body: body,
        });
        // Redirect to the list of articles after updating
        res.redirect("/articles/list");
      } catch (error) {
        // If an error occurs, handle it appropriately
        console.error("Error Updating Article:", error);
        return res.serverError("Error Updating Article");
      }
    },
  };
  
