/* eslint-disable comma-dangle */
/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import classNames from 'classnames';

class AppearAfter extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { isVisible: false };
	// }
	state = { isVisible: false };
	componentDidMount() {
		const { delay } = this.props;
		setTimeout(() => this.setState({ isVisible: true }), delay || 0);
	}

	render() {
		const { isVisible } = this.state;
		const { children, className } = this.props;
		return React.cloneElement(children, {
			className: classNames(className, {
				visible: isVisible,
				// eslint-disable-next-line comma-dangle
				hidden: !isVisible
			})
		});
	}
}

export default AppearAfter;
