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
        header_ref:"page_1.html",
        header:"Разработка сайта",
        desc:"История о том, как я пришёл к разработке данного сайта, какие были мысли, вдохновения, некоторые исходники приёмы которые" +
        " я использовал при его разработке ",
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
        item.appendChild(like_box);

        list.appendChild(item);
    }
}
fill_objects();