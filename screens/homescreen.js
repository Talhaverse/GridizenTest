// HomeScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  // useEffect(() => {
  //   // Fetch posts from the API
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => {
  //       setPosts(json); // Set fetched posts
  //       setIsLoading(false); // Update loading state
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddPost = () => {
    // Add the new post to the list
    const newPost = {
      id: posts.length + 1, // Assuming the ID is incremental
      title: newPostTitle,
      body: newPostBody,
    };

    setPosts([...posts, newPost]);
    setIsModalVisible(false);
    setNewPostTitle('');
    setNewPostBody('');
  };

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20}}>
        List of Posts
      </Text>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          padding: 10,
          backgroundColor: '#442445',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>Add Post</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} onRequestClose={toggleModal}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder="Enter post title"
            value={newPostTitle}
            onChangeText={setNewPostTitle}
            style={{borderBottomWidth: 1, marginBottom: 10, width: '80%'}}
          />
          <TextInput
            placeholder="Enter post body"
            value={newPostBody}
            onChangeText={setNewPostBody}
            multiline
            numberOfLines={4}
            style={{borderBottomWidth: 1, marginBottom: 10, width: '80%'}}
          />
          <Button title="Add Post" onPress={handleAddPost} />
        </View>
      </Modal>

      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Product-Sans-Regular',
              }}>
              {item.title}
            </Text>
            <Text style={{fontFamily: 'Product-Sans-Regular'}}>
              {item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
