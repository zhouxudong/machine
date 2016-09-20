$("#nav_section_left").on("click","li",function(){
    var id = $(this).data("id");

    $.ajax({
        url: API.getProductsByCategoryId,
        data: {
            category_id: id
        },
        success: function(data){
            console.log(data);
        }
    })
})