import * as React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AuthContext } from '../../store/context';
import styles from './styles';
import InputField from '../../components/inputField';
import userApi from '../../api/userApi';
import { showToast } from '../../utils';

// Validate form.
const schema = yup.object().shape({
  id: yup.string().required('Field is Required'),
  password: yup.string().required('Field is Required'),
});

const initialValues = {
  id: '',
  password: '',
};

export const SignIn = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    authContext: { signIn },
  } = React.useContext(AuthContext);

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    if (loading) return null;

    setLoading(true);
    try {
      await userApi.getUser(values.id);
      signIn({ id: values.id });
      setLoading(false);
    } catch (error) {
      showToast(error || 'Account does not exist', true);
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textSignIn}>Welcome</Text>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
          {({ handleChange, handleSubmit, values }) => (
            <View style={{ width: '50%' }}>
              <InputField
                name="id"
                style={styles.input}
                placeholder="Id"
                value={values.id}
                onChangeText={handleChange('id')}
              />
              <InputField
                name="password"
                style={styles.input}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                {(loading && <ActivityIndicator color="#000" />) || <Text style={styles.textButton}>Login</Text>}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

SignIn.defaultProps = {
  onSubmit: null,
};
