// @flow
import * as React from "react";
import ProductScan from "../../stories/screens/ProductScan";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ProductScanContainer extends React.Component<Props, State> {
	render() {
		return <ProductScan navigation={this.props.navigation} />;
	}
}
