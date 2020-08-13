import React, {Component,useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {ListItem} from 'react-native-elements';
import Dishdetailcomponent from './Dishdetailcomponent';

function MenuComponent({navigation}) {
	const [dishes, setdishes] = useState([
        {
        id: 0,
        name:'Uthappizza',
        image: 'images/abhi.jpg',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        featured: true,
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                    
        },
        {
        id: 1,
        name:'Zucchipakoda',
        image: 'images/patelharshiv.jpg',
        category: 'appetizer',
        label:'',
        price:'1.99',
        featured: false,
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
        },
        {
        id: 2,
        name:'Vadonut',
        image: 'images/pathakharsh.jpg',
        category: 'appetizer',
        label:'New',
        price:'1.99',
        featured: false,
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
        },
        {
        id: 3,
        name:'ElaiCheese Cake',
        image: 'images/veeru.jpg',
        category: 'dessert',
        label:'',
        price:'2.99',
        featured: false,
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        }
    ]);
	console.log(dishes);
	const renderMenuItem = ({item, index}) => {
		return(
			<ListItem
			key = {index}
			title = {item.name}
			subtitle = {item.description}
			hideChevron = {true}
			onPress = {() => navigation.navigate('Dishdetailcomponent',{dishId: item.id})}
			leftAvatar = {{source: require('./images/patelharshiv.jpg')}}
			/>
			)
	}
	return (
        <SafeAreaView>
		<View>
			<FlatList
				data = {dishes}
				renderItem = { renderMenuItem }
				keyExtractor = {item => item.id.toString()}
			/>
		</View>
        </SafeAreaView>
	)
}

export default MenuComponent