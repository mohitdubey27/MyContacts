import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/input';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {REGISTER} from '../../constants/routeNames';
import Message from '../Common/Message';

const LoginComponent = ({
  error,
  onChange,
  justSignedUp,
  onSubmit,
  loading,
  form,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to MyContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid Credentials"
            />
          )}
          {error?.error && <Message onDismiss danger message={error?.error} />}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value})}
            iconPosition="right"
            value={form.userName || null}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            onChangeText={value => onChange({name: 'password', value})}
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
          />
          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            title="Submit"
            primary
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
