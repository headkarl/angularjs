var helloworldApp = angular.module('helloworldApp')

helloworldApp.factory('vmInfos',function($resource){
	var url = "http://10.10.10.10";
	var ver = "v0.1";
	var vmInfosRestApi = $resource(url+"/api/"+ver+"/vminfos/:vmid", {},{} );
	return vmInfosRestApi;
});

 // .factory('Geek', function ($resource){  
 //                        return $resource("geek/:geekId.json", {}, {  
 //                            query: {  
 //                                method: "GET",  
 //                                params: {geekId: "list"},  
 //                                isArray: true  
 //                            }  
 //                        });  
 //                    });  