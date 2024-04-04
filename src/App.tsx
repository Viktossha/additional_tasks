import React, {useState} from 'react';
import './App.css';
import {Tasks} from "./components/Tasks";
import App_2 from "./components/App_2";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import PS_DOP_3 from "./components/PS_DOP_3";
import PS_3 from "./components/PS_3";
import PS_4 from "./components/PS_4";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.


function App() {
    const data1 = {
        title: "What to do",
        tasks: [
            {taskId: 1, title: "HTML&CSS2", isDone: true},
            {taskId: 2, title: "JS2", isDone: true}
        ],
        students: [
            'Jago Wormald1',
            'Saul Milne2',
            'Aariz Hester3',
            'Dion Reeve4',
            'Anisa Ortega5',
            'Blade Cisneros6',
            'Malaikah Phelps7',
            'Zeeshan Gallagher8',
            'Isobella Vo9',
            'Rizwan Mathis10',
            'Menaal Leach11',
            'Kian Walton12',
            'Orion Lamb13',
            'Faizah Huynh14',
            'Crystal Vaughan15',
            'Vivien Hickman16',
            'Stuart Lu17',
            'Karol Davison18',
            'Dario Burns19',
            'Chloe Rich20',
            'Martyna Felix',
            'Nida Glass',
            'Maeve Miles',
            'Hasnain Puckett',
            'Ayman Cano',
            'Safwan Perry',
            'Fox Kelly',
            'Louise Barlow',
            'Malaki Mcgill',
            'Leanna Cline',
            'Willard Hodge',
            'Amelia Dorsey',
            'Kiah Porter',
            'Jeanne Daly',
            'Mohsin Armstrong',
            'Laurie Rangel',
            'Princess Tierney',
            'Kasim Kendall',
            'Darryl Cope',
            'Elysha Ray',
            'Liyana Harris',
            'Kashif Blackburn',
            'Atif Zimmerman',
            'Sila Hartley',
            'Ralphie Hebert',
        ]
    }
    const data2 = {
        title: "What to learn",
        tasks: [
            {taskId: 1, title: "HTML&CSS", isDone: true},
            {taskId: 2, title: "JS", isDone: true}
        ],
        students: [
            'Rick Kane',
            'Finnlay Bentley',
            'Samia North',
            'Isaac Morton',
            'Lily-Ann Clifford',
            'Thalia Park',
            'Sapphire Cruz',
            'Cieran Vazquez',
            'Anya Estes',
            'Dominika Field',
            'Rosanna Chung',
            'Safiyah Davey',
            'Ryley Beasley',
            'Kalvin Trejo',
            'Evie-Mae Farrell',
            'Juliet Valencia',
            'Astrid Austin',
            'Lyle Montgomery',
            'Nisha Mora',
            'Kylie Callaghan',
            'Star Wilks',
            'Marissa Colley',
            'Asa Fuller',
            'Leigh Kemp',
            'Avleen Dawson',
            'Sammy Bonilla',
            'Acacia Becker',
            'Coral Shepherd',
            'Melina Molina',
            'Kiran Bailey',
            'Clara Escobar',
            'Alexandru Horn',
            'Brandon-Lee Mercado',
            'Elouise Weston',
            'King Long',
            'Kerri Searle',
            'Kanye Hamer',
            'Elwood Benitez',
            'Mikail Whitaker',
            'Bobby Hardy',
            'Talha Ferry',
            'Priscilla Landry',
            'Olivia-Grace Cain',
            'Kiaan Wallace',
            'Wesley Padilla90',
            'Ella-Grace Wooten91',
            'Kaif Molloy92',
            'Kamal Broadhurst93',
            'Bianca Ferrell94',
            'Micheal Talbot95',
        ]
    }

    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    let [status, setStatus] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <Tasks data={data1}/>
            <Tasks data={data2}/>
            <App_2/>
            <UncontrolledOnOff onChange={setStatus}/> {status.toString()}
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />
            <Rating value={3} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu_2'} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       onClick={()=>{}}
                       items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]}/>
            <PS_DOP_3/>
            <PS_3/>
            <PS_4/>
            {/*<UncontrolledRating onChange={}/>*/}
            <OnOff status={status} onClick={setStatus}/>
        </div>
    );
}

export default App;















//--------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Tasks} from "./Tasks";
//
// export type DataType = {
//     title: string
//     tasks: Array<TasksType>
//     students: Array<string>
// }
// export type TasksType = {
//     taskId: number
//     title: string
//     isDone: boolean
// }
//
//
// function App() {
//     const data1= {
//         title: "What to do",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS2", isDone: true},
//             {taskId: 2, title: "JS2", isDone: true}
//         ],
//         students: [
//             'Jago Wormald1',
//             'Saul Milne2',
//             'Aariz Hester3',
//             'Dion Reeve4',
//             'Anisa Ortega5',
//             'Blade Cisneros6',
//             'Malaikah Phelps7',
//             'Zeeshan Gallagher8',
//             'Isobella Vo9',
//             'Rizwan Mathis10',
//             'Menaal Leach11',
//             'Kian Walton12',
//             'Orion Lamb13',
//             'Faizah Huynh14',
//             'Crystal Vaughan15',
//             'Vivien Hickman16',
//             'Stuart Lu17',
//             'Karol Davison18',
//             'Dario Burns19',
//             'Chloe Rich20',
//             'Martyna Felix',
//             'Nida Glass',
//             'Maeve Miles',
//             'Hasnain Puckett',
//             'Ayman Cano',
//             'Safwan Perry',
//             'Fox Kelly',
//             'Louise Barlow',
//             'Malaki Mcgill',
//             'Leanna Cline',
//             'Willard Hodge',
//             'Amelia Dorsey',
//             'Kiah Porter',
//             'Jeanne Daly',
//             'Mohsin Armstrong',
//             'Laurie Rangel',
//             'Princess Tierney',
//             'Kasim Kendall',
//             'Darryl Cope',
//             'Elysha Ray',
//             'Liyana Harris',
//             'Kashif Blackburn',
//             'Atif Zimmerman',
//             'Sila Hartley',
//             'Ralphie Hebert',
//         ]
//     }
//     const data2 = {
//         title: "What to learn",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS", isDone: true},
//             {taskId: 2, title: "JS", isDone: true}
//         ],
//         students: [
//             'Rick Kane',
//             'Finnlay Bentley',
//             'Samia North',
//             'Isaac Morton',
//             'Lily-Ann Clifford',
//             'Thalia Park',
//             'Sapphire Cruz',
//             'Cieran Vazquez',
//             'Anya Estes',
//             'Dominika Field',
//             'Rosanna Chung',
//             'Safiyah Davey',
//             'Ryley Beasley',
//             'Kalvin Trejo',
//             'Evie-Mae Farrell',
//             'Juliet Valencia',
//             'Astrid Austin',
//             'Lyle Montgomery',
//             'Nisha Mora',
//             'Kylie Callaghan',
//             'Star Wilks',
//             'Marissa Colley',
//             'Asa Fuller',
//             'Leigh Kemp',
//             'Avleen Dawson',
//             'Sammy Bonilla',
//             'Acacia Becker',
//             'Coral Shepherd',
//             'Melina Molina',
//             'Kiran Bailey',
//             'Clara Escobar',
//             'Alexandru Horn',
//             'Brandon-Lee Mercado',
//             'Elouise Weston',
//             'King Long',
//             'Kerri Searle',
//             'Kanye Hamer',
//             'Elwood Benitez',
//             'Mikail Whitaker',
//             'Bobby Hardy',
//             'Talha Ferry',
//             'Priscilla Landry',
//             'Olivia-Grace Cain',
//             'Kiaan Wallace',
//             'Wesley Padilla90',
//             'Ella-Grace Wooten91',
//             'Kaif Molloy92',
//             'Kamal Broadhurst93',
//             'Bianca Ferrell94',
//             'Micheal Talbot95',
//         ]
//     }
//
//     return (
//         <div className="App">
//             <Tasks data={data1}/>
//             <Tasks data={data2}/>
//         </div>
//     );
// }
//
// export default App;

// import React from 'react';
// import {DataType} from "./App";
//
// type  TasksPropsType = {
//     data: DataType
// }
//
// export const Tasks = (props: TasksPropsType) => {
//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

//--------------------------------------------------------------