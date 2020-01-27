import React from "react";
import "./newStyles.scss";
import GridLayout from "react-grid-layout";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: 0, w: 20, h: 2, static: true, autoSize: true },
      { i: "b", x: 3, y: 2, w: 14, h: 20, static: true, autoSize: true },
      { i: "c", x: 0, y: 2, w: 3, h: 20, static: true, autoSize: true },
      { i: "d", x: 17, y: 2, w: 3, h: 20, static: true, autoSize: true },
      { i: "e", x: 1, y: 22, w: 20, h: 1, static: true, autoSize: true }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        items={10}
        cols={20}
        rowHeight={30}
        width={1600}
        autoSize={true}
      >
        <div key="a" className="item-a">
          <span>Header</span>
        </div>
        <div key="b" className="item-b">
          <span>Main</span>
        </div>
        <div key="c" className="item-c">
          <span>Left side</span>
        </div>
        <div key="d" className="item-d">
          <span>Right side</span>
        </div>
        <div key="e" className="item-e">
          <span>Footer</span>
        </div>
      </GridLayout>
    );
  }
}

export default function App() {
  return <MyFirstGrid />;
}

/*export default function App() {
  return (
    <div className="App">
      <GridLayout></GridLayout>
      <div className="item-a">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div className="item-b">
        <span>Text</span>
      </div>

      <div className="item-c">
        <span>Text</span>
      </div>
      <div className="item-d">
        <span>Text</span>
      </div>
      <div className="item-e">
        <span>Text</span>
      </div>
    </div>
  );
}
*/
