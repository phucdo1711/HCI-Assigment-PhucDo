import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import Nav, {
  AkContainerTitle,
  AkCreateDrawer,
  AkNavigationItem,
  AkSearchDrawer,
  AkGlobalItem
} from '@atlaskit/navigation';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import CreateIcon from '@atlaskit/icon/glyph/add';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import BookIcon from '@atlaskit/icon/glyph/book';
import Avatar from '@atlaskit/avatar';
import { observer, inject } from 'mobx-react';
import CreateDrawer from './CreateDrawer';

@inject('ui')
@observer
 class Navigation extends React.Component {
  state = {
    openDrawer: false,
    navLinks: [
      ['', 'Dashboard', DashboardIcon],
      ['classes', 'Classes', PeopleGroupIcon],
      ['assignments', 'Assignments', BookIcon]
    ]
  };

  openDrawer = openDrawer => {
    this.setState({ openDrawer });
  };
  closeDrawer = () => this.setState({ openDrawer: false });

  render() {
    const {location} = this.props;
    const locationArr = location.pathname.split('/');
    const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
    const globalPrimaryIcon = "FIT PORTAL";
    const { ui } = this.props;
    const { openDrawer } = this.state;

    return (
      <Nav
      isOpen={ui.isOpenNav}
      width={ui.navWidth}
      onResize={ui.resizeNav}
        containerHeaderComponent={() =>
          <AkContainerTitle
            href={`/`}
            icon={<Avatar src="https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1" />}
            text={"ĐỖ THÀNH PHÚC"}
          />
        }
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref="/"
        drawers={[
          <CreateDrawer
              drawerIsOpen={openDrawer === 'create'}
              closeDrawer={this.closeDrawer}
              key={'create'}
          />
        ]}
        globalCreateIcon={ 
        <CreateIcon label='Create' onClick={() => this.openDrawer('create')}/>
    }
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon] = link;
            return (
              <Link key={url} to={`/${url}`}>
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                  isSelected={locationArr[1] === url}
                />
              </Link>
            );
          }, this)
        }
      </Nav>
    );
  }
}

export default withRouter(Navigation)