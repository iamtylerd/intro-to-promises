"use strict";
var getData = (function (getdata) {


var categoriesData = [];
var typesData = [];
var productData = [];


categoriesAjax()
	.then(function(data1) {
		categoriesData = data1.categories;
		$.each(categoriesData, function(catName) {
			var catNameLoop = categoriesData[catName].name;
			$('#catSelect')
         .append($("<option></option>")
                    .attr("value",catNameLoop)
                    .text(catNameLoop)); 
		})
	});


	$("#catSelect").change(function() {
		typesAjax()
		.then(function(data2){
			typesData = data2.types;

			typesData.forEach(function(thing){
				thing.category = categoriesData[thing.category].name
			})
			console.log(typesData);
			// getData3()
		});
			productsAjax()
			.then(function(data3){
				productData = data3.products;

				var fairyData = productData[0];
				var goblinData = productData[1];

				$.each(productData, function(product){
					console.log("1>", product);
					var fairyOrGoblin = productData[product]
					console.log("2>", fairyOrGoblin);

					for (var whichThing in fairyOrGoblin) {
						console.log("3>", whichThing);
						var typeIndex = fairyOrGoblin[whichThing].type
						console.log("4>", typeIndex);
						
						for (var i = typesData.length - 1; i >= 0; i--) {
							if (fairyOrGoblin[whichThing].type === typesData[i].id) {

								fairyOrGoblin[whichThing].type = typesData[i].name;
								console.log("5?", fairyOrGoblin[whichThing].type);
							}
						}
					}

				})
				console.log(">?", productData);
			 console.log("new data", getData.fetchData());

			})

		});

			getdata.fetchData = function() {
				var masterData = {
					categories: categoriesData,
					types: typesData,
					products: productData
				}

			 return masterData;
			}
		return getdata;
})(getData || {} );
