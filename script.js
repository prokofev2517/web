document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем значения полей
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();
        
        // Скрываем предыдущие сообщения
        errorElement.style.display = 'none';
        successElement.style.display = 'none';
        
        // Проверяем поля
        if (!name || !email || !comment) {
            showError('Все поля обязательны для заполнения!');
            return;
        }
        
        // Проверяем email с помощью регулярного выражения
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Пожалуйста, введите корректный email!');
            return;
        }
        
        // Если все проверки пройдены
        showSuccess(`Спасибо, ${name}!<br>Ваш комментарий успешно отправлен.<br>Мы свяжемся с вами по email: ${email}`);
        
        // Очищаем форму
        feedbackForm.reset();
    });
    
    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function showSuccess(message) {
        successElement.innerHTML = message;
        successElement.style.display = 'block';
        
        // Через 5 секунд скрываем сообщение об успехе
        setTimeout(() => {
            successElement.style.display = 'none';
        }, 5000);
    }
});