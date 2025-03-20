
const functions = require('firebase-functions')




functions.setGlobalOptions({
    region: "asia-east1"
});

try{

    const {backendRepo} = require("../../dist");
    exports.api = functions.https.onRequest(backendRepo.app)
}catch(e){
    console.log('dist is not found')
}
