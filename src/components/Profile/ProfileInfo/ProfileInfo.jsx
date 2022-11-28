import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
    <div>
      <img className="profile__img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"></img>
    </div>
    <div>
      ava + descripion
    </div>

    <MyPosts />

  </div>
  );
};

export default Profile;