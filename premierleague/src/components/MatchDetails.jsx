import React from 'react';

const MatchDetails = ({ match }) => {
  return (
    <div>
      <h2>Match Details</h2>
      <p>{match.homeTeam.name} vs {match.awayTeam.name}</p>
      <p>Date: {match.startDate}</p>
      <p>Venue: {match.venue.name}</p>
    </div>
  );
};

export default MatchDetails;