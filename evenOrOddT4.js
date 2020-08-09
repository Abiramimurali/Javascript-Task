let a=[1,2,3,9,6,12,15,20]

    let odd=[]
    let even=[]
    for(let i=0; i<a.length; i++)
    {
        if(a[i]%2==0)
        {
            even.push(a[i])
        }
        else
        {
            odd.push(a[i])
        }
    }
  let x=(even.sort(function(a,b){return a-b}));
  let y=(odd.sort(function(a,b){return b-a}));
  console.log(x+","+y)

