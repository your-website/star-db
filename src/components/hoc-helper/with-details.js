import React, {Component} from "react";
import Spinner from "../spinner";

const withDetails = (View, getData, getImageUrl) => {
    return class extends  Component {

        state = {
            item: null,
            loading: false,
            image: null
        };

        componentDidMount() {
            this.updateItem();
        };

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
            }
        };

        updateItem() {
            const { itemId } = this.props;
            if (!itemId) {
                return
            }

            this.setState({
                loading: false
            });

            getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        loading: true,
                        image: getImageUrl(item)
                    });
                });
        };

        render() {
            const { item, loading, image } = this.state;

            if(!item) {
                return <p>Choose person</p>
            }

            if (!loading) {
                return <Spinner />
            }

            return <View {...this.props} item={ item } image={ image }/>
        }
    }
};

export default withDetails;
