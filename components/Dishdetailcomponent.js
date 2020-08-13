import React, {Component,useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Card} from 'react-native-elements';



function RenderDish(props){

		if(props.dish != null ){
			return(
                <SafeAreaView>
				<View>
				<Card featuredTitle={props.dish.name}
				image = {require('./images/abhi.jpg')}>
				<Text style={{margin:10}}>
				{props.dish.description}</Text>
				</Card>
				</View>
                </SafeAreaView>
			);
		}else{
			return(
				<View>
				</View>
			);
		}
}

function Dishdetailcomponent({route,navigation}){
	const [dishes,changedishes] = useState( [
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
	const {dishId} = route.params;
	return(<RenderDish dish = {dishes[+dishId]}/>);
}

export default Dishdetailcomponent;