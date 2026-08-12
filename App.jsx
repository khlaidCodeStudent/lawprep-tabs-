import { useState } from 'react'
import { tabs } from './Tabs'
import './App.css'

function App() {
 let [activeTab, setActiveTab] = useState(0)
 let [activeContent, setActiveContent] = useState(tabs[0])
 let changedata =(index)=>{
  setActiveTab(index)
  setActiveContent(tabs[index])
 }

  return (
   <div>
    <div className='tabsouter'>
              <h1>law prep Vision Mission Values Goals</h1>
              <ul>
                {tabs.map((tab, index) => (
                  <li >
                    <button className={activeTab == index ? 'activebutton' : ''} onClick={() => changedata(index)}>{tab.title}</button>
                  </li>
                ))}
               
              </ul>
              {

                activeContent !== undefined 
                ?
                <p>{activeContent.description}</p>
                :

                ''

              }
               
    </div>
   </div>
  )
}

export default App
