<?php

/*
    // Message Vars
    $msg = '';
    $msgClass = '';

    // Check for Submission
    if(filter_has_var(INPUT_POST, 'submit')){
        //Get Form Data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['message'];
        $message = $_POST['message'];

        // Check Required Fields
        if (!empty($name) && !empty($email) && !empty(message)){
            // Passed
            $MailTo = "shivamsaheb@hotmail.com";
            $Headers = "From: ".$MailFrom;
            $txt= "You have received an email from ".$Name. ".\n\n".$Message;
        }   else {
            // Failed
            $msg = 'Please fill in all the required fields';
        }

    }
*/

if (isset($_POST['Submit'])) {
    $Name = $_POST['Name'];
    $MailFrom = $_POST['Email'];
    $Subject = $_POST['Subject'];
    $Message = $_POST['Message'];

    $MailTo = "shivamrsaheb@gmail.com";
    $Headers = "From: ".$MailFrom;
    $txt= "You have received an email from ".$Name. ".\n\n".$Message;

    mail($MailTo, $Subject, $txt, $Headers);
    header("Location: index.php?mailsend");
    
}





?>