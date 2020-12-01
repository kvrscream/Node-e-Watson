const ibm = require("./ibmController");

module.exports = {



    async sendMessage(req, res){
        let work = await ibm.getWorkspaces();
        let message = req.params.text;

        let responseIbm = await ibm.sendMessage(work[0].workspace_id, message);
        
        res.json({
            status: 200,
            message: responseIbm.output.text[0]
        })
    }

}
