import React from 'react'

function About(props) {

    let textColor = props.theme ==='light'?'light':'dark';
    let back = props.theme ==='light'?'light':'dark';
    let fbColor = props.theme ==='light'?'#4267B2':'white';
    let tgColor = props.theme ==='light'?'#0088CC':'white';
    let igColor = props.theme ==='light'?'#ee5151c5':'white';
    let lnColor = props.theme ==='light'?'#0e76a8':'white';
    let twColor = props.theme ==='light'?'#1DA1F2':'white';


    return (
        <>
           <div className="container-fluid about" style={{ margin: '25px 0px', marginTop: '70px'}}>
                <h3 className="dark" style={{paddingTop:'15px'}}>About - LocalHost-<b>NEWS</b></h3>  
                <p className={`about-text my-1 ${textColor}`}>
                    LocalHost-<span className="bold">NEWS</span> a single page <span className="bold">React-App</span> created by me using <span className="bold">NewsAPI</span> for getting the top headlines of various categories according to users choice, with a very simple and smooth UI experience.
                    <br/><br/>
                    <span className={`bold dark footer-heading`}>Features :</span>
                    <br/>
                    <ul className={textColor}>
                    <li className="feature-1"> 5+ Categories of news</li>
                    <li className="feature-2"> Smoother and Clean UI</li>
                    <li className="feature-3"> Real-time news from various sources</li>
                    <li className="feature-4"> Responsive fits for every screen and device.</li>
                    <li className="feature-5"> DarkMode for good reading experience, so no harm to your eye.</li>
                    </ul>
                    <span className={`bold dark footer-heading`}>Inside The App :</span>
                    <br/>
                    This LocalHost-<span className={`bold ${textColor}`}>NEWS</span> App is created by using these components :
                    <br/>
                    <ul>
                    <li className="comp-1"><span className="bold">Html : </span>for giving the basic structure to the App</li>
                    <li className="comp-2"><span className="bold">BootStrap : </span>for styling the App, custom <span className="bold">CSS</span> is also used.</li>
                    <li className="comp-3"><span className="bold">React.js : </span>Ofcourse, it's an React-App, some extra npm packages are there i.e. react-router-dom,InfiniteScroll.</li>
                    <li className="comp-4"><span className="bold">NewsAPI : </span>it's an API used to fetch the news.</li>
                    </ul>
                </p>
        </div>

        <div className={`row footer bg-${back}`} style={{display:'flex',position:'inline',width:'100%',margin:'auto'}}>
           <div className="contact col-sm-3" style={{padding:'20px',margin:'5px'}}>
              <span className={`bold ${textColor} footer-heading`}>Contact-me :</span>
              <br/>
              <span className={`bold ${textColor}`}> sharewithakashyadav@gmail</span>
            </div>
            <div className="social-links col-sm-3" style={{padding:'20px',margin:'5px'}}>
                <span className={`bold ${textColor} footer-heading`}>Social Connect :</span>
                    <br/>
                    <span style={{fontSize:'25px'}} className="my-1">
                    <li><a href="https://twitter.com/akash_369_" rel="noreferrer" target="_blank"><i className={`fa fa-twitter`} style={{color:twColor}}></i></a></li>
                    <li><a href="/" rel="noreferrer" target="_blank"><i className={`fa fa-facebook`} style={{color:fbColor}}></i></a></li>
                    <li><a href="/" rel="noreferrer" target="_blank"><i className={`fa fa-telegram`} style={{color:tgColor}}></i></a></li>
                    <li><a href="https://instagram.com/ig_akash369" rel="noreferrer" target="_blank"><i className={`fa fa-instagram`} style={{color:igColor}}></i></a></li>
                    <li><a href="https://github.com/aksh-git" rel="noreferrer" target="_blank"><i className={`fa fa-github ${textColor}`}></i></a></li>
                    <li><a href="/" rel="noreferrer" target="_blank"><i className={`fa fa-linkedin`} style={{color:lnColor}}></i></a></li>
                </span>
            </div>
            <div className="col-sm-3" style={{padding:'20px',margin:'5px'}}>
                <span className={`text-center bold ${textColor}`}>Made with <i style={{color:'#ff0000',fontSize:'16px'}} className="fa fa-heart"></i> by Akash</span>
            </div>
        </div>
        </>
    )
}

export default About
