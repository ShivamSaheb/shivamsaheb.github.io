<?php
    // Check for Submission
    if(filter_has_var(INPUT_POST, 'submit')){
        echo 'Submitted';
    }





/*
if (isset($_POST['Submit'])) {
    $Name = $_POST['Name'];
    $MailFrom = $_POST['Email'];
    $Subject = $_POST['Subject'];
    $Message = $_POST['Message'];

    $MailTo = "shivamsaheb@hotmail.com";
    $Headers = "From: ".$MailFrom;
    $txt= "You have received an email from ".$Name. ".\n\n".$Message;

    mail($MailTo, $Subject, $txt, $Headers);
    header("Location: index.php?mailsend");
    
}
*/