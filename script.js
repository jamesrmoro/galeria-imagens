var idProfile = '892285290'; //usuário jamesrmoro
var idClient = '24687309d72940c8a04cbfab8b0a5dfb';
var igClientSecret = 'e6d58a3f35f549efa2ff991cb55a8a03';
var images = 15; //máximo de imagens é 20 por default
var accessToken = '892285290.2468730.c7e51a7977714f1b9762eb2def8941a5';
$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/" + idProfile + "/media/recent/?access_token=" + accessToken + '&count=' + images,
    success: function(data) {
        for (var i = 0; i < images; i++) {
            $("#lightSlider").append("<li class='item-gallery' data-thumb='" + data.data[i].images.thumbnail.url +"'><div class='content-image'><img src='" + data.data[i].images.standard_resolution.url +"' /><div class='info'><ul><li><strong>Likes:</strong> " + data.data[i].likes.count +"</li><li><strong>Comentários:</strong> " + data.data[i].comments.count +"</li><li><strong>Tags:</strong> " + data.data[i].tags +"</li></ul></div></div></li>");
        }
        console.log(data);
        $('#lightSlider').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 8
        });
    },
    error: function(){
        console.log('Algo deu errado', data);
    }
});