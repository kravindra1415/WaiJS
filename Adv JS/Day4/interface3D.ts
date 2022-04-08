interface Graph3D {
    x: number;
    y: number;
    z?: number;
}

var my3dGraph: Graph3D = { x: 20, y: 30, z: 40 }; //structural type mapping

interface Graph2D {
    x: number;
    y: number;
}

var my2Dgraph = { x: 10, y: 30 }

function print2DCoordinates(graph: Graph2D) {
    console.log(graph.x);
    console.log(graph.y);
}

function print3DCoordinates(graph: Graph3D) {
    console.log(graph.x);
    console.log(graph.y);
    console.log(graph.z);
}

print2DCoordinates(my3dGraph);

print3DCoordinates(my2Dgraph);