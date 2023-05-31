import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BookMySeat = () => {
  const selectedSeats = [];
  let priceSeats = 0;
  const [row1, setRow1] = useState([
    {id: 1, price: 100, empty: true, selected: false},
    {id: 2, price: 100, empty: false, selected: false},
    {id: 3, price: 100, empty: true, selected: false},
    {id: 4, price: 100, empty: true, selected: false},
    {id: 5, price: 100, empty: false, selected: false},
    {id: 6, price: 100, empty: true, selected: false},
    {id: 7, price: 100, empty: true, selected: false},
    {id: 8, price: 100, empty: false, selected: false},
    {id: 9, price: 100, empty: true, selected: false},
    {id: 10, price: 100, empty: true, selected: false},
    {id: 11, price: 100, empty: true, selected: false},
    {id: 12, price: 100, empty: false, selected: false},
    {id: 13, price: 100, empty: true, selected: false},
    {id: 14, price: 100, empty: true, selected: false},
    {id: 15, price: 100, empty: false, selected: false},
    {id: 16, price: 100, empty: true, selected: false},
    {id: 17, price: 100, empty: true, selected: false},
    {id: 18, price: 100, empty: false, selected: false},
  ]);
  const [row2, setRow2] = useState([
    {id: 19, price: 100, empty: true, selected: false},
    {id: 20, price: 100, empty: false, selected: false},
    {id: 21, price: 100, empty: true, selected: false},
    {id: 22, price: 100, empty: true, selected: false},
    {id: 23, price: 100, empty: false, selected: false},
    {id: 24, price: 100, empty: true, selected: false},
    {id: 25, price: 100, empty: true, selected: false},
    {id: 26, price: 100, empty: true, selected: false},
    {id: 27, price: 100, empty: false, selected: false},
    {id: 28, price: 100, empty: true, selected: false},
    {id: 29, price: 100, empty: true, selected: false},
    {id: 30, price: 100, empty: true, selected: false},
    {id: 31, price: 100, empty: true, selected: false},
    {id: 32, price: 100, empty: true, selected: false},
    {id: 33, price: 100, empty: false, selected: false},
    {id: 34, price: 100, empty: true, selected: false},
    {id: 35, price: 100, empty: false, selected: false},
    {id: 36, price: 100, empty: true, selected: false},
  ]);
  const onSelectedRow1 = index => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map(item => {
      tempSeats.push(item);
    });
    setRow1(tempSeats);
  };
  const onSelectedRow2 = index => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map(item => {
      tempSeats.push(item);
    });
    setRow2(tempSeats);
  };
  const getAllSeats = () => {
    row1.map(item => {
      if (item.selected == true) {
        selectedSeats.push(item.id);
      }
    });
    row2.map(item => {
      if (item.selected == true) {
        selectedSeats.push(item.id);
      }
    });
    return selectedSeats;
  };
  const getAllPrice = () => {
    row1.map(item => {
      if (item.selected == true) {
        priceSeats += item.price;
      }
    });
    row2.map(item => {
      if (item.selected == true) {
        priceSeats += item.price;
      }
    });
    return priceSeats;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <Image
          source={require('../src/images/time.png')}
          style={{
            width: 20,
            height: 20,
            margin: 10,
            opacity: 0.7,
            alignSelf: 'flex-start',
          }}></Image>
        <Text>Otobüs Salı'yı Çarşamba'ya bağlayan gece kalkacaktır.</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../src/images/seat2.png')}
            style={{
              width: 32,
              height: 32,
              marginStart: 15,
              opacity: 0.7,
              alignSelf: 'flex-start',
              backgroundColor: '#69B2FF',
              borderRadius: 6,
            }}></Image>
          <Text> Dolu - Erkek</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../src/images/seat2.png')}
            style={{
              width: 32,
              height: 32,
              marginStart: 10,
              opacity: 1,
              alignSelf: 'flex-start',
              backgroundColor: '#FFB5E9',
              borderRadius: 6,
            }}></Image>
          <Text> Dolu - Kadın</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../src/images/seat2.png')}
            style={{
              width: 32,
              height: 32,
              marginStart: 10,
              opacity: 1,
              alignSelf: 'flex-start',
              tintColor: 'black',
            }}></Image>
          <Text> Boş Koltuk</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '70%',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'black',
            marginBottom: 90,
          }}>
          <Image
            source={require('../src/images/steering.png')}
            style={{
              width: 32,
              height: 32,
              margin: 10,
              opacity: 0.7,
              alignSelf: 'flex-end',
            }}></Image>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View>
              <FlatList
                data={row1}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                      style={{margin: 7}}
                      onPress={() => {
                        if (item.selected == false && item.empty == false) {
                          alert('Koltuk zaten seçili');
                        } else {
                          onSelectedRow1(index);
                        }
                      }}>
                      {item.empty == false && item.selected == true ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: 32,
                              height: 32,
                              tintColor: 'black',
                              backgroundColor: '#69FF69',
                              borderRadius: 6,
                            }}
                            source={require('../src/images/seat2.png')}
                          />
                          <Text
                            style={{
                              position: 'absolute',
                              fontSize: 16,
                              fontWeight: 'bold',
                            }}>
                            {item.id}
                          </Text>
                        </View>
                      ) : item.empty == true && item.selected == false ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: 32,
                              height: 32,
                            }}
                            source={require('../src/images/seat.png')}
                          />
                          <Text style={{position: 'absolute', fontSize: 16}}>
                            {item.id}
                          </Text>
                        </View>
                      ) : item.empty == false && item.selected == false ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: 32,
                              height: 32,
                              tintColor: 'black',
                              backgroundColor: '#FFB5E9',
                              borderRadius: 6,
                            }}
                            source={require('../src/images/seat2.png')}
                          />
                          <Text
                            style={{
                              position: 'absolute',
                              fontSize: 16,
                              fontWeight: 'bold',
                            }}>
                            {item.id}
                          </Text>
                        </View>
                      ) : null}
                    </Pressable>
                  );
                }}
              />
            </View>

            <View>
              <FlatList
                data={row2}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                      style={{margin: 7}}
                      onPress={() => {
                        if (item.selected == false && item.empty == false) {
                          alert('Koltuk zaten seçili');
                        } else {
                          onSelectedRow2(index);
                        }
                      }}>
                      {item.empty == false && item.selected == true ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: 32,
                              height: 32,
                              tintColor: 'black',
                              backgroundColor: '#69FF69',
                              borderRadius: 6,
                            }}
                            source={require('../src/images/seat2.png')}
                          />
                          <Text
                            style={{
                              position: 'absolute',
                              fontSize: 16,
                              fontWeight: 'bold',
                            }}>
                            {item.id}
                          </Text>
                        </View>
                      ) : item.empty == true && item.selected == false ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: 32,
                              height: 32,
                            }}
                            source={require('../src/images/seat.png')}
                          />
                          <Text style={{position: 'absolute', fontSize: 16}}>
                            {item.id}
                          </Text>
                        </View>
                      ) : item.empty == false && item.selected == false ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{
                              width: 32,
                              height: 32,
                              tintColor: 'black',
                              backgroundColor: '#69B2FF',
                              borderRadius: 6,
                            }}
                            source={require('../src/images/seat2.png')}
                          />
                          <Text
                            style={{
                              position: 'absolute',
                              fontSize: 16,
                              fontWeight: 'bold',
                            }}>
                            {item.id}
                          </Text>
                        </View>
                      ) : null}
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            height: 100,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text style={{color: 'black'}}>
              {'Seçili Koltuklar: ' + getAllSeats()}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{color: 'red'}}>
              {'Fiyat: ' + getAllPrice() + 'TL'}
            </Text>
            <TouchableOpacity
              style={{
                width: '35%',
                height: 25,
                borderRadius: 8,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Bilet Al</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookMySeat;
