# WarrantyLife.WarrantiesApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemsItemIdWarrantiesPost**](WarrantiesApi.md#itemsItemIdWarrantiesPost) | **POST** /items/{itemId}/warranties | create warranty
[**warrantiesGet**](WarrantiesApi.md#warrantiesGet) | **GET** /warranties | get warranty by query params
[**warrantiesPost**](WarrantiesApi.md#warrantiesPost) | **POST** /warranties | create warranty
[**warrantiesWarrantyIdDelete**](WarrantiesApi.md#warrantiesWarrantyIdDelete) | **DELETE** /warranties/{warrantyId} | delete an item
[**warrantiesWarrantyIdGet**](WarrantiesApi.md#warrantiesWarrantyIdGet) | **GET** /warranties/{warrantyId} | get an item


<a name="itemsItemIdWarrantiesPost"></a>
# **itemsItemIdWarrantiesPost**
> Warranty itemsItemIdWarrantiesPost(itemId, warranty)

create warranty

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantiesApi();
var itemId = "itemId_example"; // String | Id for the product
var warranty = new WarrantyLife.Warranty(); // Warranty | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemsItemIdWarrantiesPost(itemId, warranty, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**| Id for the product | 
 **warranty** | [**Warranty**](Warranty.md)|  | 

### Return type

[**Warranty**](Warranty.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="warrantiesGet"></a>
# **warrantiesGet**
> [Warranty] warrantiesGet(opts)

get warranty by query params

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantiesApi();
var opts = {
  'refId': "refId_example", // String | previously specified refId for product
  'orderRefId': "orderRefId_example" // String | order reference id
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.warrantiesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **String**| previously specified refId for product | [optional] 
 **orderRefId** | **String**| order reference id | [optional] 

### Return type

[**[Warranty]**](Warranty.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="warrantiesPost"></a>
# **warrantiesPost**
> Warranty warrantiesPost(warranty)

create warranty

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantiesApi();
var warranty = new WarrantyLife.Warranty(); // Warranty | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.warrantiesPost(warranty, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warranty** | [**Warranty**](Warranty.md)|  | 

### Return type

[**Warranty**](Warranty.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="warrantiesWarrantyIdDelete"></a>
# **warrantiesWarrantyIdDelete**
> warrantiesWarrantyIdDelete(warrantyId)

delete an item

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantiesApi();
var warrantyId = "warrantyId_example"; // String | previously specified warrantyId for warranty
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.warrantiesWarrantyIdDelete(warrantyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warrantyId** | **String**| previously specified warrantyId for warranty | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="warrantiesWarrantyIdGet"></a>
# **warrantiesWarrantyIdGet**
> Warranty warrantiesWarrantyIdGet(warrantyId)

get an item

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantiesApi();
var warrantyId = "warrantyId_example"; // String | previously specified warrantyId for warranty
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.warrantiesWarrantyIdGet(warrantyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warrantyId** | **String**| previously specified warrantyId for warranty | 

### Return type

[**Warranty**](Warranty.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

