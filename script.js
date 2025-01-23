// تفعيل القائمة المنبثقة للأجهزة المحمولة
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// إضافة تأثير التمرير السلس
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// إضافة التفاعل مع النموذج
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    
    if (name && email) {
        alert('تم إرسال الرسالة بنجاح!');
    } else {
        alert('يرجى ملء جميع الحقول!');
    }
});
