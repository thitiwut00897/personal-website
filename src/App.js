import logo from './logo.svg';
import profile from './profile.jpg';
import user from './user.png';
import Phone from './phone-call.png';
import mail from './mail.png';
import githubL from './githubL.png';
import facebook from './facebook.png';
import instagram from './instagram.png';

import react from './react.png';
import reactnative from './reactnative.png';
import html from './html-5.png';
import css from './css-3.png';
import js from './JavaScript.png';
import postman from './postman.png';
import github from './github.png';
import firebase from './firebase.png';
import django from './python.png';
import vocabbattleVideo from './vocabbattle.mp4';
import Kinraidee1 from './kinraidee1.mp4';
import LoginFront from './loginFront.png';
import Challenge from './challenge.png';
import ITkmitl from './ITKMITL.png';
import KMITL from './kmitllogo.png';
import TRANSCIPT from './TRANSCIPT.pdf';

import './App.css';
import Fade from 'react-reveal/Fade';

function App() {

  return (
    <div className="App">
      {/* <div className='contrainer'> */}
        <div className='navbar'>
          <h2>Personal</h2>
        </div>
        <header className="App-header">
          <div className='contrainer'>
            <div className='firstBox'>
              <div className='welcomeText'>
                <h1>WELCOME TO WEBSITE </h1>
                <h4>I am Thitiwut phophan</h4>
                {/* <p className='font-header'>I am Thitiwut </p> */}
                <a href={TRANSCIPT} download="TRANSCIPT.pdf"><div className='ButtonIDO'><h3>Download Transcript</h3></div></a>
              </div>
              <div className='welcomeImg'>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <img src={profile} className="App-logo" alt="logo" />
              </div>
              
            </div>
            <div className='wrapperbox'>
              <div className='paperBox'>
                <div className='itempaper'><img src={facebook} className="social" alt="logo" /></div>
                <div className='line'></div>
                <div className='itempaper'><img src={instagram} className="social" alt="logo" /></div>
                <div className='line'></div>
                <div className='itempaper'><img src={github} className="social" alt="logo" /></div>
                <div className='line'></div>
                <div className='itempaper'><h3>62 หลวงแพ่ง4 ลาดกระบัง 10520</h3></div>
                {/* <div className='line'></div>
                <div className='itempaper'></div> */}
              </div>
            </div>
            
            <div className='wrapperAboutMe'>
              <div className='AboutMePicture'>
                <div className='pictureAboutMe1'><img src={ITkmitl} className="imageeducation" alt="logo" /></div>
                <div className='pictureAboutMe2'><img src={KMITL} className="imageeducation" alt="logo" /></div>
              </div>
              <div className='AboutMeDetail'>
                <h3 className='red'>About Me</h3>
                <h1>Software Developer</h1>
                <h3>Education</h3>
                <div className='aboutmeEducation'>
                  <div className='wrapperDot'>
                    <div className='dot'></div>
                  </div>
                
                  <div>
                    <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
                    <p>คณะ เทคโนโลยีสารสนเทศ สาขา เทศโนโลยีสารสนเทศ</p>
                    <p>แขนง วิศวกรรมซอฟต์แวร์</p>
                  </div>
                </div>
                
                <div className='contactDetail'>

                  <div className='boxincontactDetail'>
                    <div className='iconFullname'><img src={user} className="iconContact" alt="logo" /></div>
                    <div className='incontactDetail'>
                      <h3>Full Name</h3>
                      <p>Thitiwut phohpan</p>
                    </div>
                  </div>

                  <div className='boxincontactDetail'>
                    <div className='iconPhone'><img src={Phone} className="iconContact" alt="logo" /></div>
                    <div className='incontactDetail'>
                      <h3>Phone No.</h3>
                      <p>086 308 9090</p>
                    </div>
                  </div>

                  <div className='boxincontactDetail'>
                    <div className='iconEmail'><img src={mail} className="iconContact" alt="logo" /></div>
                    <div className='incontactDetail'>
                      <h3>Email Address</h3>
                      <p>Thitiwut00897@gmail.com</p>
                    </div>
                  </div>

                  <div className='boxincontactDetail'>
                    <div className='iconGithub'><img src={githubL} className="iconContact" alt="logo" /></div>
                    <div className='incontactDetail'>
                      <h3>Github Name</h3>
                      <p>Thitiwut00897</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            <div className='WhatIDo'>
              <h1>What I Do</h1>
              <p>Front-End Developper</p>
              <div className='wrappertListIDo'>

                <div className='box-listIDo'>
                  <h2>Mobile Developer</h2>
                  <div className='red'><p>Expo React Native</p></div>
                  {/* <div className='ButtonIDO'><h3>Show more</h3></div> */}
                </div>

                <div className='box-listIDo'>
                  <h2>Web Developer</h2>
                  <div className='red'><p>React</p></div>
                  {/* <div className='ButtonIDO'><h3>Show more</h3></div> */}
                </div>
                
                <div className='box-listIDo'>
                  <h2>Front-End Developer</h2>
                  <div className='red'><p>React, React Native, HTML, CSS, Javascript</p></div>
                  {/* <div className='ButtonIDO'><h3>Show more</h3></div> */}
                </div>

                <div className='box-listIDo'>
                  <h2>System Analyst</h2>
                  <div className='red'><p></p></div>
                  {/* <div className='ButtonIDO'><h3>Show more</h3></div> */}
                </div>


              </div>
            </div>

          </div>
          <div className='skillBox'>
            <h1>My Skill</h1>
            {/* <p>xxxxxxxxxxxxxxxxxxxx</p> */}
            <div className='contrainer'>
              <div className='skillwrapper'>
                <img src={react} className="logoSkill" alt="logo" />
                <img src={reactnative} className="logoSkillnative" alt="logo" />
                <img src={html} className="logoSkill" alt="logo" />
                <img src={css} className="logoSkill" alt="logo" />
                <img src={js} className="logoSkill" alt="logo" />
                <img src={postman} className="logoSkill" alt="logo" />
                <img src={github} className="logoSkill" alt="logo" />
                <img src={firebase} className="logoSkill" alt="logo" />
              </div>
            </div>
          </div>

          <div className='contrainer'>
            <div className='WhatIDo'>
                <h1>Project</h1>
                {/* <p>xxxxxxxxxxxxxxxxxxxx</p> */}
                <div className='wrappertListIDo'>
                
                  <div className='box-listProject'>
                  <a href="https://github.com/thitiwut00897/KinRaiDee">
                    <div className='imageProject'>
                      <video controls height="300px">
                        <source src={Kinraidee1} type="video/mp4"/>
                      </video>
                    </div>
                    <div className='DetailProject'>
                      <div className='red'>
                        <h4>Mobile App</h4>
                      </div>
                      <h2>KinRaiDee</h2>
                    </div>
                    </a>
                  </div>

                  <div className='box-listProject'>
                  <a href="https://github.com/thitiwut00897/VocabBattleV1">
                    <div className='imageProject'>
                      <video controls height="300px">
                        <source src={vocabbattleVideo} type="video/mp4"/>
                      </video>
                    </div>
                    <div className='DetailProject'>
                      <div className='red'>
                        <h4>Mobile App</h4>
                      </div>
                      <h2>VocabBattleV1</h2>
                    </div>
                    </a>
                  </div>

                  <div className='box-listProject'>
                  <a href="https://github.com/Rungwarapon/go-shopping-frontend">
                    <div className='imageProject'>
                    <img src={react} className="imageProject" alt="logo" />
                    </div>
                    <div className='DetailProject'>
                      <div className='red'>
                        <h4>Website</h4>
                      </div>
                      <h2>Go-Shopping</h2>
                    </div>
                    </a>
                  </div>

                  <div className='box-listProject'>
                  <a href="https://github.com/thitiwut00897/project-bear">
                    <div className='imageProject'>
                      <img src={django} className="imageProject" alt="logo" />
                    </div>
                    <div className='DetailProject'>
                      <div className='red'>
                        <h4>Website</h4>
                      </div>
                      <h2>project-bear</h2>
                    </div>
                    </a>
                  </div>
                </div>

            </div>

            <div className='WhatIDo'>
                <h1>Practice Style</h1>
                {/* <p>xxxxxxxxxxxxxxxxxxxx</p> */}
                <div className='wrappertListIDo'>
                
                  <div className='box-listProject'>
                  <a href="https://github.com/thitiwut00897/front-end-LoginForm">
                    <div className='imageProject'>
                      <img src={LoginFront} className="imageProject" alt="logo" />
                    </div>
                    <div className='DetailProject'>
                      <div className='red'>
                        <h4>Mobile App</h4>
                      </div>
                      <h2>LoginForm</h2>
                    </div>
                    </a>
                  </div>

                  <div className='box-listProject'>
                  <a href="https://github.com/thitiwut00897/vitejs-vite-bmzjya">
                    <div className='imageProject'>
                      <img src={Challenge} className="imageProject" alt="logo" />
                    </div>
                    <div className='DetailProject'>
                      <div className='red'>
                        <h4>Mobile App</h4>
                      </div>
                      <h2>Interview Challenge</h2>
                    </div>
                    </a>
                  </div>

                  

                  

                  
                </div>
                
            </div>

          </div>

        </header>

      

    </div>
  );
}

export default App;
