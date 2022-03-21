const axios = require('axios');
const PropTypes = require('prop-types');

const gamesPropType = PropTypes.shape({
  classifier: PropTypes.string.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape({
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    score: PropTypes.string,
  })).isRequired,
});

const getGames = async () => axios.get('/api/v1/games')
  .then((response) => response.data);

const getTeams = async () => axios.get('/api/v1/teams')
  .then((response) => response.data);

module.exports = {
  gamesPropType,
  getGames,
  getTeams,
};
