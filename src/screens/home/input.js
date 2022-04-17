import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import { SUBMIT_ICON_URL } from '../../constants';
import styles from './styles';

const Input = (props) => {
  const [text, setText] = useState('');

  const { createUser, loading = false } = props || {};

  return (
    <View style={styles.parent}>
      <TextInput
        style={styles.textInput}
        placeholder="What's your name?"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity style={styles.closeButtonParent} onPress={() => (!!text && createUser({ name: text })) || null}>
        {!loading && (
          <Image
            style={styles.closeButton}
            source={{
              uri: SUBMIT_ICON_URL,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

Input.defaultProps = {
  loading: false,
};

export default Input;
