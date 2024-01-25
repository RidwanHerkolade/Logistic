import React from 'react'
import "./Profile.css"
import ProfileContent from './ProfileContent'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Profile = () => {
  return (
      <section className='profile__sections'>
          <div className='profile__section'>
              <aside className='profile__aside'>   
                <div className='profile__asideContent'>
                <div className='menu__open'> <MenuOpenIcon/></div>     
                    <div className='profile__images'>
                         <img src='../img/abiodun.png' alt=''/>
                    </div>
                    <h2 className='profile__name'>Ademola Lookman</h2>
                    <small className='profile__email'>succexfullee@gmail.com</small>
                </div> 
              </aside>
              <div className='profilecon__bg' >
                  <ProfileContent/>
                  
              </div>
          </div>
      </section>
  )
}

export default Profile
