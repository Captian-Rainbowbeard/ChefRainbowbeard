import './index.css'

export default function Footer(){
    return(
        <>
        <div className="footer-wrapper">
            <div className="text-wrapper">
                <h2 className='footerHeading'>Ready for a recepie?</h2>
                <p className='footerPara'>Generate a recepie from your list of ingredients</p>
            </div>
            <div className="button-wrapper">
                <button className='button-footer'>Get a Recepie</button>
            </div>
        </div>
        </>
    )
}