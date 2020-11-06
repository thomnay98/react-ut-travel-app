import React, { Component } from 'react';

import Client from './Contentfull';

const TourContext = React.createContext();

class TourProvider extends Component {

    state = {
        tours: [],
        sortedTours: [],
        toursHot: [],
        toursNew: [],
        loading: true,
        place: "Tất cả",
        vehicle: "Tất cả",
        price: 0,
        minPrice: 0,
        maxPrice: 0
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "utTravel"
            });

            let tours = this.formatData(response.items);
            let toursHot = tours.filter(tour => tour.hot === true);
            let toursNew = tours.filter(tour => tour.new === true);
            let maxPrice = Math.max(...tours.map(item => item.price));

            this.setState({
                tours,
                toursHot,
                toursNew,
                sortedTours: tours,
                loading: false,
                price: maxPrice,
                maxPrice
            });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount(){
        this.getData();
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let tour = {...item.fields, images, id};

            return tour;
        });
        return tempItems;
    }

    getTour = slug => {
        let tempTours = [...this.state.tours];
        const tour = tempTours.find(tour => tour.slug === slug);
        return tour;
    };

    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, this.filterTours);
    };

    filterTours = () =>{
        let { tours, place, vehicle, price } = this.state;

        let tempTours = [...tours];
        price = parseInt(price);

        if (place !== "Tất cả"){
            tempTours = tempTours.filter(tour => tour.place.includes(place));
        }

        if (vehicle !== "Tất cả"){
            tempTours = tempTours.filter(tour => tour.vehicle === vehicle);
        }
        
        tempTours = tempTours.filter(tour => tour.price <= price);

        this.setState({
            sortedTours: tempTours
        });
    };

    render() {
        return (
            <TourContext.Provider value={{
                                    ...this.state, 
                                    getTour: this.getTour, 
                                    handleChange: this.handleChange
                                }}>
                {this.props.children}
            </TourContext.Provider>
        );
    }
}

const TourConsumer = TourContext.Consumer;

export function withTourConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <TourConsumer>
                {value => <Component {...props} context={value} />}
            </TourConsumer>
        );
    }
}

export { TourProvider, TourContext, TourConsumer };