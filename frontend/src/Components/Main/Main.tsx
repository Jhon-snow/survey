import React from 'react'
import '../../App.sass'
import axios from 'axios'
// import '/./App.sass';
const Main: React.FC = () => {
    const [surveys, setSurveys] = React.useState<String[]>([]);
    const [assignedstate, setAssignedstate] = React.useState<String[]>([]);
    const [employess, setEmployess] = React.useState<String[]>([]);
    const [surveyname, setSurveyname] = React.useState("");
    const [assignedsurveyname, setAssignedsurveyname] = React.useState("");

    React.useEffect(() => {
        getEmployess();
    }, []);

    const getEmployess = () => {
        axios.get('http://localhost:8899/fetchEmp')
            .then(function (response) {
                const employess = response.data.empIds;
                setEmployess(employess);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const add = (val: any) => {
        let index = surveys.indexOf(val);
        delete surveys[index];
        setAssignedstate([...assignedstate, val]);

    }
    const remove = (assigned_survey: any) => {
        let index = assignedstate.indexOf(assigned_survey);
        delete assignedstate[index];
        setSurveys([...surveys, assigned_survey]);
        // console.log(assignedsurvey);
    }
    const getdetail = (val: any) => {
        let data = {"empId":val};
        setAssignedstate([]);
        axios.post('http://localhost:8899/fetchSurvey',data)
            .then(function (response) {
                const surveylist = response.data.surveylist;
                setSurveys(surveylist);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // const search =(surveyname: any) =>{

    // }
    return (
        <div>

            <section className="section">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span className="has-text-weight-semibold">Select Employee</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        {
                                        employess.map((employe:String)=>(
                                            <a href="#" className="dropdown-item" onClick={() => getdetail(employe)}>
                                            <p className="is-size-4-widescreen">{employe}</p>
                                        </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section">
                <div className="columns">
                    <div className="column is-half">
                        
                        <div className="card">
                            <div className="control">
                                <input className="input" type="text" placeholder="Search survey"  onChange={(event) => setSurveyname(event.currentTarget.value)}/>
                            </div>
                        </div>
                        
                        {
                            surveys.map((val:String)=>
                            (val && (surveyname.length == 0 || surveyname ==val))?
                            (  
                                <section>
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="columns">
                                                <div className="column is-four-fifths">
                                                    <p className="is-size-1-widescreen">{val}</p>
                                                </div>
                                                <div className="auto">
                                                    <button className="button is-primary" onClick={() => add(val)}>add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ):console.log(""))
                        }
                    </div>
                    <div className="column is-half">
                        <div className="card">
                            <div className="control">
                                <input className="input" type="text" placeholder="Search assigned survey" onChange={(event) => setAssignedsurveyname(event.currentTarget.value)} />
                            </div>
                        </div>
                        {
                            assignedstate.map((assigned_survey:String)=>
                            (assigned_survey && (assignedsurveyname.length == 0 || assignedsurveyname ==assigned_survey))?
                            (
                                <section>
                                <div className="card">
                                    <div className="card-content">
                                        <div className="columns">
                                            <div className="column is-four-fifths">
                                                <p className="is-size-1-widescreen">{assigned_survey}</p>
                                            </div>
                                            <div className="auto">
                                                <button className="button is-primary">add</button>
                                            </div>
                                            <div className="auto">
                                                <button className="button is-danger" onClick={() => remove(assigned_survey)}>delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            ):console.log(""))
                        }
                    </div>
                </div>
            </section>


            <section className="section">
                <div className="container">
                    <button className="button is-info" >
                        Done
                        </button>
                </div>
            </section>


        </div>
    );

}

export default Main