<?php
/*
Template Name: thanks
*/
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri();?>/img/favicon.png" sizes="32x32">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri();?>/img/favicon.png">
  <?php wp_head(); ?>
  <title>Сообщение отправлено</title>
</head>

<body>
  <a href="javascript:history.back();" style="text-decoration: none;">
    <section class="thanks center">
      <div class="container thanks-container">
        <p class="thanks-container__ok">Готово!</p>
        <div class="thanks-container__text">
          <p>Ваши данные отправлены</p>
          <p>и скоро мы с вами свяжемся</p>
        </div>
      </div>
    </section>
  </a>
</body>

</html>