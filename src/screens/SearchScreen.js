import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                placeholder="search"
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({});
