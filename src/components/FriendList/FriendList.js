import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
    const friendsListItem = friends.map(({ avatar, name, isOnline, id }) =>
    (<li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </li>
    ));
    return <ul class="friend-list">
        {friendsListItem}
    </ul>
}

   

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    }