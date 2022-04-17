import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import styles from './styles';
import Welcome from './welcome';
import Input from './input';
import userApi from '../../api/userApi';
import { SAVED_KEY } from '../../constants';
import { showToast } from './../../utils';

const Home = () => {
  const [user, setUser] = React.useState(null);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      // Get key from store to request input name.
      const savedId = await SecureStore.getItemAsync(SAVED_KEY);
      setFetching(true);
      try {
        const response = await userApi.getUser({ id: savedId });
        setUser(response);
        setFetching(false);
      } catch (error) {
        setUser(null);
        setFetching(false);
      }
    };
    fetchUser();
  }, []);

  const createUser = async (values) => {
    try {
      const savedId = await SecureStore.getItemAsync(SAVED_KEY);
      const response = await userApi.createUser({ id: savedId, ...values });

      // Save to store
      await SecureStore.setItemAsync(SAVED_KEY, response.id);
      setUser(response);
      showToast('Your name sent successfully.');
    } catch (error) {
      setUser(null);
      showToast('There was an error trying to submit.', true);
    }
  };

  if (!user && fetching) return <ActivityIndicator size="large" color="#000" style={styles.container} />;

  return (
    <View style={styles.container}>
      <Welcome {...user} />
      {!user && <Input createUser={createUser} />}
    </View>
  );
};

export default Home;
