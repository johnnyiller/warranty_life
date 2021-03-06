/**
 * Warranty Life API
 * Warranty life Api
 *
 * OpenAPI spec version: 1.0.9
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
    define(['ApiClient', 'model/InlineResponse403', 'model/Warranty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse403'), require('../model/Warranty'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLifeApi) {
      root.WarrantyLifeApi = {};
    }
    root.WarrantyLifeApi.WarrantiesApi = factory(root.WarrantyLifeApi.ApiClient, root.WarrantyLifeApi.InlineResponse403, root.WarrantyLifeApi.Warranty);
  }
}(this, function(ApiClient, InlineResponse403, Warranty) {
  'use strict';

  /**
   * Warranties service.
   * @module api/WarrantiesApi
   * @version 1.0.9
   */

  /**
   * Constructs a new WarrantiesApi. 
   * @alias module:api/WarrantiesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the itemsItemIdWarrantiesPost operation.
     * @callback module:api/WarrantiesApi~itemsItemIdWarrantiesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Warranty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create warranty
     * @param {String} itemId Id for the product
     * @param {module:model/Warranty} warranty 
     * @param {module:api/WarrantiesApi~itemsItemIdWarrantiesPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the warrantiesGet operation.
     * @callback module:api/WarrantiesApi~warrantiesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Warranty>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get warranty by query params
     * @param {Object} opts Optional parameters
     * @param {String} opts.refId previously specified refId for product
     * @param {String} opts.orderRefId order reference id
     * @param {module:api/WarrantiesApi~warrantiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Warranty>}
     */
    this.warrantiesGet = function(opts, callback) {
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
      var returnType = [Warranty];

      return this.apiClient.callApi(
        '/warranties', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the warrantiesPost operation.
     * @callback module:api/WarrantiesApi~warrantiesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Warranty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create warranty
     * @param {module:model/Warranty} warranty 
     * @param {module:api/WarrantiesApi~warrantiesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Warranty}
     */
    this.warrantiesPost = function(warranty, callback) {
      var postBody = warranty;

      // verify the required parameter 'warranty' is set
      if (warranty === undefined || warranty === null) {
        throw new Error("Missing the required parameter 'warranty' when calling warrantiesPost");
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
      var returnType = Warranty;

      return this.apiClient.callApi(
        '/warranties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the warrantiesWarrantyIdDelete operation.
     * @callback module:api/WarrantiesApi~warrantiesWarrantyIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete an item
     * @param {String} warrantyId previously specified warrantyId for warranty
     * @param {module:api/WarrantiesApi~warrantiesWarrantyIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.warrantiesWarrantyIdDelete = function(warrantyId, callback) {
      var postBody = null;

      // verify the required parameter 'warrantyId' is set
      if (warrantyId === undefined || warrantyId === null) {
        throw new Error("Missing the required parameter 'warrantyId' when calling warrantiesWarrantyIdDelete");
      }


      var pathParams = {
        'warrantyId': warrantyId
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/warranties/{warrantyId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the warrantiesWarrantyIdGet operation.
     * @callback module:api/WarrantiesApi~warrantiesWarrantyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Warranty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get an item
     * @param {String} warrantyId previously specified warrantyId for warranty
     * @param {module:api/WarrantiesApi~warrantiesWarrantyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Warranty}
     */
    this.warrantiesWarrantyIdGet = function(warrantyId, callback) {
      var postBody = null;

      // verify the required parameter 'warrantyId' is set
      if (warrantyId === undefined || warrantyId === null) {
        throw new Error("Missing the required parameter 'warrantyId' when calling warrantiesWarrantyIdGet");
      }


      var pathParams = {
        'warrantyId': warrantyId
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
      var returnType = Warranty;

      return this.apiClient.callApi(
        '/warranties/{warrantyId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
