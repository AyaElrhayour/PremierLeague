import React from 'react';

const MatchDetails = ({ match }) => {
    return (
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
                {match.homeTeam.name} vs {match.awayTeam.name}
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p><span className="font-bold">Tournament:</span> {match.tournament.name}</p>
                    <p><span className="font-bold">Season:</span> {match.season.name}</p>
                    <p><span className="font-bold">Round:</span> {match.roundInfo.round}</p>
                    <p><span className="font-bold">Status:</span> {match.status.description}</p>
                    <p><span className="font-bold">Start Date:</span> {new Date(match.startTimestamp * 1000).toLocaleDateString()}</p>
                    {match.venue && (
                        <p><span className="font-bold">Venue:</span> {match.venue.name}</p>
                    )}
                </div>
                <div>
                    <p><span className="font-bold">Home Score:</span> {match.homeScore.current}</p>
                    <p><span className="font-bold">Away Score:</span> {match.awayScore.current}</p>
                    <p><span className="font-bold">Injury Time 1:</span> {match.time.injuryTime1}</p>
                    <p><span className="font-bold">Injury Time 2:</span> {match.time.injuryTime2}</p>
                    <p><span className="font-bold">Current Period Start:</span> {new Date(match.time.currentPeriodStartTimestamp * 1000).toLocaleString()}</p>
                    <p><span className="font-bold">Winner:</span> {match.winnerCode === 1 ? match.homeTeam.name : match.winnerCode === 2 ? "Draw" : match.awayTeam.name}</p>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;