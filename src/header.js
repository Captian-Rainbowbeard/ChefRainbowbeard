import './index.css'
import logo from './img/Frame 38.png'
export default function header(){
    return(
        <>
        <div className="header-wrapper">
                <div className="header-logo">
                    <img className="logo-image"src={logo} alt="logo" />
                </div>
        </div>
        </>
    )
}