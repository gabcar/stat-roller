import React, { Component } from 'react';
import CharInfo from './CharInfo.js'
import Rolls from './Rolls.js'
import {rollStats, rollHealth} from '../dice.js'

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
        };
        this.rolled = false;
        this.level = 1;
        this.class = null;
        this.generation = null;

        this.stats = null;
        this.health = null;

        this.updateState = this.updateState.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
        // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    
    updateState(s){
        this.rolled = s.rolled;
        this.level = s.level;
        this.class = s.class;
        this.generation = s.generation;
        this.stats = rollStats(this.generation);
        this.health = rollHealth(this.class, this.level);

        this.forceUpdate();
    }
    
    render() {
        const { width } = this.state;
        const isMobile = width <= 600;
        const clsName = isMobile ? "layout-mobile" : "layout";
        return (
            <div className={clsName}>
                <Rolls rolled={this.rolled} level={this.level}
                 cls={this.class} gen={this.generation}
                 rolls={this.stats} health={this.health}
                 isMobile={isMobile}/>
                <CharInfo onClick={this.updateState}
                 isMobile={isMobile}/>
            </div>
        );
    }
}

export default Layout;