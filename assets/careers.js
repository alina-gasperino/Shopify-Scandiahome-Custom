jQuery(document).ready(function($) {
    $(".career_item-content").each(function() {
        $(this).click(function() {
            $(this).parent().find(".career_details").toggle()
        })
    })    
});