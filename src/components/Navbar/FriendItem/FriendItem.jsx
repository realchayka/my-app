import classes from "./Friend.module.css";




const Friend = (props) => {
    let friendsContainer = props.state.friends.map(friend => <FriendItem name={friend.name} />)
    return (
       <div></div>
    );
};

export default Friend;
