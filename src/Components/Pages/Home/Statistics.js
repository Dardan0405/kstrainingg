import React  from 'react';
import { FormattedMessage,  } from 'react-intl'
import purple from '../../../assets/Home/Statistics/purple.svg'
import red from '../../../assets/Home/Statistics/red.svg'
import './styles/Statics.scss'
import green from '../../../assets/Home/Statistics/green.svg'

import orange from '../../../assets/Home/Statistics/orange.svg'


const Statistics =() =>{
return(
    <div className='Statistics-Main'>
        <div className='containerfor-all'>
        
     <div className= 'Circle-purple'>
        <div className='Logo-ContainerStat'>
            <div className='Circle-Static1 Circle-student'>
                <div className='Logo-Static'style={{content:`url(${purple})`}} ></div> 
            </div>
        </div>
        <div className='Title-containerStat'>
            <h4>
                <FormattedMessage id='5' defaultMessage='5,679'/>
            </h4>
            <p>
                <FormattedMessage id='Registered' defaultMessage='Registered students at Kosova Training'/>
            </p>
        </div>
     </div>

     <div className='Circle-red'>
        <div className='Logo-ContainerStat1'>
            <div className='Circle-Static Circle-cer'>
                <div className='Logo-Static1'style={{content:`url(${red})`}}></div>
                </div> 
        </div>
        <div className='Title-containerStat'>
            <h4>
                <FormattedMessage id='2' defaultMessage='2,679'/>
            </h4>
            <p>
                <FormattedMessage id='Student' defaultMessage='Student acheived their dreams'/>
            </p>
        </div>
     </div>

     <div className='Circle-green'>
        <div className='Logo-ContainerStat2'>
            <div className='Circle-Static2 Circle-visit'>
            <div className='Logo-Stat2'style={{content:`url(${green})`}}></div>
            </div>
        </div>
     
     <div className='Title-containerStat'>
        <h4>
         <FormattedMessage id='10' defaultMessage='10,000'/>
        </h4>
        <p>
            <FormattedMessage id='People' defaultMessage='People visit our site monthly'/>
        </p>
     </div>
</div>
     <div className='Circle-orange'>
        <div className='Logo-ContainerStat3'>
            <div className='Circle-Static3 Circle-medall'>
                <div className='Logo-Stat3 'style={{content:`url(${orange})`}}></div>
            </div>
        </div>
        <div className='Title-containerStat'>
            <h4>
                <FormattedMessage id='#' defaultMessage='#10'/>

            </h4>
            <p>
                <FormattedMessage id='Ranked' defaultMessage="Ranked among online learning startups in Europe"></FormattedMessage>
            </p>
        </div>
     </div>
     </div>
    </div>
    
    
    
        
)
}  
            
        
    


export default Statistics