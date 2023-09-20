<?php
  // Get form data
  
  $review = $_POST['review'];

  // Email configuration
  $to = 'fiverrfiver8@gmail.com';
  $subject = 'New Customer Review';
  $message = "$review";
  $headers = "From: $email\r\n" .
             "Reply-To: $email\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Send email
  if (mail($to, $subject, $message, $headers)) {
    echo "Thank you for your review!";
  } else {
    echo "Oops! An error occurred.";
  }
?>
