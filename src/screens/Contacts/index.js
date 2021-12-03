import React, {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity, View} from 'react-native';
import Icons from '../../components/Common/Icons';
import ContactsComponent from '../../components/ContactsComponent';
import CustomButton from '../../components/Common/CustomButton';
import {GlobalContext} from '../../context/Provider';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icons type="material" name="menu" size={25} style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <ContactsComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        loading={loading}
        data={data}
      />
    </View>
  );
};

export default Contacts;
