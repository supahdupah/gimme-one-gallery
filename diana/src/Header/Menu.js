import React from 'react';
import ReactMenuAim from 'react-menu-aim';
import createReactClass from 'create-react-class';
import {
  Link
} from 'react-router-dom'
import './styles.css';


var Menu = createReactClass({
  mixins: [ReactMenuAim],

  getDefaultProps: function() {
    return {
      submenuDirection: 'right'
    };
  },

  getInitialState: function() {
    return {
      activeMenuIndex: 0
    };
  },

  componentWillMount: function() {
    this.initMenuAim({
      submenuDirection: this.props.submenuDirection,
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
  },

  handleSwitchMenuIndex: function(index) {
    this.setState({
      activeMenuIndex: index
    });
  },

  handleMouseLeaveMenuCustom: function(handler,e) {
    var a = document.getElementsByClassName('sub-menu');
    a.hidden = true;
    this.setState({
      activeMenuIndex: 1
    });
  },

  render: function() {
    var self = this;
    var containerClassName = 'menu-container ' + this.props.submenuDirection;

    var subMenuStyle = {};
    if (this.props.submenuDirection === 'below') {
      subMenuStyle.left = this.state.activeMenuIndex * 140;
    }

    return (
      <div className={containerClassName}>
        <ul className="menu" onMouseLeave={this.handleMouseLeaveMenu.bind(this,this.handleMouseLeaveMenuCustom)}>
          {this.props.menuData.map(function(menu, index) {
            var className = 'menu-item';
            if (index === self.state.activeMenuIndex) {
              className += ' active';
            }
            return (
              <li className={className} key={index}
                  onMouseEnter={function(){
                    self.handleMouseEnterRow.call(self, index, self.handleSwitchMenuIndex);
                  }}>
                  <Link to={menu.path}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* <ul className="sub-menu" style={subMenuStyle}>
          {this.props.menuData[this.state.activeMenuIndex].subMenu.map((function(subMenu, index){
            return (
              <li className="sub-menu-item" key={index}>{subMenu}</li>
            );
          }))}
        </ul> */}
      </div>
    );
  }
});

export default Menu;