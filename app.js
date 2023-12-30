document.addEventListener('DOMContentLoaded', function() {
    
    // query đến các class và gán vào một biến
    var button = document.querySelector('.container-btn');
    var toggleDesc = document.querySelector('.container-inner__desc');

    // add event vao button
    button.addEventListener('click', function() {
        toggleDesc.classList.toggle('hide')
    })
})

// document.addEventListener('DOMContentLoaded', function() {
//     var pageLinks = document.querySelectorAll('.container-inner__bottom--pages a');

//     pageLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             // Ngăn chặn hành vi mặc định của thẻ <a>
//             // event.preventDefault();

//             // Lấy thẻ <p> chứa thẻ <a> được click
//             var parentP = link.closest('.container-inner__bottom--pages');

//             // Xóa lớp 'active' từ tất cả các pages
//             pageLinks.forEach(function(innerLink) {
//                 innerLink.closest('.container-inner__bottom--pages').classList.remove('active');
//             });

//             // Thêm lớp 'active' cho thẻ <p> chứa thẻ <a> được click
//             parentP.classList.add('active');
//         });
//     });
// });