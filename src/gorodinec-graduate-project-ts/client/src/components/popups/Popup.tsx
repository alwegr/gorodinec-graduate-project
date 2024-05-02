import React from "react";
import { IoClose } from "react-icons/io5";
import './Popup_style.css'

function Popup({ isOpen, onClose, children }: any) {
    const onWrapperClick = (event:any) =>{
        if(event.target.classList.contains('popup-wrapper')) onClose()
    }
    return (
        <>
            {isOpen && (
                <div className="popup">
                    <div className="popup-wrapper" onClick={onWrapperClick}>
                        <div className="popup-content">
                            <button className="popup-close-btn" onClick={() => onClose()}>
                                <IoClose />
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Popup