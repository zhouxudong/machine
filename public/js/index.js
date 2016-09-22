$("#nav_section_left").on("click","li",function(){
    var id = $(this).data("id");
    $("#nav_section_left li").removeClass("active");
    $(this).addClass("active");
    var lg = $("#currLg").val()
    $.ajax({
        url: API.getProductsByCategoryId,
        data: {
            category_id: id
        },
        success: function(data){
            console.log(data);
            if(data.response_data){
                data = data.response_data;
                var items = data,
                    allDom = "",item;
                for(var i=0;i<items.length;i++){
                    item = items[i];
                    allDom +=  [
                        '<div class="item">',
                        '   <div class="bg_over">',
                        '       <a target="_blank" href="/product/'+item.id+'">',
                        '           <img width="180px" height="135px" src="http://47.89.186.41'+item.thumb+'">',
                        '       </a>',
                        '       <p>'+(item["name_" + lg] || item.name)+'</p>',
                        '</div></div>'].join("");
                }

                $(".productList").html(allDom);
            }
        }
    })
})