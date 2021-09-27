if ($('.nav-link')) {
    let href = $('.breadcrumb-item:nth-of-type(2) a').attr('href') || location.pathname
    $(`.nav-link[href='${href}']`).parent().addClass('active')
}

if ($('.badge')) {
    $('.badge').each(function () {
        $(this).addClass('badge-' + ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'][Math.ceil((Math.random() * 6))])
    })
}

$(function () {
    const range = document.querySelector("input[type='range']");
    const bg = document.querySelector(".bg-light ");
    range.addEventListener('input', function () {
        bg.style.background =
            `linear-gradient(to bottom right, rgb(${range.value},195,255), rgb(255,${range.value},28)) no-repeat`;
    })

    $.ajax({
        type: "get",
        url: 'https://v1.hitokoto.cn/',
        dataType: 'json',
        success: function (result) {
            $(".description").text(result.hitokoto);
            return false;
        }
    });
})

const newsblogs = document.querySelectorAll('.newsblog')
const html = document.documentElement
document.addEventListener('scroll', (e) => {
    let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)
    // console.log(scrolled);
    let totol = 1 / newsblogs.length;
    for (let [index, newsblog] of newsblogs.entries()) {
        let start = totol * index;
        let end = totol * (index + 1)
        // console.log(`index:${index},start:${start},end:${end}`);
        let progress = (scrolled - start) / (end - start)
        if (progress >= 1) progress = 1
        if (progress <= 0) progress = 0

        newsblog.style.setProperty('--progress', progress)
    }
<<<<<<< HEAD
})
=======
})
>>>>>>> 42bc39ef03dc705c93d9fb11e1bece34ff414c94
