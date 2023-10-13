import { View, Text, FlatList, Image, ScrollView, Pressable } from 'react-native'
import React, { useState,useRef} from 'react'
import image from 'C:/Users/KUMI/Desktop/HomeDepo/foodbev/assets/L.png'
const Carousel = () => {
    const data=[1,2,3,4,5]
    const [active,setActive]=useState(data[0])
    const scrollViewRef = useRef();

    const handleScroll = (event) => {
        // Calculate the active item based on the scroll position
        const contentWidth = data.length * 100; // Assuming each item takes 100 units of space
        const scrollX = event.nativeEvent.contentOffset.x;
        const newActive = Math.floor(scrollX / contentWidth * data.length);
        setActive(data[newActive]);
      };

  return (
   <View>
     <ScrollView
    ref={scrollViewRef}
    horizontal
    showsHorizontalScrollIndicator={false}
    onScroll={handleScroll} // Handle scroll event
    scrollEventThrottle={200} // Adjust this value as needed
    decelerationRate="fast" // Adjust the deceleration rate
    contentContainerStyle={{marginRight:50,marginLeft:10}}>
      {
        data.map((item,index)=>(
            <Pressable key={index} className='mr-4'
            onPress={()=>{setActive(item)
                scrollViewRef.current.scrollTo({
                    x: index * 100, // Adjust this value based on your item width
                    animated: true,})}}
            
            >
                <Image source={image}/>
                
            </Pressable>
        ))
      }
    </ScrollView>
    <View className='items-center justify-center flex-row mt-2'>
    {
        data.map((item,index)=>(
            <View key={index} className={`${active==item ? 'bg-blue-500/75':'bg-neutral-200' } h-1 w-6 mr-2 rounded-2xl`}>

        </View>
        ))
      }
        
    </View>
   </View>
  )
}

export default Carousel