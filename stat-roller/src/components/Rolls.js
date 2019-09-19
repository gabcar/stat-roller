import React, { Component } from 'react';

class Rolls extends Component {
    constructor(props) {
        super(props);
        this.keys = ["STR", "DEX", "CON", "INT", "WIS", "CHA", "HEALTH"]
        this.tooltips = ["Strength",
                         "Dexterity",
                         "Constitution",
                         "Intelligence",
                         "Wisdom",
                         "Charisma",
                         "Health"]

        this.rolls = [{sum : "--", dice: "--"}, // STR
                      {sum : "--", dice: "--"}, // DEX
                      {sum : "--", dice: "--"}, // CON
                      {sum : "--", dice: "--"}, // INT 
                      {sum : "--", dice: "--"}, // WIS
                      {sum : "--", dice: "--"}]; // CHA
        this.health = {sum : "--", dice: "--"};
    }
    render() {
        if (this.props.rolled) {
            this.rolls = this.props.rolls;
            this.health = this.props.health;
        }
        const ability_rolls = [];
        let stat_tooltip = '';
        let rolls_tooltip = '';
        console.log(this.props.isMobile)
        for (let i = 0; i<6; i++){
            if (!this.props.isMobile){
                stat_tooltip = <span className="tooltiptext">{this.tooltips[i]}</span>
                if (this.props.rolled){
                    rolls_tooltip = Array.prototype.join.call(this.rolls[i].dice, " ")
                } else {
                    rolls_tooltip = " -- ";
                }
                rolls_tooltip = <span className="tooltiptext">{rolls_tooltip}</span>
            }
            ability_rolls.push(
                <div className="stat-block">
                    <div className="stat">
                         {this.rolls[i].sum}
                         {rolls_tooltip}
                    </div>
                    <div className={"lab-" + this.keys[i].toLowerCase()}>{this.keys[i]}
                    {stat_tooltip}
                    </div>
                </div>
            );
        }   
        if (!this.props.isMobile){
            stat_tooltip = <span className="tooltiptext">{this.tooltips[6]}</span>
            if (this.props.rolled){    
                rolls_tooltip = Array.prototype.join.call(this.health.dice, " ")
            }else{
                rolls_tooltip = " -- ";
            }
            rolls_tooltip = <span className="tooltiptext">{rolls_tooltip}</span>
        }
        ability_rolls.push(
            <div className="stat-block">
                <div className="stat">{this.health.sum}
                {rolls_tooltip}
                </div>
                <div className="lab-health"> HP
                {stat_tooltip}
                </div>
                
            </div>
        );
        const cls_name = this.props.isMobile ? "stats-mobile" : "stats"
        return (
            <div className={cls_name}>
                {ability_rolls}
            </div>
        );
    }
}

export default Rolls;