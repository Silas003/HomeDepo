import { View, Text, Image } from 'react-native'
import React from 'react'
import shop from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image4.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import * as Icon from 'react-native-heroicons/outline'

const Online = () => {
  return (
    <View className='mt-6 bg-white ml-3 mr-4 rounded-xl p-2'>
      <View className='items-center justify-around ml-2 space-y-1 flex-row  '>
            <View>
                <Text style={{fontSize:hp(2.9)}} className='text-center font-semibold'>Online Reservation</Text>
                <Text style={{fontSize:hp(2.2)}} className='text-neutral-400'>Table booking</Text>
            </View>
            <Image source={shop} style={{width:hp(12),height:hp(12)}}/>
      </View> 
      <View className='items-center justify-around ml-2 space-y-1 flex-row '>
            <View className=' border-2 p-1 rounded-full   border-blue-400 flex-row items-center'>
                <Icon.CalendarIcon color={'dodgerblue'}/>
                <Text style={{fontSize:hp(2.4)}} className='text-center text-blue-400 font-semibold'>Reserve a table</Text>
                </View>
            <View className=' border-2 p-1 rounded-full   border-blue-400 '>
                <Text style={{fontSize:hp(2.4)}} className='text-center text-blue-400  font-semibold'>My Reservations</Text>
            </View>
      </View>
    </View>
  )
}

export default Online