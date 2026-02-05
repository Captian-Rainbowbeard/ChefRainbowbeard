import './index.css'
export default function Forms(){
    return(
        <>
        <div className="form-wrapper">
            <form>
                <input type="text" className="form-field" name="fname" value="" placeholder='e.g. Oregano'></input>
                <input className="submit" type="submit" value="+ add ingredients"></input>
            </form>
        </div>
        </>
    )
}