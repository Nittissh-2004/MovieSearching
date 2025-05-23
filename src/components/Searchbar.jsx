import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 ">
      <input
        type="text"
        className="border p-2 w-full rounded-xl border-green-900"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent ... px-4 py-2 cursor-pointer  italic hover:scale-95">Search</button>
    </form>
  );
};

export default SearchBar;