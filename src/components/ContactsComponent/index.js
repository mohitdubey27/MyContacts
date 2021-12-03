import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import AppModal from '../Common/AppModal';
import Message from '../../components/Common/Message';
import Loader from '../../components/Common/Loader';

const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('ITem', item);
    return (
      <TouchableOpacity>
        <Text>Contact 1</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello from the contacts</Text>
          </View>
        }
        title="My Profile"
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default ContactsComponent;
