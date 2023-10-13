import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { items } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Promotion = () => {
  return (
    <View className='ml-3'>
      <FlatList
      //horizontal
      numColumns={2}
      data={items}
      key={item=>item.id}
      renderItem={({item,index})=>(
        <View className='mr-3 mt-4'>
            <Image source={item.image} style={{width:hp(25),height:hp(25)}}/>
            <Text className='font-bold text-xl'>{item.discount}</Text>
            <Text className='font-bold text-xl'>{item.percent}</Text>
            <Text className='text-neutral-500'>{item.date}</Text>
        </View>
      )}/>
    </View>
  )
}

export default Promotion