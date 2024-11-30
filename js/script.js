
//تم روشن و تاریک

function Theme() {
    var body = document.body;
    var main = document.querySelector('main');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var sunIcon = document.getElementById('sun');
    var moonIcon = document.getElementById('moon');

    if (body.classList.contains('dark-theme')) {
        main.style.backgroundColor = '#FEFDED';
        header.style.backgroundColor = '#BFF6C3';
        header.style.color = 'Black';
        footer.style.backgroundColor = '#BFF6C3';
        
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        
        body.classList.remove('dark-theme');
    } 
    else {
        main.style.backgroundColor = '#4F6F52';
        header.style.backgroundColor = '#1A5319';
        header.style.color = '#fff';
        footer.style.backgroundColor = '#1A5319';
        
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';

        body.classList.add('dark-theme');
    }
}

//دکمه رفتن به بالای سایت

var scrollbutton = document.getElementById('scrollbutton');
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollbutton.style.display = "block";
    } 
    else {
        scrollbutton.style.display = "none";
    }
};

scrollbutton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//بررسی خالی بودن فیلد ها در صفحه contact.html

function field() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var textarea = document.getElementById('textarea').value;
    var title = document.getElementById('title').value;

    if (title == "") {
        window.alert('کاربر گرامی، فیلد عنوان خالی است. لطفاً آن را پر کنید.😊');
        return;
    }
    if (name == "") {
        window.alert('کاربر گرامی، فیلد نام و نام خانوادگی خالی است. لطفاً آن را پر کنید.😊');
        return;
    }
    if (email == "") {
        window.alert('کاربر گرامی، فیلد ایمیل خالی است. لطفاً آن را پر کنید.😊');
        return;
    }
    if (phone == "") {
        window.alert('کاربر گرامی، فیلد شماره تلفن خالی است. لطفاً آن را پر کنید.😊');
        return;
    }
    if (textarea == ""){
        window.alert('کاربر گرامی، فیلد ارسال پیام خالی است. لطفاً آن را پر کنید.😊');
        return;
    }
    
    window.alert('کاربر گرامی ' + name + ' عزیز با شماره تلفن ' + phone + ' و ایمیل ' + email + '، متشکریم از ارسال پیام شما 😊');
}