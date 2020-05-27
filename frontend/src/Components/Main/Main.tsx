import React from 'react'
import '../../App.sass'
import axios from 'axios'
// import '/./App.sass';
const Main: React.FC = () => {
    const [surveys, setSurveys] = React.useState<String[]>(["survey 1", "survey 2", "survey 3", "survey 4"]);
    const [assignedstate, setAssignedstate] = React.useState<String[]>([]);
    const [employess, setEmployess] = React.useState<String[]>(["emp 1", "emp 2", "emp 3", "emp 4"]);


    React.useEffect(() => {
        getEmployess();
    }, []);

    const getEmployess = () => {
        axios.get('http://localhost:5000/societydetails')
            .then(function (response) {
                const entriesString = response.data.result;
                const employess = entriesString;
                setEmployess(employess);
                // console.log(entries);
                // console.log(entries.length)
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
        console.log(val);
    }
    return (
        <div>

            <section className="section">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span className="has-text-weight-semibold">Hover me</span>
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
                        {
                            surveys.map((val:String)=>
                            (val)?
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
                        {
                            assignedstate.map((assigned_survey:String)=>
                            (assigned_survey)?
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