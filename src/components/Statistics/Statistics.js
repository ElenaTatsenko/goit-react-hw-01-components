import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const statsEl = stats.map(({ id, label, percentage }) => (
    <li key={id} class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  ));

  return (
    <section class="statistics">
      {title ? <h2 class="title">{title}</h2> : ''}
      <ul class="stat-list">{statsEl}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
