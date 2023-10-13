import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline'
import { Image } from 'react-native'
import image from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/Image.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Carousel from './Carousel'
import Packaging from './Packaging'
import Online from './Online'
import Promotion from './Promotion'
import Bottom from './Bottom'
const Home = () => {
  return (
    <View className='flex-1 ml-2  bg-neutral-100'>
        <ScrollView>
            <View className='flex-row mt-3  p-2 items-center justify-between'>
                <View className='flex-row items-center justify-between'>
                    <Image source={image}/>
                    <View>
                        <Text style={{fontSize:hp(2.8)}}>Welcome to</Text>
                        <Text style={{fontSize:hp(3.1)}} className='font-bold'>Sample Restaurant</Text>
                    </View>
                </View>
                <View className='flex-row bg-neutral-200/75 rounded-2xl justify-between  items-center'>
                    <View className='border-r mr-2 border-neutral-400'>
                    <Icon.EllipsisHorizontalIcon color={'black'} size={30}  />
                    </View>
                    <Icon.XCircleIcon color={'black'}/>
                </View>
        </View>
        {/* carousel slider */}
        <Carousel/>
        {/* packaging */}
        <Packaging/>
        {/* online */}
        <Online/>
        <Text className='ml-3 font-semibold text-2xl mt-4'>Promotion Campaign</Text>
        {/* promotion */}
        <Promotion/>
        
        </ScrollView>
        <Bottom/>
    </View>
  )
}


export default Home