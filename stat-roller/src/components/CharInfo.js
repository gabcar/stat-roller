import React, { Component } from 'react';

class CharInfo extends Component {
     constructor(props) {
        super(props);

        this.rolled = false;
        this.level = 1;
        this.class = "Artificer";
        this.generation = "3d6";
        this.is_hovering = false;
    
        this.handleLevel = this.handleLevel.bind(this);
        this.handleClass = this.handleClass.bind(this);
        this.handleGenerationMethod = this.handleGenerationMethod.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleHover = this.toggleHover.bind(this);

        this.tooltip = "Standard 3d6";
    }
    

    handleLevel(event) {
        this.level = event.target.value;
        this.forceUpdate()
    }

    handleClass(event) {
        if (event.target.value === "Class"){
            this.class = null;
        } else {
            this.class = event.target.value;
        }
        this.forceUpdate();
    }

    handleGenerationMethod(event) {
        this.generation = event.target.value;

        if (event.target.value === "3d6"){
            this.tooltip = "Standard 3d6"
        } else if (event.target.value === "4d6"){
            this.tooltip = "4d6 drop lowest"
        } else if (event.target.value === "CR"){
            this.tooltip = "4d6 drop lowest and re-roll if \
                            the total sum is less than 70 \
                            (Critical Role)"
        }
        this.forceUpdate();
    }
    
    handleSubmit(event) {
        this.rolled = true;
        this.props.onClick({rolled: this.rolled,
                            level: this.level,
                            class: this.class,
                            generation: this.generation});
        event.preventDefault();
    }

    toggleHover() {
        this.is_hovering = !this.is_hovering;
        this.forceUpdate();
    }
    
      render() {
        const cls_name = this.props.isMobile ? "mobile-input-box" : "input-box";
        let instructions_cls_name = this.is_hovering ? "instructions" : "instructions-hidden";
        instructions_cls_name += this.props.isMobile ? "-mobile" :  "";

        return (
        <div>
          <div className={cls_name}>
            <form className="character-form" onSubmit={this.handleSubmit}>
                <label className="lb-label" htmlFor="lb" >Level:</label> 
                <input className="levelbox" type="number" min="1" max="20" value={this.level} onChange={this.handleLevel} id="lb"/>
                <select className="dropdown-class" onChange={this.handleClass}>
                    <option>Artificer</option>
                    <option>Blood Hunter</option>
                    <option>Barbarian</option>
                    <option>Bard</option>
                    <option>Cleric</option>
                    <option>Druid</option>
                    <option>Fighter</option>
                    <option>Monk</option>
                    <option>Paladin</option>
                    <option>Ranger</option>
                    <option>Rogue</option>
                    <option>Warlock</option>
                    <option>Wizard</option>
                </select>
                <div className="hover-div" onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}>
                <select className="dropdown-generation-method" 
                        onChange={this.handleGenerationMethod}>
                    <option>3d6</option>
                    <option>4d6</option>
                    <option>CR</option>
                </select>
                </div>
                <input className="button-active" type="submit" value="Roll" />
            </form>
          </div>
          <div className={instructions_cls_name}>
            <p>{this.tooltip}</p>
          </div>
        </div>
        );
    }
}


export default CharInfo;