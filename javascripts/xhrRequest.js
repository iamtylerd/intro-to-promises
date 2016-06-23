"use strict";

var categoriesAjax = function () {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/json/categories.json"
		}).done(function(data) {
			resolve(data);
		}).fail(function(xhr, status, error) {
			reject(error);
		});
	});
};

var typesAjax = function () {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/json/types.json"
		}).done(function(data) {
			resolve(data);
		}).fail(function(xhr, status, error) {
			reject(error);
		});
	});
};

var productsAjax = function () {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/json/products.json"
		}).done(function(data) {
			resolve(data);
		}).fail(function(xhr, status, error) {
			reject(error);
		});
	});
};