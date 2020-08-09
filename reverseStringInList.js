let a=['h','e','l','l','o']
let first=0; let end=a.length-1;
while(first<end)
{
    temp =a[first];
    a[first]=a[end];
    a[end]=temp;
    first++; end--;
}
console.log(a)

