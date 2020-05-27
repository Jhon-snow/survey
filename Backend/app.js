let express=require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*-----------------Dummy arrays--------------------------*/
let surveys = [
    {Employe1:["survey1","survey2","survey3"]},
    {Empploy2:["survey5","survey6","survey7"]},
    {Employe3:["survey8","survey9","survey10"]},
    {Employe4:["survey11","survey12","survey13","survey14"]}];
/*-----------------create api----------------------------*/

/*--------------Fetch Employee---------------------------*/
app.get('/fetchEmp',function(req,res){
    let empIds = [];
    for(let i=0;i<surveys.length;i++){
        for(let j in surveys[i]) empIds.push(j);
    }
    res.json({empIds:empIds});

});


/*-------------Fetch Surveys-----------------------------*/
app.post('/fetchSurvey',function(req,res){
    let empId=req.body.empId;
    for(let i = 0;i<surveys.length;i++){
        for(let j in surveys[i]){
            if(j==empId){
                res.json({surveylist:surveys[i][empId]});
                return;
            }
        }
    }
    res.json({})

});

/*--------------------server------------------------------*/
app.listen(8899,function()
{
    console.log("Work on 8899");
})