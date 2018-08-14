/**
 * Warranty Life
 * Warranty life api definition for openapi 3.0.0 from here we generate api's
 *
 * OpenAPI spec version: 1.0.3
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
    define(['ApiClient', 'model/Body', 'model/InlineResponse403', 'model/VoucherBatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/InlineResponse403'), require('../model/VoucherBatch'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLife) {
      root.WarrantyLife = {};
    }
    root.WarrantyLife.VoucherBatchApi = factory(root.WarrantyLife.ApiClient, root.WarrantyLife.Body, root.WarrantyLife.InlineResponse403, root.WarrantyLife.VoucherBatch);
  }
}(this, function(ApiClient, Body, InlineResponse403, VoucherBatch) {
  'use strict';

  /**
   * VoucherBatch service.
   * @module api/VoucherBatchApi
   * @version 1.0.3
   */

  /**
   * Constructs a new VoucherBatchApi. 
   * @alias module:api/VoucherBatchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the voucherBatchPost operation.
     * @callback module:api/VoucherBatchApi~voucherBatchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VoucherBatch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a bunch of vouchers for warranties
     * @param {module:model/VoucherBatch} voucherBatch 
     * @param {module:api/VoucherBatchApi~voucherBatchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VoucherBatch}
     */
    this.voucherBatchPost = function(voucherBatch, callback) {
      var postBody = voucherBatch;

      // verify the required parameter 'voucherBatch' is set
      if (voucherBatch === undefined || voucherBatch === null) {
        throw new Error("Missing the required parameter 'voucherBatch' when calling voucherBatchPost");
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
      var returnType = VoucherBatch;

      return this.apiClient.callApi(
        '/voucher-batch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the voucherVoucherCodePut operation.
     * @callback module:api/VoucherBatchApi~voucherVoucherCodePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse403} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * issue a warranty from the batch
     * @param {String} voucherCode previously specified voucherCode for warranty
     * @param {module:model/Body} body 
     * @param {module:api/VoucherBatchApi~voucherVoucherCodePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse403}
     */
    this.voucherVoucherCodePut = function(voucherCode, body, callback) {
      var postBody = body;

      // verify the required parameter 'voucherCode' is set
      if (voucherCode === undefined || voucherCode === null) {
        throw new Error("Missing the required parameter 'voucherCode' when calling voucherVoucherCodePut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling voucherVoucherCodePut");
      }


      var pathParams = {
        'voucherCode': voucherCode
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
      var returnType = InlineResponse403;

      return this.apiClient.callApi(
        '/voucher/{voucherCode}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));