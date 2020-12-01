const DiscoveryV1 = require("ibm-watson/assistant/v1");
const {IamAuthenticator} = require("ibm-watson/auth");
const { sendMessage } = require("./messageController");





module.exports = {

    async getWorkspaces(){
        let apiKey = process.env.APIKEY || "PMUT_IQhm4NcYj6pY4e6JILpQUhJp3x5JJRIpnlDEzFQ"
        const discovery = new DiscoveryV1({
            authenticator: new IamAuthenticator({ apikey:  apiKey}),
            version: "2019-04-30"
        })
        
        const work = discovery.listWorkspaces().then((response) => {
            return response.result.workspaces
        });

        return work;
    },


    async sendMessage(workspaceId, message){
        let apiKey = process.env.APIKEY || "PMUT_IQhm4NcYj6pY4e6JILpQUhJp3x5JJRIpnlDEzFQ"
        const discovery = new DiscoveryV1({
            authenticator: new IamAuthenticator({ apikey:  apiKey}),
            version: "2019-04-30"
        });
//console.log("work ->", workspaceId)
        const botResponse = discovery.message({
            workspaceId: workspaceId,
            input: {"text": message},
            headers: {
                'Custom-Header': 'custom',
                'Accept-Language': 'custom'
              }
        })
        .then((response) => {
            return response.result;
        })

        return botResponse;
    }
    
}