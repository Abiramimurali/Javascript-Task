function boundary_matrix(x,y,z)
{  for(let i=0; i<y; i++)
    {
        for(let j=0; j<z; j++)
        {
            if(i==0 || j==0)
            a[i][j]*=2;
            else if(i==y-1 || j==z-1)
            a[i][j]*=2;
            else
            a[i][j]/=2;
        }
    }
for(let i=0; i<y; i++)
console.log(a[i].join(" "))
}
let a=[[4,4,4],[4,4,4],[4,4,4]]
boundary_matrix(a,a.length,a[0].length)
