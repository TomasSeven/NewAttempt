import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "./newStyles.scss";

const ReactGridLayout = WidthProvider(RGL);

/**
 * This layout demonstrates how to use the `onResize` handler to enforce a min/max width and height.
 *
 * In this grid, all elements are allowed a max width of 2 if the height < 3,
 * and a min width of 2 if the height >= 3.
 */
export default class DynamicMinMaxLayout extends React.PureComponent {
  static defaultProps = {
    isDraggable: false,
    isResizable: false,
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 20
  };

  generateDOM() {
    // Generate items with properties from the layout, rather than pass the layout directly
    //const layout = this.generateLayout();
    var layout = [
      {
        i: "Header",
        j: "item-a",
        x: 0,
        y: 0,
        w: 20,
        h: 2,
        static: true,
        autoSize: true
      },
      {
        i: "Main",
        j: "item-b",
        x: 3,
        y: 2,
        w: 14,
        h: 20,
        static: true,
        autoSize: true
      },
      {
        i: "Left sidebar",
        j: "item-c",
        x: 0,
        y: 2,
        w: 3,
        h: 20,
        static: true,
        autoSize: true
      },
      {
        i: "Right sidebar",
        j: "item-d",
        x: 17,
        y: 2,
        w: 3,
        h: 20,
        static: true,
        autoSize: true
      },
      {
        i: "Footer",
        j: "item-e",
        x: 1,
        y: 22,
        w: 20,
        h: 1,
        static: true,
        autoSize: true
      }
    ];

    return _.map(layout, function(l) {
      return (
        <div key={l.i} data-grid={l} className={l.j}>
          <span>{l.i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const w = _.random(1, 2);
      const h = _.random(1, 3);
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6),
        w: w,
        h: h,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  onResize(layout, oldLayoutItem, layoutItem, placeholder) {
    // `oldLayoutItem` contains the state of the item before the resize.
    // You can modify `layoutItem` to enforce constraints.

    if (layoutItem.h < 3 && layoutItem.w > 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }

    if (layoutItem.h >= 3 && layoutItem.w < 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }
  }

  render() {
    return (
      <ReactGridLayout
        onLayoutChange={this.onLayoutChange}
        onResize={this.onResize}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.jsx").then(fn => fn.default(DynamicMinMaxLayout));
}
