let likes = [0,0,0];

function countLikes(e) {
    switch(e.id){
        case 'button1':
            likes[0]++;
            document.querySelector("#col-likes").innerHTML = `${likes[0]} Like(s)`;
            break;
        case 'button2':
            likes[1]++;
            document.querySelector("#col2-likes").innerHTML = `${likes[1]} Like(s)`;
            break;
        case 'button3':
            likes[2]++;
            document.querySelector("#col3-likes").innerHTML = `${likes[2]} Like(s)`;
    }
}