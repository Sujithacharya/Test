sap.ui.define([
     "../localService/mockServer" 
],function(mockserver)
{
   "use-strict";

    // intitialize mockserver
    mockserver.init();

   sap.ui.require(["sap/ui/core/ComponentSupport"]);
})