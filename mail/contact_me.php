<?php
require '../vendor/autoload.php';
require '../vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $phone = strip_tags(htmlspecialchars($_POST['phone']));
        $subject = strip_tags(htmlspecialchars($_POST['subject']));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! Houve um problema com sua submissão, por favor complete o formulário e tente novamente!";
            exit;
        }

        // Set the email subject.
        $subject = "Novo contato de $name: $subject";
        // Build the email content.
        $email_content = "Nome: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Telefone: $phone\n\n";
        $email_content .= "Mensagem:\n$message\n";

        $mail = new PHPMailer();
        //Tell PHPMailer to use SMTP
        $mail->isSMTP();
        //Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        $mail->SMTPDebug = 0;
        $mail->Debugoutput = 'html';
        $mail->CharSet = 'UTF-8';
        $mail->Host = 'smtp.live.com';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        //Username to use for SMTP authentication - use full email address for gmail
        $mail->Username = "engenhejr@outlook.com";
        //Password to use for SMTP authentication
        $mail->Password = "senhasuper";

        $mail->setFrom($email, $name);
        $mail->addAddress('engenhejr@gmail.com', 'Engenhe Jr.');     // Add a recipient
        $mail->isHTML(false);                                  // Set email format to HTML

        $mail->Subject = $subject;
        $mail->Body    = $email_content;

        //Send the email.
        if ($mail->send()) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Obrigado! Sua mensagem foi envida com sucesso.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! $mail->ErrorInfo";
        }
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Não é possível fazer essa operação, tente novamente.";
    }
?>
