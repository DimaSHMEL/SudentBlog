function change(id)
        {
            if(id.src.search("down") == -1)
            {
                id.src = "../../Content/like_down.png";
                let likes = document.getElementById("likes");
                likes.innerHTML = parseInt(likes.innerHTML) + 1;
            }
            else
            {
                id.src = "../../Content/like.png";
                let likes = document.getElementById("likes");
                likes.innerHTML = parseInt(likes.innerHTML) - 1;

            }
        }