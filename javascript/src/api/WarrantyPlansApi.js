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
    define(['ApiClient', 'model/WarrantyPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WarrantyPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLifeApi) {
      root.WarrantyLifeApi = {};
    }
    root.WarrantyLifeApi.WarrantyPlansApi = factory(root.WarrantyLifeApi.ApiClient, root.WarrantyLifeApi.WarrantyPlan);
  }
}(this, function(ApiClient, WarrantyPlan) {
  'use strict';

  /**
   * WarrantyPlans service.
   * @module api/WarrantyPlansApi
   * @version 1.0.9
   */

  /**
   * Constructs a new WarrantyPlansApi. 
   * @alias module:api/WarrantyPlansApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the warrantyPlansGet operation.
     * @callback module:api/WarrantyPlansApi~warrantyPlansGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WarrantyPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.categoryId Id for the category you would like to retrieve
     * @param {module:api/WarrantyPlansApi~warrantyPlansGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WarrantyPlan>}
     */
    this.warrantyPlansGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'categoryId': opts['categoryId'],
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
      var returnType = [WarrantyPlan];

      return this.apiClient.callApi(
        '/warranty-plans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the warrantyPlansWarrantyPlanIdGet operation.
     * @callback module:api/WarrantyPlansApi~warrantyPlansWarrantyPlanIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WarrantyPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} warrantyPlanId Id for the warranty-plan you want to retrieve
     * @param {module:api/WarrantyPlansApi~warrantyPlansWarrantyPlanIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WarrantyPlan>}
     */
    this.warrantyPlansWarrantyPlanIdGet = function(warrantyPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'warrantyPlanId' is set
      if (warrantyPlanId === undefined || warrantyPlanId === null) {
        throw new Error("Missing the required parameter 'warrantyPlanId' when calling warrantyPlansWarrantyPlanIdGet");
      }


      var pathParams = {
        'warrantyPlanId': warrantyPlanId
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
      var returnType = [WarrantyPlan];

      return this.apiClient.callApi(
        '/warranty-plans/{warrantyPlanId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
