import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
function Sidebar(){


    const [extended,setExtended]=useState(false);
    const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context)

    const loadChat=async (prompt)=>{

        console.log(prompt.item);
        setRecentPrompt(prompt.item)
        await onSent(prompt.item);
    }


    return(
        <>

          <div className='sidebar'>
            <div className='top'>
                <img className='menu' src={assets.menu_icon} alt=""
                onClick={()=>setExtended((prev)=>!prev)} />
                <div onClick={()=>newChat()} className='new-chat' >
                    <img src={assets.plus_icon} alt="" />
                    {extended
                    ?<p>New Chat</p>
                    :null
                }
                    
                </div>
                {
                    extended
                    ? <div className="recent">
                    <p className='recent-title'>Recent</p>
                    {prevPrompt.map((item,index)=>{

                        return (
                            <div key={index} className="recent-entry">
                            <img src={assets.message_icon} alt=""/>
                            <p onClick={()=>{loadChat({item})}}>{item.slice(0,18)}...</p>
                        </div>

                        )




                    })}
                  
                    
                </div>
                    :null

                }
               


                </div>

                <div className='bottom'>

                    <div className="bottom-item recent-entry">
                        <img src={assets.question_icon} alt="" />
                        {extended
                        ? <p>Help</p>
                        :null
                    }
                       
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.history_icon} alt="" />
                        {extended
                        ?<p>Activity</p>
                        :null
                    }
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.setting_icon} alt="" />

                        {
                            extended
                        ?<p>Settings</p>
                        :null
                        }
                    </div>

                </div>




          </div>
        
        
        </>
    )



}

export default Sidebar;