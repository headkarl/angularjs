var helloworldApp = angular.module('helloworldApp')

helloworldApp.factory('vmInfos',function($resource){
	var url = "http://localhost:20000";
	var ver = "v0.1";
	var vmInfosRestApi = $resource(url+"/api/"+ver+"/vminfos/:vmid", {},{} );
	return vmInfosRestApi;
});