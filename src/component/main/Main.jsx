import { assets } from '../../assets/assets';
import './Main.css'
import {Context} from '../../context/Context'
import { useContext } from 'react';

function Main(){


    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSent();



    }


    return(
      <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">


            {!showResult
            ?<>
             <div className='center-main'>

<div className="greet">
    <p><span>Hello, Ali.</span></p>
    <p>How can I help you today?</p>
</div>
<div className="cards">
    <div className="card">
        <p>Suggest beautiful places to see on an upcoming road trip</p>
        <img src={assets.compass_icon} alt="" />
    </div>
    <div className="card">
        <p>Briefly summarize this concept: urban planning</p>
        <img src={assets.bulb_icon} alt="" />
    </div>
    <div className="card">
        <p>Brainstorm team bonding activities for our work retreat</p>
        <img src={assets.message_icon} alt="" />
    </div>
    <div className="card">
        <p>Tell me about React js and React native</p>
        <img src={assets.code_icon} alt="" />
    </div>
</div>
</div>

            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                <img src={assets.gemini_icon} alt=""/>

                    {loading
                    ?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    
                }
                </div>

            </div>
        
        
        }
           
            <div className="main-bottom">
                <form className="searchBox" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter a prompt here' value={input} onChange={(e)=>setInput(e.target.value)} />
                    <div className='icons'>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {
                            prompt
                            ?<button type='submit'> <img src={assets.send_icon} alt="" /></button>
                            :null
                        }
                    </div>
                </form>
                <p className='bottom-info'>
                    Gemini can  make mistakes, so double-check it             </p>
            </div>


        </div>

      </div>
    )







}

export default Main;