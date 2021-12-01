function change(ID)
        {
            let id = "likes_" + ID.currentTarget.id;
            let obj = ID.currentTarget;
            if(obj.src.search("down") == -1)
            {
                obj.src = "../../Content/like_down.png";
                let likes = document.getElementById(id);
                likes.innerHTML = parseInt(likes.innerHTML) + 1;
            }
            else
            {
                obj.src = "../../Content/like.png";
                let likes = document.getElementById(id);
                likes.innerHTML = parseInt(likes.innerHTML) - 1;

            }
        }
let items = [
    {
        header_ref:"page_3.html",
        header:"One minute solution",
        desc:"Эта игра была разработана мной за 7 дней, в рамках соревнования one minute jam." +
        "Это самый простой платформер, построенный на механике, найди, пройди, отнеси и уйди",
        img_src:"../../Content/one_minute_solution.png",
        like_src:"../../Content/like.png",
        like_num: 0,
    },
    {
        header_ref:"page_2.html",
        header:"RTULab racing game",
        desc:"Эта игра была разработана мной и моим другом за 30 дней, для отбора в лабораторию МИРЭА." +
        "Это самый простой гоночный симулятор, в котором 4 уровня и реализованна простейшая механика езды.",
        img_src:"../../Content/race_game.png",
        like_src:"../../Content/like.png",
        like_num: 0,
    },
    {
        header_ref:"page_1.html",
        header:"Sebastina: from hell to vtube",
        desc:"Эта игра была ещё на ранних стадиях разработки. Ей занимаюсь я, по просьбе." +
        "Это платформер, который очень сильно напоминает Smol Ame",
        img_src:"../../Content/smol_seba.PNG",
        like_src:"../../Content/like.png",
        like_num: 0,
    }
];

function fill_objects()
{
    let list = document.getElementById("list_itm");
    for(let i = 0; i < items.length; i++)
    {
        let item = document.createElement("div");
        item.classList.add("item");

        let head = document.createElement('a');
        head.href = items[i].header_ref;
        let head_info = document.createElement('h1');
        head_info.innerHTML = items[i].header
        head.appendChild(head_info);

        let descp = document.createElement('p')
        descp.innerHTML = items[i].desc;

        let imgdesk = document.createElement('div');
        let imgdesk_img = document.createElement('img')
        imgdesk_img.classList.add('imga');
        imgdesk_img.src = items[i].img_src;
        imgdesk.appendChild(imgdesk_img);

        let like_box = document.createElement("div");
        like_box.classList.add("like_box")
        let like = document.createElement("img");
        like.classList.add("like")
        like.src = items[i].like_src;
        like.id = i;
        like.addEventListener('click', change);
        let like_count = document.createElement("p");
        like_count.innerHTML = items[i].like_num;
        like_count.id = "likes_" + i;
        like_box.appendChild(like);
        like_box.appendChild(like_count);

        item.appendChild(head);
        item.appendChild(descp);
        item.appendChild(imgdesk);
        item.appendChild(like_box);

        list.appendChild(item);
    }
}
fill_objects();