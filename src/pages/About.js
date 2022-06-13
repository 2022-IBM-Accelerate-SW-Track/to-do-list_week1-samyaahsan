import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
            <div>
            <div class="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  img src = "https://media-exp1.licdn.com/dms/image/C4D03AQFOwjEsSmeHQQ/profile-displayphoto-shrink_400_400/0/1646171004164?e=1660176000&v=beta&t=oyHArAT20KvJNZ9wgW6ugrGn612CYA7dVKH4WcMA21U"
                  alt="Profile Pic"
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Samya Ahsan</div>
                <div className="brief_description">
                  engineer by trade, problem-solver by nature, maker by heart
                </div>
              
                <button class="mdc-button foo-button">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">Say hi!</span>
                </button>
              </div>
            </div>
          </div>
        </p> 
      </div>
    )
  }
}