import React, {useState, useContext, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import SignupComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {useNavigation, useFocusEffect} from '@react-navigation/core';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required.'};
      });
    }
  };

  const onSubmit = () => {
    //validations
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please enter username.'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please enter firstname.'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please enter lastname.'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your email.'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter password.'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <SafeAreaView>
      <SignupComponent
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
        error={error}
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default SignUp;
