import React from 'react';
import Details from './Details';
import Picture from './Picture';


const Profile = (props) => {
    console.log(props.data);
    return <div>
        <h1>Profile</h1>
        <Details name={props.data.name} email={props.data.email} />
        <Picture image={props.data.picture} />
    </div>
}

// class Profile extends React.Component {
//     render() {
//         console.log(this.props.data);
//         return (
//             <div>
//                 <h1>Profile</h1>
//             </div>
//         )
//     }
// }

export default Profile;