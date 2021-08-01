const ORG_CHART={
    name: 'Vu Lam',
    id:1,
    title:'CEO',
    picture:'https://hr.kms-technology.com/api/employees/photo/1/300',
    subItems:[
        {
            name: "Josh Lieberman",
            id: "2",
            title: "ABC",
            picture: "https://hr.kms-technology.com/api/employees/photo/16/300",
        },
        {
            name: "Julien Grisoni",
            id: "3",
            title: "ABC",
            picture: "https://hr.kms-technology.com/api/employees/photo/3174/300"
        },
        {
            name: "Lan Nguyen",
            id: "4",
            title: "ABC",
            picture: "https://hr.kms-technology.com/api/employees/photo/2242/300"
        },
        {
            name: "Lauren Smith",
            id: "5",
            title: "ABC",
            picture: "https://hr.kms-technology.com/api/employees/photo/639/300"
        },
    ]

}

const renderOrgChart=
    ORG_CHART.subItems.map((element)=>{
        return `<li> <a href=""> <span>${element.title}</span> <img src=${element.picture} alt=""><p>${element.name}</p><p>${element.id}</p> </a></li>`;       
    }).join("");


document.getElementById("parent").innerHTML=
    `<ul>
        <li> <a href=""> <span>${ORG_CHART.title}</span> <img src=${ORG_CHART.picture} alt=""><p>${ORG_CHART.name}</p><p>${ORG_CHART.id}</p> </a>      
            <ul>
                ${renderOrgChart}
            </ul>   
        </li>
    </ul>`;