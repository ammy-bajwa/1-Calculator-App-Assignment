import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Calculator App</h1>
            <Calculator />

         </div>
      );
   }
}

class Calculator extends React.Component {
    Calculation()
    {
        var a = document.getElementById('inp1').value;
        var b = document.getElementById('inp2').value;
        var c = document.getElementById('opr').value;
        var d=document.getElementById('ans');
        if(c=='+')
        {
            d.value=parseInt(a)+parseInt(b);
        }
        else if(c=='-')
        {
            d.value=parseInt(a)-parseInt(b);
        }
        else if(c=='*')
        {
            d.value=parseInt(a)*parseInt(b);
        }
        else if(c=='/')
        {
            d.value=parseInt(a)/parseInt(b);
        }
        else
        alert("Error");
        // switch(c)
        // {
        //     case '+':return(alert(parseInt(a)+parseInt(b)));break;
        //     case '-':return(alert(a-b));break;
        //     case '*':return(alert(a*b));break;
        //     case '/':return(alert(a/b));break;
        //     default:return(alert('Please enter currect operator'));break;   
        // }
    }
    render(){
        var inpstyle={
            margin: 20
        }
        return(
            <div>
                
                <input type='text' style={inpstyle} placeholder='1nd value' id='inp1' />
                 <input type='text' id='inp2' placeholder='2nd value' />
                 <input type='text' style={inpstyle} placeholder='enter operation' id='opr' />
                 <button type='button' onClick={this.Calculation.bind(this)}>Calculate</button>
                 <input type='text' style={inpstyle} id='ans' placeholder='Answer will be displayed here' />
            </div>
            
        )
        
    }
}
export default App;