# liteGraph
Different lite graph can be generate.
#sample data
<div id="barGraph"></div>
data=[
  ['Genre', 'Sci Fi', 'Romance' ],
  ['2010', 30, 4],
  ['2020', 16, 22],
  ['2030', 28, 19],
  ['2040', 12, 19],
  ['2050', 30, 4],
  ['2060', 16, 22],
  ['color','red','grey']
]

config={
  fontSize:'smaller',
  textColor:'red',
  stacked:true,
}
init(document.getElementById('barGraph'),data,config)
