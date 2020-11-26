import * as d3 from 'd3';
import G6 from "@antv/g6";
import { Layout } from 'antd';

const data = {
  // 点集
  nodes: [{
    id: 'node1', // String，该节点存在则必须，节点的唯一标识
  },{
    id: 'node2', // String，该节点存在则必须，节点的唯一标识
 },{
  id: 'node3', // String，该节点存在则必须，节点的唯一标识
}
,{
  id: 'node4', // String，该节点存在则必须，节点的唯一标识
}
,{
  id: 'node5', // String，该节点存在则必须，节点的唯一标识
}
,{
  id: 'node6', // String，该节点存在则必须，节点的唯一标识
},{
  id: 'node7', // String，该节点存在则必须，节点的唯一标识
},{
  id: 'node8', // String，该节点存在则必须，节点的唯一标识
},{
  id: 'node9', // String，该节点存在则必须，节点的唯一标识
},{
  id: 'node10', // String，该节点存在则必须，节点的唯一标识
},{
  id: 'node11', // String，该节点存在则必须，节点的唯一标识
}

],
  // 边集
  edges: [{
    source: 'node1', // String，必须，起始点 id
    target: 'node2',  // String，必须，目标点 id
    value:12,
  },
  {
    source: 'node4', // String，必须，起始点 id
    target: 'node2',  // String，必须，目标点 id
    value:0,
  },
  {
    source: 'node5', // String，必须，起始点 id
    target: 'node3',  // String，必须，目标点 id
    value:12,
  },
  {
    source: 'node6', // String，必须，起始点 id
    target: 'node3',  // String，必须，目标点 id
    value:121,
  },
  {
    source: 'node2', // String，必须，起始点 id
    target: 'node3',  // String，必须，目标点 id
    value:121,
  },
  {
    source: 'node2', // String，必须，起始点 id
    target: 'node11',  // String，必须，目标点 id
    value:121,
  },
  {
    source: 'node9', // String，必须，起始点 id
    target: 'node3',  // String，必须，目标点 id
    value:121,
  },
  {
    source: 'node10', // String，必须，起始点 id
    target: 'node6',  // String，必须，目标点 id
    value:121,
  },
  {
    source: 'node8', // String，必须，起始点 id
    target: 'node6',  // String，必须，目标点 id
    value:125,
  },]
};

const draw = (props) => {
    d3.select('.vis-view1chart > *').remove();
    const width = props.width;
    const height = props.height;
    const padding = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      };

    const graph = new G6.Graph({
        container: 'vis-view1chart',  // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: width,              // Number，必须，图的宽度
        height: height,              // Number，必须，图的高度
        layout: {
          type: 'force',
          preventOverlap: true,
        },
        modes: {
          default: ['drag-canvas']
        }
      });
    const nodes = data.nodes;
    // randomize the node size
    nodes.forEach((node) => {
      node.size = Math.random() * 30 + 5;
    });
    graph.data({
            nodes,
      edges: data.edges.map(function (edge, i) {
        edge.id = 'edge' + i;
        return Object.assign({}, edge);
      }),
    });  // 读取 Step 2 中的数据源到图上
    graph.render(); 




    }

    export default draw;
