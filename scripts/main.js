const mainBody = document.getElementById('content');

function update_query(theForm) {
    
    var files = [
        "/images/4f582b139ed770061112a3799849ac51.webp",
        "/images/91d1f4a6d387c7503356f2beb1dc6790.webp",
        "/images/260ad8c7d3573c048950c2d92b257a49.webp",
        "/images/458d5787abb567532db277b177e86dfb.webp",
        "/images/1565aa8fd3a6ef6b51c9dcc1c89e9931.webp",
        "/images/9610dfacd5ba5120d59107e0cb770be8.webp",
        "/images/a640ac5daa39f0f0a30a8a4cfb29db8b.webp",
        "/images/b4cecc1619b2077675318a6b3c2b98a1.webp",
        "/images/cf5cd8dad7e824fe162becaf71adfa61.webp",
        "/images/f888d60a4cdb15cd062f585d3d8fcc9c.webp",
    ];
    update_gallery(files);
}

function update_gallery(data) {
    
    var rows = '';
    
    mainBody.innerHTML = ''

    data.forEach((file) => {
        
        thumbnail = '<img class="thumbnail" src=' + file + '>'
        filename = '<div class="filename">' + file.split('/')[2] + '</div>'
        details = '<div class="details">' + ' dropdown' + '</div>'
        
        rows += (
            '<button class="row" onclick="select_row()">' +
            thumbnail + filename + details +
            '</button>'
            );
        });

    mainBody.innerHTML = rows;
}

function select_row(row) {
    console.log('row')
}