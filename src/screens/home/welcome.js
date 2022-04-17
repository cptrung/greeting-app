import { Fragment } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { getTimeOfDay } from '../../utils';

const Welcome = (props) => {
  const { name } = props || {};

  if (!name) return <Text style={[styles.textWelcome]}>Welcome!</Text>;

  const timeOfDay = getTimeOfDay(new Date());
  return (
    <Fragment>
      <Text style={[styles.text]}>
        Good {timeOfDay.text}, {name}!
      </Text>
      <Ionicons style={styles.icon} name={timeOfDay.icon} size={40} color={timeOfDay.color} />
    </Fragment>
  );
};

Welcome.defaultProps = {
  name: '',
};

export default Welcome;
