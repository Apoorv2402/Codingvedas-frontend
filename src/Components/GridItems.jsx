import React from 'react'
import { Card } from 'antd';
import { Component } from 'react';
function GridItems() {
  const gridStyle = {
    width: '50%',
    backgroundColor:"white",
    textAlign: 'center',
  };
  
  return (
    <div>
      <Card title="Top Categories" className="grid-card" >
    
    <Card.Grid style={gridStyle}>Category 1</Card.Grid>
    <Card.Grid style={gridStyle}>Category 2</Card.Grid>
    <Card.Grid style={gridStyle}>Category 3</Card.Grid>
    <Card.Grid style={gridStyle} >Category 4</Card.Grid>
    <Card.Grid style={gridStyle}>Category 5</Card.Grid>
    <Card.Grid style={gridStyle}>Category 6</Card.Grid>
  </Card>
    </div>
  )
}

export default GridItems
