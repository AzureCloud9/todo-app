import mobileDarkBg from "./assets/bg-mobile-dark.jpg"
import mobileLightBg from "./assets/bg-mobile-light.jpg"
import mobileDarkMode from "./assets/icon-sun.svg"
import mobileLightMode from "./assets/icon-moon.svg"
import darkModeBg from "./assets/bg-desktop-dark.jpg"
import lightModeBg from "./assets/bg-desktop-light.jpg"

export default function Header ({mode, isMobile, modeHandle}) {
    return (
        <>
            {isMobile? (
                <>
                    <img className="mobileBg" src={mode?mobileDarkBg:mobileLightBg} alt="Background"/>     
                    <div className="titleMode">
                        <h1 style={{marginLeft:"26px" ,marginRight:"196px", marginBottom:isMobile?"20px":null, color:"white"}}>T O D O</h1>
                        <img style={{width:"20px", height:"20px"}} className="mode" onClick={modeHandle} src={mode?mobileDarkMode:mobileLightMode} alt="background"/>
                    </div>
                </> 
            ):(
                <div className="laptopHeader" style={{marginBottom:"48px",}}>
                    <img className="background" src={mode?darkModeBg:lightModeBg} alt="Background"/>     
                    <div className="titleMode">
                        <h1 style={{marginRight:"348px", color:"white"}}>T O D O</h1>
                        <img style={{width:"26px", height:"26px", }} className="mode" onClick={modeHandle} src={mode?mobileDarkMode:mobileLightMode} alt="background"/>
                    </div>
                </div> 
            )}
        </>    
    )
}