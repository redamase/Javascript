<?php if(isset($_POST)){
    error_reporting(0);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];
    $domain = $_SERVER['HTTP_HOST'];

    $to = "redamase24@gmail.com";
    $subject = `Contacto desde el formulario del sitio $domain: $subject`;
    $message = `
    <p>Datos enviados desde el formulario del sitio $domain</p>
    <ul>
    <li>Nombre: <b>$name</b></li>
    <li>Email: <b>$email</b></li>
    <li>Asunto: $subject</li>
    <li>Comentarios: $comments</li>
    </ul>
    `;

    $headers = "MIME-Version: 1.0/r/n"."Content-Type: text/html; charset=utf-87r7n".
    "From: Envio Automatico, No Responder <no-reply@$domain>";
    $send_mail = mail($to, $subject, $message, $headers);
    if($send_mail){
        $res=array(
            "err" => false,
            "message" => "tus datos han sido enviados"
        );
    }else{
        $res=array(
            "err" => true,
            "message" => "tus datos no han sido enviados"
        );
    }
    header('Content-Type: application/json');
    echo json_encode($res);
    exit;
}