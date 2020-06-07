const SearchWords = {};

SearchWords.GetWords = async (word) => {

    try {
        const response = await fetch(`https://api.datamuse.com/words?ml=${word}`);
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export default SearchWords;