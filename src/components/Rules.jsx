import { useState } from 'react'
import rules from '../Images/image-rules.svg';
import closeButton from '../Images/icon-close.svg'
function Rules() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button id='rules' onClick={() => setOpen(true)}>
                RULES
            </button>
            {
                open === true && (
                    <div className='model'>
                        <div className='model__content'>
                            <div className='model__header'>
                                <h2>RULES</h2>
                                <button className='close-button' onClick={() => setOpen(false)}>
                                    <img src={closeButton} alt='close'/>
                                </button>
                            </div>
                            <img src={rules} alt='rules' className='model__rules-img'/>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Rules
