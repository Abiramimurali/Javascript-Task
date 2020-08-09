//1. method
let a=[3,0,1]
function missingterm(x,y){
for(let i=x; i<=y; i++)
{
    if(a.includes(i)===false) // includes meanz if false -> it will return the value not in a , true->it will return the values in a.
    {   console.log(i)
    }
}
}
missingterm(Math.min(...a),Math.max(...a))
