sap.ui.define([
    'sap/ui/core/util/MockServer',
    'sap/base/util/UriParameters'
], function(MockServer, UriParameters) {
    'use strict';
    return{

        init:function()
        {
             var oMockServer=new MockServer({
                 rootUri:"http://services.odata.org/V3/Northwind/Northwind.svc/"
             });
            //  var oUriParameters=new UriParameters(window.loaction.href);

            //  MockServer.config({
            //      autoRespond:true,
            //      autoRespondAfter:UriParameters.get("serverDelay") || 500
            //  });

             var sPath="../localService";
             oMockServer.simulate(sPath+"/metadata.xml",sPath+"/mockdata");

             oMockServer.start();

            //  debugger;

        }
        

    }
  
});