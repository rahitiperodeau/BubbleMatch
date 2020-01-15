import React, { Component } from 'react';
//import Tree from 'react-d3-tree';

//import Tree from 'react-tree-graph';
//import 'react-tree-graph/dist/style.css'
import './css/BracketModel.css';
import {tree} from '../../../data/data_bracket';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinkHorizontal } from '@vx/shape';
import { hierarchy } from 'd3-hierarchy';
import { LinearGradient } from '@vx/gradient';


const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
const bg = '#172b4d';

const margin = {
    top: 10,
    left: 30,
    right: 40,
    bottom: 80
  };
const height=1000;
const width= 700;
const data =hierarchy(tree);
const yMax = height - margin.top - margin.bottom;
const xMax = width - margin.left - margin.right;


function Rect({ node }){
    const width = 40;
    const height = 20;
    const centerX = -width / 2;
    const centerY = -height / 2;
    
    return (
        <Group top={node.x} left={node.y}>
            <rect
            height={height}
            width={width}
            y={centerY}
            x={centerX}
            fill={bg}
            stroke={peach}
            strokeWidth={1}
            
            rx={10}
            onClick={() => {
                alert(`clicked: ${JSON.stringify(node.data.name)}`);
            }}
            />
            <text
            dy={'.33em'}
            fontSize={9}
            fontFamily="Arial"
            textAnchor={'middle'}
            fill={green}
            style={{ pointerEvents: 'none' }}
            >
            {node.data.name}
            </text>
        </Group>
        );
    
}



function Node({ node }) {
    
    const isRoot = node.depth === 0;
    const isParent = !!node.children;
  
    if (isRoot) return <RootNode node={node} />;
    if (isParent) return <ParentNode node={node} />;
  
    return (
      <Rect node={node}/>
    );
  }
  
  function RootNode({ node }) {

    return (
        <Rect node={node}/>
    );
  }
  
  function ParentNode({ node }) {
  
    return (
        <Rect node={node}/>
    );
  }

class BracketModel extends Component{

    constructor(props){
        super(props);
        
        this.state={

        }
        this.initBracket=this.initBracket.bind(this);
    }

    initBracket(){
        
    }
    
    render(){
        return(
        <div className="parent">
            <svg className="Class" width={width} height={height}>
            
            <rect className="Class" width={width} height={height} rx={14} fill={bg} />
            <Tree root={data} size={[yMax, xMax]}>
                {tree => {
                return (
                    <Group top={margin.top} left={margin.left}>
                    {tree.links().map((link, i) => {
                        return (
                        <LinkHorizontal
                            key={`link-${i}`}
                            data={link}
                            stroke={lightpurple}
                            strokeWidth="1"
                            fill="none"
                        />
                        );
                    })}
                    {tree.descendants().map((node, i) => {
                        return <Node key={`node-${i}`} node={node} />;
                    })}
                    </Group>
                );
                }}
            </Tree>
            </svg>
            
        </div>
            
        );
    }
}
export default BracketModel;