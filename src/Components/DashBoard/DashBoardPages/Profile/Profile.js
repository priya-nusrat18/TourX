import React , {useContext} from 'react';
import {UserContext} from '../../../../App'
import './Profile.css'

const Profile = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <section className="text-center dashboard-container ">
      <h2 class='py-3 text-dasboard-title'>Profile</h2>

        <div className="profile-wrap  text-center">
        
        <img src={loggedInUser?.photoURL} alt="" className="py-3 profile-img" />
                    <h3 className="py-3">{loggedInUser.name || loggedInUser.googleName } </h3>
                    <h5>{loggedInUser.email }</h5>
                    
            </div>
            </section>
    );
};

export default Profile;