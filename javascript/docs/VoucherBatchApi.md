# WarrantyLifeApi.VoucherBatchApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**voucherBatchPost**](VoucherBatchApi.md#voucherBatchPost) | **POST** /voucher-batch | create a bunch of vouchers for warranties
[**voucherVoucherCodePut**](VoucherBatchApi.md#voucherVoucherCodePut) | **PUT** /voucher/{voucherCode} | issue a warranty from the batch


<a name="voucherBatchPost"></a>
# **voucherBatchPost**
> VoucherBatch voucherBatchPost(voucherBatch)

create a bunch of vouchers for warranties

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.VoucherBatchApi();
var voucherBatch = new WarrantyLifeApi.VoucherBatch(); // VoucherBatch | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voucherBatchPost(voucherBatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherBatch** | [**VoucherBatch**](VoucherBatch.md)|  | 

### Return type

[**VoucherBatch**](VoucherBatch.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="voucherVoucherCodePut"></a>
# **voucherVoucherCodePut**
> InlineResponse403 voucherVoucherCodePut(voucherCode, body)

issue a warranty from the batch

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.VoucherBatchApi();
var voucherCode = "voucherCode_example"; // String | previously specified voucherCode for warranty
var body = new WarrantyLifeApi.Body(); // Body | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voucherVoucherCodePut(voucherCode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherCode** | **String**| previously specified voucherCode for warranty | 
 **body** | [**Body**](Body.md)|  | 

### Return type

[**InlineResponse403**](InlineResponse403.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

