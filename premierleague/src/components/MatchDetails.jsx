import React from 'react';

const MatchDetails = ({ match }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        {match.homeTeam.name} vs {match.awayTeam.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                        {match.tournament.name} - {match.season.name}
                    </p>
                </div>
                <div className="text-gray-600 text-sm">
                    <p>{new Date(match.startTimestamp * 1000).toLocaleString()}</p>
                    {match.venue && <p>{match.venue.name}</p>}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-600 mb-2">
                        <span className="font-bold text-gray-800">Round:</span>{' '}
                        {match.roundInfo.round}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <span className="font-bold text-gray-800">Status:</span>{' '}
                        {match.status.description}
                    </p>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-800 font-bold text-lg">
                            {match.homeTeam.name}
                        </p>
                        <p className="text-4xl text-gray-800 font-bold">
                            {match.homeScore.current}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-800 font-bold text-lg">
                            {match.awayTeam.name}
                        </p>
                        <p className="text-4xl text-gray-800 font-bold">
                            {match.awayScore.current}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-600 text-sm">
                    <span className="font-bold text-gray-800">Winner:</span>{' '}
                    {match.winnerCode === 1
                        ? match.homeTeam.name
                        : match.winnerCode === 2
                            ? 'Draw'
                            : match.awayTeam.name}
                </p>
            </div>
        </div>
    );
};

export default MatchDetails;
