// $(document).ready(function(){
function loadImages(){
    for(var i = 1; i <=386; i++){
        var pokeImg = "<img src= 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ i + ".'png'>";
        // var pokeImg = "<img src= 'https://pokeapi.co/media/img/" + i + ".png' data-pokenum='" + i + "'>";
        // var pokeImg = "<img src= 'https://www.serebii.net/pokemongo/pokemon/" + i + ".png' data-pokenum='" + i + "'>";
        $('.container').append(pokeImg)
    }
}
$(document).ready(function(){
    loadImages();

    function htmlBuilder(data){
        $('#screen').html(htmlStr)
        var htmlStr = "<h1>" + data["name"]+ "</h1>" ; 
        
        htmlStr += "<img src= 'https://pokeapi.co/media/img/" + data["id"] + ".png'>";

        
        // data["name"]
        htmlStr += "<h2>Types</h2>"
        for(var i = 0; i < data.types.length; i++){
            // console.log(data.types[i].name);
            htmlStr += "<li>" + data.types[i].type.name + "</li>"
        } 
               
        // "types": [ { "slot": 2, "type": { "url": "https://pokeapi.co/api/v2/type/3/", "name": "flying" } }, { "slot": 1, "type": { "url": "https://pokeapi.co/api/v2/type/10/", "name": "fire" } } ]
        
        htmlStr += "<h2>Height</h2>"
        htmlStr += "<li>" + data["height"] + "</li>"

        htmlStr += "<h2>Weight</h2>"
        htmlStr += "<li>" + data["weight"] + "</li>"

        htmlStr += "<h2>Moves</h2>"
        for(var i = 0; i < data.moves.length; i++){
			htmlStr += "<li>" + data.moves[i].move.name + "</li>"
		}
        

        console.log(htmlStr);

        $('.screen2').html(htmlStr)
    }

    $('img').click(function(){
        var pokeNum = $(this).data("pokenum");

        var url = "https://pokeapi.co/api/v2/pokemon/" + pokeNum + "/";
        // var url = "https://www.serebii.net/pokemongo/pokemon/" + pokeNum + "shtml";
        $.get(url, function(res){
           htmlBuilder(res);
        },"json");
    })

})
