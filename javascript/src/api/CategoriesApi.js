/**
 * Warranty Life API
 * Warranty life Api
 *
 * OpenAPI spec version: 1.0.7
 * Contact: jeff.durand@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Category'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Category'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLifeApi) {
      root.WarrantyLifeApi = {};
    }
    root.WarrantyLifeApi.CategoriesApi = factory(root.WarrantyLifeApi.ApiClient, root.WarrantyLifeApi.Category);
  }
}(this, function(ApiClient, Category) {
  'use strict';

  /**
   * Categories service.
   * @module api/CategoriesApi
   * @version 1.0.7
   */

  /**
   * Constructs a new CategoriesApi. 
   * @alias module:api/CategoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the categoriesCategoryIdGet operation.
     * @callback module:api/CategoriesApi~categoriesCategoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Category} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} categoryId Id for the category you would like to retrieve
     * @param {module:api/CategoriesApi~categoriesCategoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Category}
     */
    this.categoriesCategoryIdGet = function(categoryId, callback) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoriesCategoryIdGet");
      }


      var pathParams = {
        'categoryId': categoryId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Category;

      return this.apiClient.callApi(
        '/categories/{categoryId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesGet operation.
     * @callback module:api/CategoriesApi~categoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Category>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of all categories
     * device categories
     * @param {module:api/CategoriesApi~categoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Category>}
     */
    this.categoriesGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Category];

      return this.apiClient.callApi(
        '/categories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
