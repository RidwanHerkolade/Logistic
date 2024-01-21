import React from 'react'
import TripCompleted from './TripCompleted'

const Profile = () => {
  return (
      <section>
          <div className='profile__section'>
              <aside>
                <div className='profile__sections'>
                    <div className='profile__images'>
                         <img src='../img/abiodun.png' alt=''/>
                    </div>
                    <h2 className='profile__name'>Ademola Lookman</h2>
                    <small className='profile__email'>succexfullee@gmail.com</small>
                </div>
              </aside>
              <div className=''>
                  <TripCompleted/>
                  
              </div>
          </div>
      </section>
  )
}

export default Profile
