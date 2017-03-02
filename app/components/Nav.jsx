var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = () => {
    return(
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer APP</li>
                <li>
                  <IndexLink to="/" activeClassName='active-link'>Time</IndexLink>
                </li>
                <li>
                  <Link to="/countdown" activeClassName='active-link'>CountDown</Link>
                </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                  Created  By<a href="#" target="_blank"> Nisha Kaippilly</a>
              </li>
            </ul>
          </div>
        </div>
      );
};
module.exports = Nav;
