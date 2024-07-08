import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  FlatList,
} from 'react-native';
import i18next, {languageResources} from './services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from './services/languagesList.json';

const App = () => {
  const [visible, setVisible] = useState(false);
  // t: to use this 't' method to get the values for the Translation
  const {t} = useTranslation();

  // here in the 'changeLng' function we will get the language'lng' and for changing language we use 'i18next' that we imported and there is a method '.changeLanguage' and we change the language to this 'lng', that we got here as an argument 
  // .. and when we change the language we need to set the visible to false 'setVisible(false)' so modal will be disappeared
  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  // {/* user translate between different languages for this we used modal */}
  // visible={visible}: modal is visible when the state is true, 
  // when the button is clicked the modal is visible so we need to edit below onPress, i.e is in button 'change-language', in this we set the visible true
  return (
    <SafeAreaView style={styles.container}>
      {/* we also 'onRequestClose' we want to set the visible false like that 'setVisible(false)' */}
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.languagesList}>
          <FlatList
        //  data={Object.keys(languageResources)} : for the data we will use object dot keys and we will extract the keys of language resource (the keys are english and swedish)
        // ... languageResources: we imported this from i18next.
        // .. then we will use these keys to extrack the name of this languages (languages that are present in 'languagesList.json') 
        // .. so for the renderItem we will render the touchableOpacity, in which we have a text, so the text will be the name of the language and to access the name of the language, we can get the language list,
        // .. so first we need to import the 'languagesList' from 'services'
        // .. so now we can use those keys to access the name of the language
            data={Object.keys(languageResources)}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.languageButton}
                // for change the language we can add here onPress in the button and we went to change the language to the item 'changeLng(item)'
                onPress={() => changeLng(item)}>
                <Text style={styles.lngName}>
                  {/* // so here when we imported the languagesList we can then access the item which will be a key and then when we selected a language we can get the native name of it so we go back to 'languagesList' we have a name and nativeName and we will use this native name  */}
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <Text style={styles.text}>{t('welcome')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
