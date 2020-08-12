import React, {Component} from "react";
import Spinner from "../spinner";

const withDetails = (View) => {
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
            if (this.props.itemId !== prevProps.itemId ||
                this.props.getData !== prevProps.getData ||
                this.props.getImageUrl !== prevProps.getImageUrl) {
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

            this.props.getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        loading: true,
                        image: this.props.getImageUrl(item)
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
