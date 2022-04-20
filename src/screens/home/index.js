import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import userApi from '../../api/userApi';
import { AuthContext } from '../../store/context';
import { getTimeOfDay, showToast } from '../../utils';

const Home = () => {
  const {
    authContext: { signOut },
  } = React.useContext(AuthContext);

  const [user, setUser] = React.useState(null);
  const [fetching, setFetching] = React.useState(false);

  const { loggedId } = React.useContext(AuthContext);
  React.useEffect(() => {
    const fetchUser = async () => {
      setFetching(true);
      try {
        const response = await userApi.getUser(loggedId);
        setUser(response);
      } catch (error) {
        showToast(error || 'The Request has errors.', true);
        setUser(null);
      }
      setFetching(false);
    };
    fetchUser();
  }, []);

  if (fetching) return <ActivityIndicator size="large" color="#000" style={styles.container} />;

  const timeOfDay = getTimeOfDay(new Date());

  const { name } = user || {};
  return (
    <View style={styles.container}>
      <AntDesign name="logout" size={17} color="#bababa" style={styles.logout} onPress={() => signOut()} />
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.textWelcome}>
        Good {timeOfDay.text}, {name}!
      </Text>
    </View>
  );
};

export default Home;
