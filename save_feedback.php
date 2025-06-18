<?php
// save_feedback.php

// Проверяем, что запрос пришел методом POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из формы
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $comment = isset($_POST['comment']) ? htmlspecialchars($_POST['comment']) : '';
    
    // Проверяем, что все поля заполнены
    if (!empty($name) && !empty($email) && !empty($comment)) {
        // Формируем строку для записи в файл
        $data = "Имя: $name\nEmail: $email\nКомментарий: $comment\n\n";
        $data .= "Дата: " . date('Y-m-d H:i:s') . "\n";
        $data .= "----------------------------------------\n\n";
        
        // Путь к файлу, куда будем сохранять (в той же папке, что и скрипт)
        $file = 'feedback_data.txt';
        
        // Записываем данные в файл (добавляем в конец)
        if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
            echo "Данные успешно сохранены.";
        } else {
            echo "Ошибка при сохранении данных.";
        }
    } else {
        echo "Не все поля заполнены.";
    }
} else {
    echo "Недопустимый метод запроса.";
}
?>