fetch("works.csv")
.then(function(response) {
    return response.text();
})
fetch("works.csv")
.then(function(response) {
    return response.text();
})
.then(function(data) {
    //CSVデータを行ごとに分割
    var rows = data.trim().split("\n");
    //1行目は見出し
    var headers = rows[0].split(",");
    //2行目以降はデータ
    var works = rows.slice(1).map(function(row) {
        var values = row.split(",");
        var work =ml {};
        headers.forEach(function(header, index) {
            work[header] = values[index];
        });t
        return work;
    });
    //Worksを表示する場所
    var grid = document.getElementById("works-grid");
    works.forEach(function(work) {
        var workElement = document.createElement("div");
        workElement.innerHTML = "<h4>" + work.title + "</h4><p>" + work.description + "</p>";
        grid.appendChild(workElement);
        //作品を１つずつ表示
    works.forEach(function(work) {
        var card = document.createElement("article");
        card.className = "work-card";
        card.innerHTML =
         "<a href>" + work.link + '">' +'<img src="' + work.image + '" alt="' + work.title + '">' + '<h4>' + work.title + '</h4>' + '<p>' + work.description + '</p>' + '</a>';
        grid.appendChild(card);

    });
});
var headers = rows[0].split(",");
var works = {}
