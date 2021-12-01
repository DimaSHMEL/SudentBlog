function unwarp()
{
    let menu = document.getElementById('MenuBar')
    if(menu.classList.contains("warp") )
        menu.classList.remove("warp");
    else
        menu.classList.add("warp");
    
}
function check_page()
{
    let name = document.title;
    if(name.search('Главная') != -1)
    {
        document.getElementById('main').classList.add('at')
    }
    if(document.title.search('Оргонайзер') != -1)
    {
        document.getElementById('orgo').classList.add('at')
    }
    if(document.title.search('проектов') != -1)
    {
        document.getElementById('proj').classList.add('at')
    }
    if(document.title.search('Дневник') != -1)
    {
        document.getElementById('diar').classList.add('at')
    }
    if(document.title.search('Связь') != -1)
    {
        document.getElementById('cont').classList.add('at')
    }
}
let menuitems = 
[
    {
        name: "Главная",
        href: "../Main_Info/main.html",
        id: "main"
    },
    {
        name: "Дневники разработки",
        href: "../Development_Diary/diary.html",
        id: "diar"
    },
    {
        name: "Проекты",
        href: "../Projects_List/project_gallery.html",
        id: "proj"
    },
    {
        name: "Связь",
        href: "../contact/contact_page.html",
        id: "cont"
    },
    {
        name: "Мой органайзер",
        href: "../orgonaizer/orgonaizer.html",
        id: "orgo"
    },
    {
        name: "Войти/выйти",
        href: "../register/login.html",
        id: "exit"
    }
]
let LOGO =
{
    src: "../../Content/logo.png"
}
function fill_head_foot()
{
    let header = document.getElementById("menu_bar");

    let logo = document.createElement('div');
    let logoimg = document.createElement('img');
    logoimg.src = LOGO.src;
    logoimg.classList.add("image_logo")
    logo.appendChild(logoimg)

    let wrap = document.createElement('div');
    let inn = document.createElement('a');
    inn.innerHTML = "Меню";
    wrap.addEventListener('click', unwarp);
    wrap.classList.add("Menu")
    wrap.appendChild(inn)

    let nav = document.createElement('nav')
    nav.id = "MenuBar"
    nav.classList.add('Menu_bar')
    nav.classList.add('warp')

    for(let i = 0; i < menuitems.length; i++)
    {
        let item = document.createElement('a');
        item.innerHTML = menuitems[i].name;
        item.href = menuitems[i].href;
        item.id = menuitems[i].id;
        nav.appendChild(item);
    }
    header.appendChild(logo)
    header.appendChild(wrap)
    header.appendChild(nav)

    let footer = document.getElementById("foot");
    let h2 = document.createElement('h2')
    h2.innerHTML = "Сайт разработан как учебная работа с открытым кодом, которой можно найти <a>здесь</a>"
    footer.appendChild(h2);
}
fill_head_foot();
check_page();