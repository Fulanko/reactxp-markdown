var React = require('react');
var { Text } = require('reactxp');

/**
 *
 * @param Array<any> children
 * @param Array<number> styles
 * @param {string} type
 */
export default function applyStyle(children, styles, type) {
  if (!(styles instanceof Array)) {
    styles = [styles];
  }

  return children.map(child => {
    if (child.type.name === type) {
      return <Text selectable={true} key={child.key} {...child.props} style={[].concat(child.props.style, styles)} />;
    }

    return child;
  });
}
