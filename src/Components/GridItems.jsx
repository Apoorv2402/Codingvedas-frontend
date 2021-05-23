import React from 'react'
import { Card } from 'antd';
function GridItems() {
  const gridStyle = {
    width: '50%',
    backgroundColor:"white",
    textAlign: 'center',
  };
  return (
    <div>
      <Card title="Top Categories" className="grid-card" style={{backgroundImage:"linear-gradient(to bottom left, #55a29e, #488fa7)"}}>
    
    <Card.Grid style={gridStyle}>Category 1</Card.Grid>
    <Card.Grid style={gridStyle}>Category 2</Card.Grid>
    <Card.Grid style={gridStyle}>Category 3</Card.Grid>
    <Card.Grid style={gridStyle}>Category 4</Card.Grid>
    <Card.Grid style={gridStyle}>Category 5</Card.Grid>
    <Card.Grid style={gridStyle}>Category 6</Card.Grid>
  </Card>
    </div>
  )
}

export default GridItems
