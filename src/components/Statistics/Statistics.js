import PropTypes from 'prop-types';
import {StatisticsWrap, Title, StatList, StatItem, StatsLabel, StatsPercentage} from './Statistic.styled'

export const Statistics = ({ title, stats }) => {
  const statsEl = stats.map(({ id, label, percentage }) => (
    <StatItem key={id}>
      <StatsLabel>{label}</StatsLabel>
      <StatsPercentage>{percentage}%</StatsPercentage>
    </StatItem>
  ));

  return (
    <StatisticsWrap>
      {title ? <Title>{title}</Title> : ''}
      <StatList>{statsEl}</StatList>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
