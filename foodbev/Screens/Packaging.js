import { View, Text, Image } from 'react-native'
import React from 'react'
import shop from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image1.png'
import motor from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image3.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const Packaging = () => {
  return (
    <View className='mt-6 bg-white ml-3 mr-4 rounded-xl flex-row items-center justify-around'>
      <View className='items-center justify-center ml-2 space-y-1  '>
        <Image source={shop} style={{width:hp(15),height:hp(15)}}/>
        <Text style={{fontSize:hp(2.9)}} className='text-center font-semibold'>Store Pickup</Text>
        <Text style={{fontSize:hp(2.8)}} className='text-neutral-400'>Best quality</Text>
      </View>
      <View className='w-[1] h-28 bg-neutral-300 '>
        
      </View>
      <View className='items-center '>
        <Image source={motor} style={{width:hp(15),height:hp(15)}}/>
        <Text style={{fontSize:hp(2.9)}} className='text-center font-semibold'>Delivery</Text>
        <Text style={{fontSize:hp(2.8)}} className='text-neutral-400'>Always on time</Text>
      </View>
    </View>
  )
}

export default Packaging