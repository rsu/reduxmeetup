import React, { PropTypes, Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, FlatList, Image } from 'react-native';
import _ from 'lodash';

const MeetupPage = ({ memberReducer, onFetchMembers }) => {
  const renderHeader = () => {
    const {
      isFetchingMembers
    } = memberReducer;

    if (isFetchingMembers) {
      return <ActivityIndicator />
    }

    return(
      <TouchableOpacity onPress={() => onFetchMembers()}>
        <Text>Fetch Members</Text>
      </TouchableOpacity>
    )
  };

  const keyExtractor = (item, index) => item.id;

  const renderMember = ({item}) => {
    const thumbUrl = _.get(item, 'photo.thumb_link', null);
    return (
      <View style={{ margin: 5, flexDirection: 'row', alignItems: 'center' }}>
        {thumbUrl && <Image source={{ uri: thumbUrl }} style={{ width: 50, height: 50, marginRight: 10 }} /> }
        <Text>{item.name}</Text>
      </View>
    );
  }

  return(
    <View style={{ flex: 1, marginTop: 30 }}>
      <View style={{ backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        {renderHeader()}
      </View>
      <FlatList style={{ flex: 1}}
        data={memberReducer.members}
        keyExtractor={keyExtractor}
        renderItem={renderMember}
      />
    </View>
  )
}

export default MeetupPage;
