import React, { Component } from 'react';
import {AppState, Text} from 'react-native';

class MyAppState extends Component {
    level = 1;
    has_rolled = false;
    chosen_class = null;
    generation_method = null;
    get_level() {
        return this.level  
    }
    get_rolled(){
        return this.rolled
    }
    get_chosen_class(){
        return this.chosen_class
    }
    get_generation_method(){
        return this.generation_method
    }
    set_level(lvl){
        this.level = lvl
    }
    set_rolled(has_rolled){
        this.has_rolled = has_rolled
    }
    set_chosen_class(chosen_class){
        this.chosen_class = chosen_class
    }
    set_generation_method(gen_method){
        this.generation_method = gen_method
    }

    render(){
        return this
    }
}

export default MyAppState;