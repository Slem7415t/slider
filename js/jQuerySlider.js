export function jQuerySlider() {
   $('.arrow').click(function() {
    const ul = $('.slider-jq-center ul')
    const li = $('.slider-jq-center ul li')
    const liWidth = li.innerWidth()
    const arrow = $(this).attr('data-arrow')
    if (!ul.is(':animated')) {
        if (arrow === 'prev') {
            ul.prepend(li.last()).css('margin', `0 0 0 -${liWidth}px`).animate({'margin' : '0'}, 600)
        }
        if (arrow === 'next') {
            li.css('height', '300px')
            li.eq(2).css('height', '330px')
            li.eq(4).css('height', '330px')
            li.eq(3).css('height', '360px')

            ul.animate({'margin' : `0 0 0 -${liWidth}px`}, 600, function(){
                ul.append(li.first()).css('margin', '0')
                li.removeAttr('style')
            })
        }
    }
   }) 
}