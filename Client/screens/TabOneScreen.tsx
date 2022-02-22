import React, { Fragment, useState } from 'react';
import { Button, StyleSheet, FlatList } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// import Dialog, { DialogTitle, DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const contacts = [
    {
      fname: 'omri',
      lname: 'jukin',
      nickname: 'Tribore',
      gender: 'male',
    },
    {
      fname: 'roee',
      lname: 'jukin',
      nickname: 'Quatronostro',
      gender: 'male',
    },
    {
      fname: 'guill',
      lname: 'jukin',
      nickname: 'Guille',
      gender: 'male',
    },
    {
      fname: 'ido',
      lname: 'jukin',
      nickname: 'Dodo',
      gender: 'male',
    },
  ];
  // const date = `${new Date().getDay}/${new Date().getMonth}/${new Date().getFullYear}`;
  const getNewDate = () => {
    return (new Date().toLocaleDateString())
  }
  const getNewClock = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    return time;
  }

  // const getFormattedDate = (date: Date): string => {
  //   return date.toLocaleDateString();
  // }
  // const getDate = () => {
  //   let now = new Date();
  // }

  const posts = [
    {
      publisher: 'me',
      datePublished: (<Text>{getNewDate()} at {getNewClock()}</Text>),
      title: 'bananas',
      description: 'are insane',
      comments: [
        {
          publisher: 'you',
          datePublished: (<Text>{getNewDate()}</Text>),
          description: 'you are correct',
        }
      ],
      likes: 10,
      dislikes: 8,
      overallPoints: 2,
    },
    {
      publisher: 'me',
      datePublished: (<Text>{getNewDate()} at {getNewClock()}</Text>),
      title: 'bananas',
      description: 'are insane',
      comments: [
        {
          publisher: 'you',
          datePublished: (<Text>{getNewDate()}</Text>),
          description: 'you are correct',
        }
      ],
      likes: 10,
      dislikes: 8,
      overallPoints: 2,
    },
    {
      publisher: 'me',
      datePublished: (<Text>{getNewDate()} at {getNewClock()}</Text>),
      title: 'bananas',
      description: 'are insane',
      comments: [
        {
          publisher: 'you',
          datePublished: (<Text>{getNewDate()}</Text>),
          description: 'you are correct',
        }
      ],
      likes: 10,
      dislikes: 8,
      overallPoints: 2,
    },
  ];

  // const keys = posts.map(c => ({key: c.datePublished}));

  const PostsRender = () => {
    return (
      <Fragment>
        {
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}>
            <FlatList
              data={posts}
              renderItem={({item}) => (
                <View style={{paddingTop: 10, paddingBottom: 10}}>
                  <Text style={styles.author}>{item.publisher}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text>Published at {item.datePublished}</Text>
                </View>
              )
              }
            />
          </View>
        }
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <PostsRender />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     fontWeight: 'bold',
     height: 44,
     borderBottomColor: 'black',
     borderBottomWidth: 1,
   },
  itemContainer: {
    flex: 1,
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  contactInfo: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  contactSubInfo: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  author: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  description: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
