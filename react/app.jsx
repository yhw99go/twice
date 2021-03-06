import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom';

import DashboardContent from "./dashboard/dashboard.jsx";
import TreesContent from "./trees/trees.jsx";
import SearchContent from "./search/search.jsx";

class Dashboard extends Component {
	componentDidMount() {
        render(
			<DashboardContent />,
            document.getElementById("content_container")
        );
	}

	render() {
		return (renderTabs(0));
	}
}

class Trees extends Component {
    componentDidMount() {
        render(
			<TreesContent />,
            document.getElementById("content_container")
        );
    }

	render() {
		return (renderTabs(1));
	}
}

class Search extends Component {
    componentDidMount() {
        render(
			<SearchContent />,
            document.getElementById("content_container")
        );
    }

	render() {
		return (renderTabs(2));
	}
}

class NavTabs extends Component {
	render() {
		return (<header className="header_bar">
					<nav className="sub_nav">
						<div className="flex-row">
							<Link to="/dashboard"><div role="nav" className={"nav_pill"+(this.props.value == 0 ? " pill_active" : "")}>Dashboard</div></Link>
							<Link to="/trees"><div role="nav" className={"nav_pill"+(this.props.value == 1 ? " pill_active" : "")}>Your Trees</div></Link>
						</div>
					</nav>
		</header>);
	}
}

var renderTabs = function(i) {
	return <NavTabs value={i}/>;
};

const Nav = () => (
	<Router>
		<div>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/trees" component={Trees}/>
		</div>
	</Router>

);

export default Nav;