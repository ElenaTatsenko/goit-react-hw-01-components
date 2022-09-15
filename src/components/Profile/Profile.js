import PropTypes from 'prop-types';
import {ProfileWrap, Description, Avatar, Title, InfoBox, Stats, StatsItem, StatsQuantity, StatsLabel} from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileWrap>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Title>{username}</Title>
                <InfoBox>@{tag}</InfoBox>
                <InfoBox>{location}</InfoBox>
            </Description>

            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </Stats>
        </ProfileWrap>
    )
};
 
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  
}


