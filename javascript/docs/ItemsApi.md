# WarrantyLife.ItemsApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemsGet**](ItemsApi.md#itemsGet) | **GET** /items | get an item
[**itemsItemIdGet**](ItemsApi.md#itemsItemIdGet) | **GET** /items/{itemId} | get an item
[**itemsItemIdWarrantiesPost**](ItemsApi.md#itemsItemIdWarrantiesPost) | **POST** /items/{itemId}/warranties | create warranty
[**itemsPost**](ItemsApi.md#itemsPost) | **POST** /items | create new item


<a name="itemsGet"></a>
# **itemsGet**
> Item itemsGet(opts)

get an item

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.ItemsApi();
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
apiInstance.itemsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **String**| previously specified refId for product | [optional] 
 **orderRefId** | **String**| order reference id | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemsItemIdGet"></a>
# **itemsItemIdGet**
> Item itemsItemIdGet(itemId)

get an item

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.ItemsApi();
var itemId = "itemId_example"; // String | Id for the product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemsItemIdGet(itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**| Id for the product | 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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

var apiInstance = new WarrantyLife.ItemsApi();
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

<a name="itemsPost"></a>
# **itemsPost**
> Item itemsPost(item)

create new item

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.ItemsApi();
var item = new WarrantyLife.Item(); // Item | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemsPost(item, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [**Item**](Item.md)|  | 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

