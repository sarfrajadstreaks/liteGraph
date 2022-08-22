init(document.getElementById('table1'),da,config)

        function init(node,data,config){
            let chartLabel=data[0][0]
            let stackColors;
            let stack_lables;
            let actualData=[];
            let bar_label=[];
            let bar_width;
            for(let i=0;i<data.length;i++){
              if(i==0) stack_lables=data[i].slice(1,data[i].length)
              else if(i==(data.length-1)) stackColors=data[i].slice(1,data[i].length)
              else {
                
                actualData.push(data[i].slice(1,data[i].length))
                bar_label.push((data[i].slice(0,1)).toString())
              }
            }
            let HighestSum=0;
            // console.log(chartLabel,stack_lables,stackColors,actualData,HighestSum)
            for(let i=0;i<actualData.length;i++){
                let temp=0;
                for(let j=0;j<actualData[i].length;j++){ 
                  temp=temp+actualData[i][j]
                }
                actualData[i].push(temp)
                if(HighestSum<temp) HighestSum=temp  
            }
            var table=document.createElement('table');
            table.setAttribute('style',`height:100%;width:100%;`)
            var row_bars=document.createElement('tr');
            row_bars.setAttribute('style',`height:100%;width:100%;`)
            var row_label=document.createElement('tr');
            row_label.setAttribute('class','labels');
            row_bars.setAttribute('class','bars');
            actualData.map((d)=>{
              let bar_div=document.createElement('div');
              bar_width=(((node.style.width).replace(/[^0-9]/g,''))-(actualData.length*2))/actualData.length;
              // console.log("Bar",bar_width)
              bar_div.setAttribute('style',`height:inherit;width:${bar_width}px;display:flex;flex-direction: column;justify-content: flex-end;`)
              for(let i=0;i<d.length-1;i++){
                let tooltip_span=document.createElement('span');
                tooltip_span.setAttribute('style',`color:${config.textColor}`)
                tooltip_span.innerHTML=stack_lables[i]
                tooltip_span.setAttribute('class','_tooltip')
                let stack_div=document.createElement('div');
                stack_div.setAttribute('class','stack')
               stack_div.appendChild(tooltip_span)
                if(stackColors.length==0){
                  for(let i=0;i<data[0][0].length;i++){
                    stackColors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
                  }
                }
                let height=Math.round((d[i]/HighestSum)*100);
                stack_div.setAttribute('style',`height:${height}%;background:${stackColors[i]}`)
                bar_div.appendChild(stack_div);
              }
              let td=document.createElement('td');
              td.setAttribute('style',`height:inherit;flex-direction: column;justify-content: flex-end;`)
              td.appendChild(bar_div);
              row_bars.appendChild(td);
            })
           
            table.appendChild(row_bars);
            bar_label.map((label)=>{
              let tooltip_span=document.createElement('span');
              tooltip_span.setAttribute('class','_tooltip')
              tooltip_span.setAttribute('style',`color:${config.textColor}`)
              tooltip_span.innerHTML=label
                
              let th=document.createElement('th');
              th.setAttribute('class','stack')
              th.setAttribute('style',`width:${bar_width}px;overflow:hidden;text-overflow:ellipsis;font-size:${config.fontSize};color:${config.textColor};text-align: center;`)
              th.innerHTML=label
              th.appendChild(tooltip_span)
              row_label.appendChild(th)
            })
            table.appendChild(row_label);
            
            document.getElementById('table1').appendChild(table)
         
        }
