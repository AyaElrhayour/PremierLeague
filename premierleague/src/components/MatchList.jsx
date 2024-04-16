import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../redux/matchSlice';
import MatchDetails from './MatchDetails'; // Importing MatchDetails component

const MatchList = () => {
  const dispatch = useDispatch();
  const { matches, loading, error } = useSelector((state) => state.matches);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const matchesPerPage = 3;
  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Premier League Match Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMatches.map((match) => (
              <div
                  key={match.id}
                  className="bg-black rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-green-500 transform transition duration-300 ease-in-out"
                  onClick={() => handleMatchClick(match)}
              >
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-white">
                    {match.homeTeam.name} vs {match.awayTeam.name}
                  </h2>
                  <p className="text-gray-300">
                    Date: {new Date(match.startTimestamp * 1000).toLocaleDateString()}
                  </p>
                  {match.venue && (
                      <p className="text-gray-300">Venue: {match.venue.name}</p>
                  )}
                  {match.homeScore && match.awayScore && (
                      <p className="text-gray-300">
                        Score: {match.homeScore.current} - {match.awayScore.current}
                      </p>
                  )}
                </div>
              </div>
          ))}
        </div>
        {selectedMatch && <MatchDetails match={selectedMatch} />} {/* Conditionally render MatchDetails */}
        <div className="flex justify-center mt-8">
          <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Previous
            </button>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            Page {currentPage}
          </span>
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastMatch >= matches.length}
                className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
  );
};

export default MatchList;