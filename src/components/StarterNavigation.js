import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Nav, {
  AkContainerTitle,
  AkCreateDrawer,
  AkNavigationItem,
  AkSearchDrawer,
} from '@atlaskit/navigation';
import VideoCircleIcon from '@atlaskit/icon/glyph/video-circle';
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play';
import CreateIcon from '@atlaskit/icon/glyph/add';
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';

export default class StarterNavigation extends React.Component {
  state = {
    navLinks: [
      ['/', 'Traffic recordings', VideoCircleIcon],
      ['/replays', 'Replays', VidPlayIcon],
    ]
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextContext) {
    return true;
  };

  render() {
    const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
    const globalPrimaryIcon = <AtlassianIcon label="Atlassian icon" size="xlarge" />;

    return (
      <Nav
        isOpen={this.context.navOpenState.isOpen}
        width={this.context.navOpenState.width}
        onResize={this.props.onNavResize}
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref="/"
        hasBlanket
        drawers={[
          <AkCreateDrawer
            backIcon={backIcon}
            key="create"
            primaryIcon={globalPrimaryIcon}
          >
          </AkCreateDrawer>
        ]}
        globalCreateIcon={<CreateIcon label="Create icon" />}
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon] = link;
            return (
              <Link key={url} to={url}>
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                  isSelected={this.context.router.isActive(url, true)}
                />
              </Link>
            );
          }, this)
        }
      </Nav>
    );
  }
}
