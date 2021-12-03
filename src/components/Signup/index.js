import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/input';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {LOGIN} from '../../constants/routeNames';
import Message from '../Common/Message';

const SignupComponent = ({
  onChange,
  onSubmit,
  form,
  errors,
  loading,
  error,
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
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              retryFn={() => {
                console.log('222', 222);
              }}
              danger
              message={error?.error}
            />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value})}
            //value={value}
            iconPosition="right"
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First Name"
            placeholder="Enter First name"
            onChangeText={value => onChange({name: 'firstName', value})}
            // value={value}
            iconPosition="right"
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last name"
            onChangeText={value => onChange({name: 'lastName', value})}
            // value={value}
            iconPosition="right"
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => onChange({name: 'email', value})}
            // value={value}
            iconPosition="right"
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            onChangeText={value => onChange({name: 'password', value})}
            // value={value}
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
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            title="Submit"
            primary
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
