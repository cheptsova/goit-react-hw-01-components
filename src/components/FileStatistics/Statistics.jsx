import PropTypes from 'prop-types';

import StatisticsModule from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={StatisticsModule.statistics}>
      {title && <h2 className={StatisticsModule.title}>{title}</h2>}
      <ul className={StatisticsModule.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={StatisticsModule.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={StatisticsModule.label}>{label}</span>
            <span className={StatisticsModule.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
