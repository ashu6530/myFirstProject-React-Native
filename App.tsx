import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import FlatCards from './components/FlatCards';
import MovingCard from './components/MovingCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (<SafeAreaView>
    <ScrollView>
      <FlatCards/>
      <MovingCard/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
    </ScrollView>
  </SafeAreaView>);
};

export default App;
