/**
 * Warranty Life
 * Warranty life api definition for openapi 3.0.0 from here we generate api's
 *
 * OpenAPI spec version: 1.0.5
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
    define(['ApiClient', 'model/InlineResponse403', 'model/Item', 'model/Warranty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse403'), require('../model/Item'), require('../model/Warranty'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLife) {
      root.WarrantyLife = {};
    }
    root.WarrantyLife.ItemsApi = factory(root.WarrantyLife.ApiClient, root.WarrantyLife.InlineResponse403, root.WarrantyLife.Item, root.WarrantyLife.Warranty);
  }
}(this, function(ApiClient, InlineResponse403, Item, Warranty) {
  'use strict';

  /**
   * Items service.
   * @module api/ItemsApi
   * @version 1.0.5
   */

  /**
   * Constructs a new ItemsApi. 
   * @alias module:api/ItemsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the itemsGet operation.
     * @callback module:api/ItemsApi~itemsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get an item
     * @param {Object} opts Optional parameters
     * @param {String} opts.refId previously specified refId for product
     * @param {String} opts.orderRefId order reference id
     * @param {module:api/ItemsApi~itemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.itemsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'refId': opts['refId'],
        'orderRefId': opts['orderRefId'],
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the itemsItemIdGet operation.
     * @callback module:api/ItemsApi~itemsItemIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get an item
     * @param {String} itemId Id for the product
     * @param {module:api/ItemsApi~itemsItemIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.itemsItemIdGet = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling itemsItemIdGet");
      }


      var pathParams = {
        'itemId': itemId
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/items/{itemId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the itemsItemIdWarrantiesPost operation.
     * @callback module:api/ItemsApi~itemsItemIdWarrantiesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Warranty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create warranty
     * @param {String} itemId Id for the product
     * @param {module:model/Warranty} warranty 
     * @param {module:api/ItemsApi~itemsItemIdWarrantiesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Warranty}
     */
    this.itemsItemIdWarrantiesPost = function(itemId, warranty, callback) {
      var postBody = warranty;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling itemsItemIdWarrantiesPost");
      }

      // verify the required parameter 'warranty' is set
      if (warranty === undefined || warranty === null) {
        throw new Error("Missing the required parameter 'warranty' when calling itemsItemIdWarrantiesPost");
      }


      var pathParams = {
        'itemId': itemId
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Warranty;

      return this.apiClient.callApi(
        '/items/{itemId}/warranties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the itemsPost operation.
     * @callback module:api/ItemsApi~itemsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create new item
     * @param {module:model/Item} item 
     * @param {module:api/ItemsApi~itemsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.itemsPost = function(item, callback) {
      var postBody = item;

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling itemsPost");
      }


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
