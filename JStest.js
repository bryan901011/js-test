const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 

const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60},
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];


const Q1=()=>{
        const array1=[]
    factories.forEach(
        i => array1.push({name:i.name,count:i.employees.length})
    );
    array1.forEach(i => console.log(i));
}

const Q2=()=>{
    const array2=[]
    factories.forEach(
        i => i.employees.forEach(
            j =>{exist=0;
                array2.forEach(
                k=>{if (j==k.name){
                        exist=1;
                        k.count+=1;
                        console.log(k)
                    }
                }   
            )
            if (exist==0){
                array2.push({name:j,count:1})
            }
            }
        )
    );
    array2.forEach(i => console.log(i));
}

const Q3=()=>{
    const array3=[]
    factories.forEach(
        i => {array3.push({name:i.name,employees:i.employees.sort()})
        }
    );
    array3.forEach(i =>i.employees.forEach(
        j=> console.log(j)
    ));
}

const Q4=()=>{
    time=0
    employeeType.forEach(
        i=>{
            let a=parseInt(i.work_begin)
            let b=parseInt(i.work_end)
            if(b==0){b=24}
            console.log(b-a)
            time+=(b-a)
        }
    )
    console.log(time)
}

const Q5=time=>{
    time=parseInt(time)
    const type=[]
    let count=0
    employeeType.forEach(
        i=>{
            let a=parseInt(i.work_begin)
            let b=parseInt(i.work_end)
            if(b==0){b=24}
            if(a<time&time<b){
                type.push(i.id)
            }
        }
    )
    type.forEach(
        i=>{
            employees.forEach(
                j=>{
                    if(i==j.type)count++
                }
            )
        }
    )
    console.log(count)
}

const Q6=()=>{
    let a=parseInt("09:00")
    let b=parseInt("00:00")
    if(b==0){b=24}
    const daytime=(b-a)*60
    let alltime=0
    tasks.forEach(
        i=>{
            alltime+=i.duration
        }
    )
    console.log(Math.ceil(alltime/daytime))
}


