# WarrantyLife.CategoriesApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesCategoryIdGet**](CategoriesApi.md#categoriesCategoryIdGet) | **GET** /categories/{categoryId} | 
[**categoriesGet**](CategoriesApi.md#categoriesGet) | **GET** /categories | List of all categories


<a name="categoriesCategoryIdGet"></a>
# **categoriesCategoryIdGet**
> Category categoriesCategoryIdGet(categoryId)



### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.CategoriesApi();
var categoryId = "categoryId_example"; // String | Id for the category you would like to retrieve
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesCategoryIdGet(categoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| Id for the category you would like to retrieve | 

### Return type

[**Category**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoriesGet"></a>
# **categoriesGet**
> [Category] categoriesGet()

List of all categories

device categories

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.CategoriesApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Category]**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

