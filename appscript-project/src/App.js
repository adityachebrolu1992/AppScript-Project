import './App.css';
import Date from "./Date"
import Checkbox from './CheckBox';
import {useState} from "react"


const importedData=[
  {"Shortform":"AP", "name":"Andhra Pradesh", "percent":"50"},
  {"Shortform":"TG", "name":"Telengana", "percent":"50"},
  {"Shortform":"KA", "name":"Karnataka", "percent":"50"},
  {"Shortform":"WB", "name":"West Bengal", "percent":"50"},
  {"Shortform":"UT", "name":"Uttarakhand", "percent":"50"},
  {"Shortform":"UP", "name":"Uttar Pradesh", "percent":"50"},
  {"Shortform":"TR", "name":"Tripura", "percent":"50"},
  {"Shortform":"TN", "name":"Tamil Nadu", "percent":"50"},
  {"Shortform":"SK", "name":"Sikkim", "percent":"50"},
  {"Shortform":"RJ", "name":"Rajasthan", "percent":"50"},
  {"Shortform":"PB", "name":"Punjab", "percent":"50"},
  {"Shortform":"PY", "name":"Puducherry", "percent":"50"},
  {"Shortform":"OR", "name":"Odisha", "percent":"50"},
  {"Shortform":"NL", "name":"Nagaland", "percent":"50"},
  {"Shortform":"MZ", "name":"Mizoram", "percent":"50"},
  {"Shortform":"ML", "name":"Meghalaya", "percent":"50"},
  {"Shortform":"MN", "name":"Manipur", "percent":"50"},
  {"Shortform":"MH", "name":"Maharashtra", "percent":"50"},
  {"Shortform":"MP", "name":"Madhya Pradesh", "percent":"50"},
  {"Shortform":"LD", "name":"Lakshadweep", "percent":"50"},
  {"Shortform":"KL", "name":"Kerala", "percent":"50"},
  {"Shortform":"JH", "name":"Jharkhand", "percent":"50"},
  {"Shortform":"JK", "name":"Jammu and Kashmir", "percent":"50"},
  {"Shortform":"HP", "name":"Himachal Pradesh", "percent":"50"},
  {"Shortform":"HR", "name":"Haryana", "percent":"50"},
  {"Shortform":"GJ", "name":"Gujarat", "percent":"50"},
  {"Shortform":"GA", "name":"Goa", "percent":"50"},
  {"Shortform":"DL", "name":"Delhi", "percent":"50"},
  {"Shortform":"DD", "name":"Daman and Diu", "percent":"50"},
  {"Shortform":"DN", "name":"Dadra and Nagar Haveli", "percent":"50"},
  {"Shortform":"CT", "name":"Chhattisgarh", "percent":"50"},
  {"Shortform":"CH", "name":"Chandigarh", "percent":"50"},
  {"Shortform":"BR", "name":"Bihar", "percent":"50"},
  {"Shortform":"AS", "name":"Assam", "percent":"50"},
  {"Shortform":"AR", "name":"Arunachal Pradesh", "percent":"50"},
  {"Shortform":"AN", "name":"Andaman and Nicobar Islands", "percent":"50"}
  
]



function App() {
  const [states, setStates]=useState([])


  // const list=importedData.map((val)=>{
  //   if(setStates.includes(val.Shortform)){
  //     return val.name;
  //   }
  // })
  

  return (
    <div className="App">
      <header><h1>AppScript Project</h1></header>
      <Date />
      <Checkbox  list={importedData} states={states} setStates={setStates}/>
      <div id="elem2">
                    <table>
                        <thead>
                            <tr>
                                <th>Selected Country List</th>
                            </tr>
                        </thead>
                        <tbody>
                            {states.map((st, idx)=>{
                                return<tr><td key={idx}>{st}</td><td><progress id="file" value="32" max="100"> 32% </progress></td></tr>
                            })}
                            
                        </tbody>
                    </table>
                </div>
    </div>
  );
}

export default App;
