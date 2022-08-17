const dagre = require("./index");
const g = new dagre.graphlib.Graph();

// Set an object for the graph label
g.setGraph({});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function () {
  return {};
});

// Add nodes to the graph. The first argument is the node id. The second is
// metadata about the node. In this case we're going to add labels to each of
// our nodes.
g.setNode("a", { label: "Kevin Spacey", width: 144, height: 100 });
g.setNode("b", { label: "Saul Williams", width: 160, height: 100 });
g.setNode("c", { label: "Brad Pitt", width: 108, height: 100 });
g.setNode("d", { label: "Harrison Ford", width: 168, height: 100 });
g.setNode("e", { label: "Luke Wilson", width: 144, height: 100 });
g.setNode("f", { label: "Kevin Bacon", width: 121, height: 100 });

// Add edges to the graph.
g.setEdge("a", "b");
g.setEdge("b", "f");
g.setEdge("c", "f");
g.setEdge("d", "e");
g.setEdge("e", "f");
dagre.layout(g);

g.nodes().forEach(function (v) {
  console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
});
g.edges().forEach(function (e) {
  console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
});
