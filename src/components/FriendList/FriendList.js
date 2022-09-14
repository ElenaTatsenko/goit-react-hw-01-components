import PropTypes from 'prop-types';
import {FriendsListWrap, FriendsItem, FriendStatus, FriendAvatar, FriendName} from './FriendList.styled'

export const FriendList = ({ friends }) => {
    const friendsListItem = friends.map(({ avatar, name, isOnline, id }) =>
    (<FriendsItem key={id}>
        <FriendStatus status={isOnline}></FriendStatus>
        <FriendAvatar
            src={avatar}
            alt="User avatar"
            width="48"
        />
        <FriendName>{name}</FriendName>
    </FriendsItem>
    ));
    return <FriendsListWrap>
        {friendsListItem}
    </FriendsListWrap>
}

   

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}