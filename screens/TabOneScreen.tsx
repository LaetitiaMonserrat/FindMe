import * as React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let coords = '';
  let lat = '';
  let long = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location); //Toutes les info de géolocalisation
    coords = JSON.stringify(location["coords"]);
    lat = parseFloat(JSON.stringify(location["coords"]["latitude"]));
    long = parseFloat(JSON.stringify(location["coords"]["longitude"]));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latitude :</Text>
      <Text style={styles.title}>{lat}</Text>
      <Text style={styles.title}>Longitude :</Text>
      <Text style={styles.title}>{long}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.container}>
          <MapView 
            style={styles.map} 
            region={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height*0.75),
  },
});
