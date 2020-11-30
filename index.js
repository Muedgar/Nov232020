
/////// start part 1
// start storage
let ds_1 = {
    goal_exercises: null,
    goal_projects: null,
    goal_date_how_many_years_from_now: null,
    start_date: null,
    end_date: null,
    possible_exercises_pace_daily: null,
    possible_projects_pace_daily: null,
    required_exercises_pace_daily: null,
    required_projects_pace_daily: null,
    possibility: undefined,
    impossibility: undefined,
    impossible_by_how_long: undefined
}
// end storage
// start input
function ds_1_input() {
    // create temporary variables
    let g_e = null;
    let g_p = null;
    let g_d_h_m_y_f_n = null;
    let s_d = null;
    let e_d = null;
    let p_e_p_d = null;
    let p_p_p_d = null;
    let r_e_p_d = null;
    let r_p_p_d = null;
    let p = undefined;
    let imp = undefined;
    let imp_b_h_l = undefined;
    // create a random function to populate temporary variables
    function populateGoalExercises(goalExer) {
        // getting exercises goals
        let input = goalExer;
        if((typeof(input)=="number")&&(input>1000)) {
            g_e = input;
            return true;
        }else {
            return false;
        }
    }
    function populateGoalProjects(goalProj) {
        // getting exercises goals
        let input = goalProj;
        if((typeof(input)=="number")&&(input>12)) {
            g_p = input;
            return true;
        }else {
            return false;
        }
    }
    function populateDeadlineInYears(goalDead) {
        // getting exercises goals
        let input = goalDead;
        if((typeof(input)=="number")&&(input>0)) {
            g_d_h_m_y_f_n = input;
            return true;
        }else {
            return false;
        }
    }
    function populateDates(startDate, endDate) {
        // getting inputs
        s_d = startDate;
        e_d = endDate;
    }
    function populatePossibleExercises(possibleExercises) {
        let input = possibleExercises;
        p_e_p_d = input;
    }
    function populatePossibleProjects(possibleProjects) {
        let input = possibleProjects;
        p_p_p_d = input;
    }
    function populateExpectedExercises() {
        r_e_p_d = Math.floor((g_e)/(g_d_h_m_y_f_n * 365));
    }
    function populateExpectedProjects() {
        r_p_p_d = Math.floor((g_p)/(g_d_h_m_y_f_n * 365));
    }
    function populatePossibility() {
        if((r_e_p_d<p_e_p_d)||(r_p_p_d<p_p_p_d)) {
            p = true;
        }else {
            p = false;
        }
    }
    function populateImpossibility() {
        if((r_e_p_d>p_e_p_d)||(r_p_p_d>p_p_p_d)) {
            imp = true;
        }else {
            imp = false;
        }
    }
    function populateImpossibilityByHowFar() {
        if(imp == true) {
            var imp_e = null;
            var imp_p = null;
            imp_e = (g_d_h_m_y_f_n * 365)/(p_e_p_d);
            imp_p = (g_d_h_m_y_f_n * 365)/(p_p_p_d);
            imp_b_h_l = {val1: imp_e, val2: imp_p};
        }else {
            return false;
        }
    }
    // inputing by calling these functions
    ///
    ///
    ///
    
    // call populator
    function populator() {
        let random_goalExer;
        function randGE() {
            let array = [120000, 120930, 140000,110000,100500];
            let newElement = Math.floor(Math.random() * array.length);
            random_goalExer = array[newElement];
        }
        randGE();
        let random_goalProj;
        function randGP() {
            let array = [186, 798, 830,390,492];
            let newElement = Math.floor(Math.random() * array.length);
            random_goalProj = array[newElement];
        }
        randGP();
        let random_goalDead;
        function randDead() {
            let array = [10, 7, 5,8,9];
            let newElement = Math.floor(Math.random() * array.length);
            random_goalDead = array[newElement];
        }
        randDead();
        let random_startDate;
        function randStart() {
            let array = ["December 23 2020", "January 23 2021", "March 23 2021","June 23 2021","November 23 2021"];
            let newElement = Math.floor(Math.random() * array.length);
            random_startDate = array[newElement];
        }
        randStart();
        let random_endDate;
        function randEnd() {
            let array = ["December 23 2025", "January 23 2024", "March 23 2027","June 23 2029","November 23 2026"];
            let newElement = Math.floor(Math.random() * array.length);
            random_endDate = array[newElement];
        }
        randEnd();
        let random_possibleExercises;
        function randPossibleExer() {
            let array = [200, 400, 500,600,800];
            let newElement = Math.floor(Math.random() * array.length);
            random_possibleExercises = array[newElement];
        }
        randPossibleExer();
        let random_possibleProjects;
        function randPossibleProj() {
            let array = [20, 40, 50,60,80];
            let newElement = Math.floor(Math.random() * array.length);
            random_possibleProjects = array[newElement];
        }
        randPossibleProj();
        // after generating random values call functions
        populateGoalExercises(random_goalExer);
        populateGoalProjects(random_goalProj);
        populateDeadlineInYears(random_goalDead);
        populateDates(random_startDate, random_endDate);
        populatePossibleExercises(random_possibleExercises);
        populatePossibleProjects(random_possibleProjects);
        populateExpectedExercises();
        populateExpectedProjects();
        populatePossibility();
        populateImpossibility();
        populateImpossibilityByHowFar();
    }
    populator();
    // populate permanent storage
    ds_1.goal_exercises =  g_e;
    ds_1.goal_projects = g_p;
    ds_1.goal_date_how_many_years_from_now = g_d_h_m_y_f_n;
    ds_1.start_date = s_d;
    ds_1.end_date = e_d;
    ds_1.possible_exercises_pace_daily = p_e_p_d;
    ds_1.possible_projects_pace_daily = p_p_p_d;
    ds_1.required_exercises_pace_daily = r_e_p_d;
    ds_1.required_projects_pace_daily = r_p_p_d;
    ds_1.possibility = p;
    ds_1.impossibility = imp;
    ds_1.impossible_by_how_long = imp_b_h_l;

    console.log(ds_1);
    return true;
}
// test input
ds_1_input();
// end input
// start output
// let ds_2 = {
//     dates_worked_on: [], // length not exceeding days of specified.
//     date_first: { // keys are the dates worked on
//         exercises_done: null,
//         projects_done: null,
//         required_exercises_pace_daily: null,
//         required_projects_pace_daily: null,
//         possibility: undefined,
//         impossibility: undefined,
//         impossibility_by_how_long: undefined
//     }
// }
let ds_2 = {
    dates_worked_on : []
}
// inputs
function recordDay(date,exercisesD, projectsD) {
    function ds2PopulateRequiredExercisesPace() {
        return ds_1.required_exercises_pace_daily;
    }
    function ds2PopulateRequiredProjectsPace() {
        return ds_1.required_projects_pace_daily;
    }
    function ds2Possibility(exer,proj) {
        if((exer<ds_1.required_exercises_pace_daily)&&(proj<ds_1.required_projects_pace_daily)) {
            return "false";
        }else {
            return "true";
        }
    }
    function ds2Impossibility(exer,proj) {
        if((exer>ds_1.required_exercises_pace_daily)||(proj>ds_1.required_projects_pace_daily)) {
            return "false";
        }else {
            return "true";
        }
    }
    if((ds_2.dates_worked_on.length)>(ds_1.populateDeadlineInYears*365)) {
        console.log("deadline reached...");
        return false;
    }else {
        ds_2.dates_worked_on.push(date);
        ds_2[date] = {
            exercises_done: exercisesD,
            projects_done: projectsD,
            required_exercises_pace_daily: ds2PopulateRequiredExercisesPace(),
            required_projects_pace_daily: ds2PopulateRequiredProjectsPace(),
            possibility: ds2Possibility(exercisesD,projectsD),
            impossibility: ds2Impossibility(exercisesD,projectsD)
        };
    }
}

// random outputs
function randomOutputs() {
    let inputs = [{date: "November 23 2021", exercises: 30, projects: 10},{date: "October 21 2021", exercises: 33, projects: 11},{date: "January 1 2021", exercises: 40, projects: 15},{date: "November 3 2021", exercises: 60, projects: 90},{date: "December 23 2021", exercises: 30, projects: 10}];
    let newElement = Math.floor(Math.random() * inputs.length);
    recordDay(inputs[newElement].date,inputs[newElement].exercises,inputs[newElement].projects);
}
for(let i=0;i<100;i++) {
    randomOutputs();
}
// end output
console.log(ds_2);
/////// end part 1































































































































































































































































































